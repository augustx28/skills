---
name: price-action-trading
description: Analyze a forex chart and produce a disciplined price-action trade plan for the New York session (8:00 AM – 12:00 PM EST). Use whenever the user asks for a trade idea, setup, entry/stop/target, or "should I buy/sell" on a forex pair using pure price action — raw candles, market structure, support/resistance, liquidity, rejections, fakeouts, and clean traffic. No indicators. Outputs a structured Trade Plan (direction, entry, stop, targets, R:R, confidence, star rating) or "No valid setup right now" with levels to monitor.
---

# Price Action Trading Plan

## What this is

A strict, top-down method for trading forex with pure price action during the
New York session (8:00 AM – 12:00 PM EST). No indicators. No exceptions. Decisions
come from raw candles, market structure, support/resistance zones, liquidity,
rejections, fakeouts, and clean traffic to the left.

Work through the phases **in order**. Do not skip ahead. Do not propose a trade
until confluence is confirmed (Step 8) and a candle has closed in your direction
(Step 9). When confluence is missing, say so — "No valid setup right now" is a
valid and frequent answer.

## Core principles (apply to every analysis)

- **Mark market structure first.** Higher highs + higher lows = uptrend.
  Lower highs + lower lows = downtrend. Candles side by side = consolidation.
- **Price action only.** Ignore indicators. Focus on raw candles, support/resistance,
  and structure.
- **Prioritize clean traffic to the left.** Find ranges where price moved freely
  before — it can move freely again. Bigger range = easier trade.
- **Read the chart in this order:** liquidity → rejection zones → support/resistance
  → impulsive moves.
- **Require confluence before any trade:** HTF zone + clean range + candle
  confirmation (+ volume). No confluence = no trade.

---

## Phase 1: Pre-Session Prep (before 8:00 AM)

1. **Lock the session.** 8:00 AM – 12:00 PM EST = New York session. Confirm volume:
   NY Open and the London/NY overlap bring the most volume; bigger candles = better
   execution. After 11 AM volume drops — switch to 4H only if no volume is present.
2. **Check news.** Scan Forex Factory for high-impact news (NFP, FOMC, rates, speeches).
   If news hits within 15–30 minutes, stay off the charts — volatility spikes and
   candles break highs/lows haphazardly. Unplanned breaking news also spikes volume.
3. **Select the pair.** NY session favors USD pairs. Check correlation (e.g. GBP/USD
   can consolidate in NY when both currencies are active). Skip pairs with a wide
   spread. Only trade pairs you've backtested in the NY session. Know the
   fundamentals (oil for USD/CAD, etc.).

## Phase 2: Risk Setup (before any chart analysis)

4. **Define risk.**
   - Daily risk: a number you're comfortable losing (static risk for newer traders).
   - Max trades per day: **1–2.** Overtrading after a loss blows accounts.
   - Goals: 20% monthly → ~5% weekly → ~1% daily. Don't chase 20% in a day.
   - **Lot size = Dollar Risk ÷ Stop Loss (in points).** Example: $50 risk on a
     20-pip (200-point) stop = 0.25 lot.

## Phase 3: Technical Analysis (top-down)

5. **Higher timeframe (4H / Daily).** Identify HTF trend (HH/HL vs LH/LL). Daily may
   be bullish while 1H/30M is bearish — trade your execution timeframe but take
   directional bias from HTF. Mark HTF support/resistance as **zones** (collections
   of prices, drawn from wick rejections), not single lines.
6. **Execution timeframes (30M / 1H).** 30M is the primary confirmation timeframe;
   15M is too weak to be consistent. Mark structure:
   - Uptrend → wait for support to form (bullish candle after bearish), then look for buys.
   - Downtrend → wait for resistance to form (bearish candle after bullish), then look for sells.
   - Consolidation → don't trade inside the range; wait for a breakout or fakeout.
7. **Mark fresh zones.** Plot the most recent (recently rejected) S/R zones. Ask:
   if price breaks up, where does it go? If it breaks down, where? Check **clean
   traffic to the left** — 40–50 pip range is ideal, 20 pips can work, **10 pips = no trade.**
8. **Confirm confluence.** You need these aligned before entry:
   1. HTF zone (4H/Daily S/R)
   2. Clean range (20+ pips to the next zone)
   3. LTF candle confirmation (30M/1H close in your direction)
   4. Volume (NY Open or London/NY overlap)

   **No confluence = no trade.**

## Phase 4: Entry Confirmation

9. **Wait for the candle to close in your direction.** This is the most important step —
   anticipating instead of waiting for confirmation is why traders lose.
   - At resistance: wait for a **bearish candle to close** before selling. A Doji or
     bullish candle at resistance is not a sell.
   - At support: wait for a **bullish candle to close** before buying.
   - The candle must **close**, not just wick.
10. **Check fakeouts, rejections, wick fills.**
    - Bullish fakeout: price breaks above resistance, then closes back inside →
      high probability of pushing down (range must be ≥ 30 pips).
    - Bearish fakeout: price breaks below support, then closes back inside →
      high probability of pushing up.
    - Wick fills: wicks are breadcrumbs; price often returns to fill them. No bottom
      wick = no room below = supports a bullish bias.
    - Rejection in zones: if price wicks into a zone but fails to close through it,
      prioritize fading the move.
11. **In a range, prioritize range plays.** Buy low (support + bullish confirmation),
    sell high (resistance + bearish confirmation). Only switch to a breakout when a
    candle **firmly closes outside** the range.

## Phase 5: Execution

12. **Place the stop loss FIRST** — the level that nullifies the trade.
    - Buy: stop below the low (wick) of the previous 30M/1H candle.
    - Sell: stop above the high (wick) of the previous 30M/1H candle.
    - Stop too big? Skip the trade. Stop too small? It'll get hunted.
    - Calculate lot size with the Step 4 formula.
13. **Enter** at or near the zone, after candle confirmation. If you missed it and
    price is mid-range, don't chase — middle of range = 50/50, not a trade.

## Phase 6: Trade Management

14. **Secure profits early.** 10–15 pips is consistent bread and butter; 10–20 pips
    is realistic on 30M/1H. 4H/Daily targets are larger.
15. **Move stop to breakeven** once in profit — immediately. Then trail with structure:
    buy → trail below the lows of subsequent candles; sell → trail above the highs.
    A candle breaking the prior candle's low (buy) or high (sell) signals a possible
    reversal — you should already be out.
16. **Manage drawdown.** If price is heading to your stop and likely to hit, close
    partials (50–75%) to cut the loss. Don't eat the full stop.
17. **Leave a runner (optional).** If letting profits run scares you, leave a tiny
    position (e.g. 0.01 lot) at breakeven to build confidence over time.

## Phase 7: End-of-Session Rules

18. **Up for the day → stop.** Green is the top 5%. Whether it's $12 or $118, call it.
    "One more trade" when you're up is how you give it back.
19. **Max 1–2 trades.** Two losses → done for the day. No revenge trading.
20. **Journal every trade.** Before screenshot (what you saw/thought) and after
    screenshot (what happened). Study wins to replicate, losses to avoid repeating.

---

## Output format

When you propose a trade, output exactly this:

```
Trade Plan: (timeframe)
• Direction: Buy / Sell
• Entry price: (limit or stop)
• Stop-loss: <price> (<N> pips)
• Take-profit: <price(s)> (<N> pips)
• Risk-to-reward: <ratio>
• Confidence: High / Moderate / Low
• Rationale: 1–2 concise, direct sentences referencing the framework rules
  (e.g. HTF zone + clean traffic + candle close + fakeout/rejection).
• Trade quality: ⭐ to ⭐⭐⭐⭐⭐
```

Then add a short reasoning paragraph explaining the read (structure, zones,
confluence, what would invalidate it).

### If there is no high-probability setup

```
No valid setup right now.
```

Then suggest specific things to monitor: price levels (the S/R zones to watch),
sessions (e.g. wait for the London/NY overlap volume), or news times that could
create a setup.

## Rules

- Pure price action. Never cite or rely on indicators.
- Never propose a trade without confirmed confluence and a closed candle in your direction.
- Keep every line simple, concise, and direct. Use real numbers and pip counts, not vague qualifiers.
- Default to "No valid setup right now" when the criteria aren't met — patience is the edge.
- Always place the stop conceptually before the entry, and size the position from the stop.
