/* Browser tests for plugin-sorter.js, run against a mock of TypingMind's
 * plugin menu (mock-menu.html).
 *
 * Run from the repo root:
 *   NODE_PATH=$(npm root -g) node --test typingmind/test/sorter.test.js
 * Needs Playwright with its Chromium (npm i -g playwright && npx playwright install chromium).
 */
'use strict';

const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { chromium } = require('playwright');

const ORIGIN = 'http://tm.test';
const FILES = {
    '/menu.html':        path.join(__dirname, 'mock-menu.html'),
    '/plugin-sorter.js': path.join(__dirname, '..', 'plugin-sorter.js'),
    '/v13.js':           path.join(__dirname, 'fixtures', 'plugin-sorter-v13.js')
};
const SETTLE = 600;   // longer than every debounce in the sorter

let browser;
before(async () => { browser = await chromium.launch(); });
after(async () => { await browser.close(); });

// A fresh browser profile per test, so localStorage never leaks between tests.
async function withMenu(opts, fn) {
    const { sorter = 'plugin-sorter.js', mode, enabled, seed, touch } = opts;
    const context = await browser.newContext({
        viewport: { width: 420, height: 900 },
        hasTouch: !!touch
    });
    await context.route(ORIGIN + '/**', (route) => {
        const { pathname } = new URL(route.request().url());
        if (pathname === '/blank.html') {
            return route.fulfill({ contentType: 'text/html', body: '<!doctype html><title>blank</title>' });
        }
        return FILES[pathname]
            ? route.fulfill({ path: FILES[pathname] })
            : route.fulfill({ status: 404, body: 'not found' });
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    try {
        if (seed) {
            await page.goto(ORIGIN + '/blank.html');
            await page.evaluate((s) => {
                for (const [k, v] of Object.entries(s)) localStorage.setItem(k, JSON.stringify(v));
            }, seed);
        }
        const qs = new URLSearchParams({ sorter });
        if (mode) qs.set('mode', mode);
        if (enabled) qs.set('enabled', enabled);
        await page.goto(ORIGIN + '/menu.html?' + qs);
        await loaded(page);
        await fn(page);
        assert.deepEqual(errors, [], 'the page threw');
    } finally {
        await context.close();
    }
}

async function loaded(page) {
    await page.waitForFunction(() => window.__sorterLoaded === true);
    await page.waitForTimeout(SETTLE);
}

async function reload(page) {
    await page.reload();
    await loaded(page);
}

const settle = (page, ms = SETTLE) => page.waitForTimeout(ms);
const row = (page, section, name) =>
    page.locator(`[data-section="${section}"] [role="menuitem"][data-name="${name}"]`);
const header = (page, section) => page.locator(`[data-section="${section}"] > button`);
const order = (page, section) => page.$$eval(
    `[data-section="${section}"] [role="menuitem"]`, (rows) => rows.map((r) => r.dataset.name));
const switchOf = (page, section, name) =>
    row(page, section, name).locator('[role="switch"]').getAttribute('aria-checked');

// Press the drag handle, move past the 5px threshold, then drop in the top
// part of `before` or the bottom part of `after`.
async function drag(page, section, name, { before, after, fast }) {
    const h = await row(page, section, name).locator('.tm-handle').boundingBox();
    const t = await row(page, section, before || after).boundingBox();
    const x = h.x + h.width / 2;
    const y = h.y + h.height / 2;
    const ty = before ? t.y + 4 : t.y + t.height - 4;
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x, y + Math.sign(ty - y) * 10);
    await page.mouse.move(x, ty, { steps: fast ? 3 : 8 });
    await page.waitForTimeout(fast ? 40 : 100);   // a few frames for the drag loop to place the gap
    await page.mouse.up();
}

// Same gesture with a finger, through real touch events.
async function touchDrag(page, section, name, { before }) {
    const cdp = await page.context().newCDPSession(page);
    const h = await row(page, section, name).locator('.tm-handle').boundingBox();
    const t = await row(page, section, before).boundingBox();
    const x = h.x + h.width / 2;
    const y = h.y + h.height / 2;
    const ty = t.y + 4;
    const touch = (type, at) => cdp.send('Input.dispatchTouchEvent', {
        type, touchPoints: at === undefined ? [] : [{ x, y: at }]
    });
    await touch('touchStart', y);
    for (let i = 1; i <= 8; i++) {
        await touch('touchMove', y + ((ty - y) * i) / 8);
        await page.waitForTimeout(16);
    }
    await page.waitForTimeout(100);
    await touch('touchEnd');
}

test('switching a plugin on leaves it where it is', () => withMenu({}, async (page) => {
    await row(page, 'Built-in', 'Charlie').click();
    await settle(page);
    assert.equal(await switchOf(page, 'Built-in', 'Charlie'), 'true');
    assert.deepEqual(await order(page, 'Built-in'), ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo']);
}));

test('plugins already on keep their slot in the order V13 saved', () => withMenu({
    seed: {
        tm_plugin_sort_v9: {
            groups: { 'g:built-in': ['Echo', 'Alpha', 'Delta', 'Bravo', 'Charlie'] },
            legacy: [],
            pins: { 'g:built-in': ['Delta'] },
            floatOn: true,
            pinBoot: true
        },
        mock_on: ['Delta']
    }
}, async (page) => {
    assert.deepEqual(await order(page, 'Built-in'), ['Echo', 'Alpha', 'Delta', 'Bravo', 'Charlie']);
}));

test('a dragged order survives the section reopening and a reload', () => withMenu({}, async (page) => {
    const want = ['Delta', 'Alpha', 'Bravo', 'Charlie', 'Echo'];
    await drag(page, 'Built-in', 'Delta', { before: 'Alpha' });
    await settle(page);
    assert.deepEqual(await order(page, 'Built-in'), want);

    await header(page, 'Built-in').click();   // close: rows unmount
    await header(page, 'Built-in').click();   // open: fresh rows in TypingMind's order
    await settle(page);
    assert.deepEqual(await order(page, 'Built-in'), want);

    await reload(page);
    assert.deepEqual(await order(page, 'Built-in'), want);
}));

test('a switched-on plugin you drag stays where you drop it', () => withMenu({}, async (page) => {
    const want = ['Alpha', 'Charlie', 'Delta', 'Bravo', 'Echo'];
    await row(page, 'Built-in', 'Bravo').click();
    await settle(page);
    await drag(page, 'Built-in', 'Bravo', { after: 'Delta' });
    await settle(page);
    assert.deepEqual(await order(page, 'Built-in'), want);

    await reload(page);
    assert.equal(await switchOf(page, 'Built-in', 'Bravo'), 'true');
    assert.deepEqual(await order(page, 'Built-in'), want);
}));

test('a click right after a drop is swallowed, and clicks work again after', () => withMenu({}, async (page) => {
    await drag(page, 'Built-in', 'Delta', { before: 'Alpha' });
    const dropped = Date.now();
    const box = await row(page, 'Built-in', 'Charlie').boundingBox();
    await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
    const took = Date.now() - dropped;
    assert.ok(took < 400, `the click has to land inside the click shield, took ${took}ms`);
    await settle(page);
    assert.equal(await switchOf(page, 'Built-in', 'Charlie'), 'false', 'the post-drop click went through');

    await row(page, 'Built-in', 'Charlie').click();
    await settle(page, 300);
    assert.equal(await switchOf(page, 'Built-in', 'Charlie'), 'true', 'the click shield never lifted');
}));

test('two quick drops in a row leave the page clickable', () => withMenu({}, async (page) => {
    await drag(page, 'Built-in', 'Echo', { before: 'Alpha', fast: true });
    const first = Date.now();
    await drag(page, 'Built-in', 'Delta', { before: 'Echo', fast: true });
    const gap = Date.now() - first;
    assert.ok(gap < 400, `second drop has to land inside the first drop's click shield, took ${gap}ms`);
    await settle(page, 1000);
    assert.deepEqual(await order(page, 'Built-in'), ['Delta', 'Echo', 'Alpha', 'Bravo', 'Charlie']);

    await row(page, 'Built-in', 'Charlie').click();
    await settle(page, 300);
    assert.equal(await switchOf(page, 'Built-in', 'Charlie'), 'true', 'the click was swallowed');
}));

test('switching a moved-out plugin off puts it back in its dragged slot', () => withMenu({ mode: 'move' }, async (page) => {
    await drag(page, 'Built-in', 'Echo', { before: 'Alpha' });
    await settle(page);
    await row(page, 'Built-in', 'Echo').click();   // on: TypingMind moves it to Enabled
    await settle(page);
    assert.deepEqual(await order(page, 'Built-in'), ['Alpha', 'Bravo', 'Charlie', 'Delta']);
    assert.deepEqual(await order(page, 'Enabled'), ['Echo']);

    await row(page, 'Enabled', 'Echo').click();    // off: TypingMind re-adds it at its own spot
    await settle(page);
    assert.deepEqual(await order(page, 'Built-in'), ['Echo', 'Alpha', 'Bravo', 'Charlie', 'Delta']);
}));

test('dragging in the Enabled section leaves the other sections alone', () => withMenu({
    seed: { mock_on: ['Bravo', 'Delta', 'Kilo'] }
}, async (page) => {
    assert.deepEqual(await order(page, 'Enabled'), ['Bravo', 'Delta', 'Kilo']);
    const builtIn = await order(page, 'Built-in');
    const skills = await order(page, 'Skills');

    await drag(page, 'Enabled', 'Kilo', { before: 'Bravo' });
    await settle(page);
    assert.deepEqual(await order(page, 'Enabled'), ['Kilo', 'Bravo', 'Delta']);
    assert.deepEqual(await order(page, 'Built-in'), builtIn);
    assert.deepEqual(await order(page, 'Skills'), skills);

    await reload(page);
    assert.deepEqual(await order(page, 'Enabled'), ['Kilo', 'Bravo', 'Delta']);
}));

test('a section you close stays closed through a reload and a menu reopen', () => withMenu({}, async (page) => {
    const expanded = () => header(page, 'Skills').getAttribute('aria-expanded');
    const trigger = page.locator('button[aria-haspopup="menu"]');

    await header(page, 'Skills').click();
    await settle(page);
    await reload(page);
    assert.equal(await expanded(), 'false');
    assert.deepEqual(await order(page, 'Skills'), []);

    await trigger.click();                         // close the menu
    await trigger.click();                         // reopen: every section mounts open
    await settle(page);
    assert.equal(await expanded(), 'false');

    await header(page, 'Skills').click();          // open it again yourself
    await settle(page);
    await reload(page);
    assert.equal(await expanded(), 'true');
    assert.deepEqual(await order(page, 'Skills'), ['Kilo', 'Lima', 'Mike']);
}));

// If TypingMind's Enabled section has no collapsible header, the nearest
// thing with aria-expanded above its list is the plugin menu's own button,
// and V13 remembered that button like a section. These seed what it saved.
test('a remembered "open" for the menu button never reopens the menu', () => withMenu({
    enabled: 'plain',
    seed: { mock_on: ['Bravo'], tm_plugin_sort_v5_toggles: { plugins: true } }
}, async (page) => {
    const menus = () => page.locator('[role="menu"]').count();
    await page.mouse.click(400, 880);                    // close it by clicking away
    await settle(page, 1500);                            // past section memory's hands-off window
    assert.equal(await menus(), 0);

    // anything else on the page that expands, like a tool-call block in chat
    await page.evaluate(() => document.body.insertAdjacentHTML('beforeend',
        '<div><button type="button" aria-expanded="false">Used a plugin</button></div>'));
    await settle(page);
    assert.equal(await menus(), 0, 'the menu opened by itself');
}));

test('a remembered "closed" for the menu button never shuts the menu', () => withMenu({
    enabled: 'plain',
    seed: { mock_on: ['Bravo'], tm_plugin_sort_v5_toggles: { plugins: false } }
}, async (page) => {
    await settle(page, 1600);                            // one section-memory heartbeat
    assert.equal(await page.locator('[role="menu"]').count(), 1, 'the menu shut itself');
}));

test('dragging works in an Enabled section with no collapsible header', () => withMenu({
    enabled: 'plain', seed: { mock_on: ['Bravo', 'Delta', 'Kilo'] }
}, async (page) => {
    const builtIn = await order(page, 'Built-in');
    await drag(page, 'Enabled', 'Kilo', { before: 'Bravo' });
    await settle(page);
    assert.deepEqual(await order(page, 'Enabled'), ['Kilo', 'Bravo', 'Delta']);
    assert.deepEqual(await order(page, 'Built-in'), builtIn);

    await reload(page);
    assert.deepEqual(await order(page, 'Enabled'), ['Kilo', 'Bravo', 'Delta']);
}));

test('a touch drag reorders plugins', () => withMenu({ touch: true }, async (page) => {
    const want = ['Alpha', 'Echo', 'Bravo', 'Charlie', 'Delta'];
    await touchDrag(page, 'Built-in', 'Echo', { before: 'Bravo' });
    await settle(page);
    assert.deepEqual(await order(page, 'Built-in'), want);
    await reload(page);
    assert.deepEqual(await order(page, 'Built-in'), want);
}));

for (const [when, sorter] of [['already running', 'v13.js,plugin-sorter.js'],
                              ['loading after it', 'plugin-sorter.js,v13.js']]) {
    test(`a V13 copy ${when} can't float plugins or break dragging`, () => withMenu({ sorter }, async (page) => {
        await row(page, 'Built-in', 'Charlie').click();
        await settle(page);
        assert.deepEqual(await order(page, 'Built-in'), ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo']);

        await drag(page, 'Built-in', 'Echo', { before: 'Alpha' });
        await settle(page);
        assert.deepEqual(await order(page, 'Built-in'), ['Echo', 'Alpha', 'Bravo', 'Charlie', 'Delta']);
    }));
}
