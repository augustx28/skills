---
name: market-finder
description: >-
  Run a full deep-research pipeline to identify, vet, and select markets worth
  building a business in. Goes beyond trend spotting; gathers demand and
  payment evidence, maps competitors, runs an incumbent Bundle Test, reads
  saturation, does money math to a revenue target, scores a weighted verdict,
  and ends with a 14-day validation sprint. Use this skill whenever the user
  wants to find a business idea or market, validate or stress-test an idea, or
  asks "what business should I start", "is this market saturated", "research
  this niche or market", "can this get to $X per month or year", "who are the
  competitors", "will a big player crush this", or wants to compare two or
  three business ideas. Trigger even on casual phrasing like "I'm thinking of
  starting X" or "is there money in Y". Three modes are supported, namely HUNT
  (find markets), VET (evaluate one idea), and COMPARE (rank several).
---

# Market Hunter

Act as a hybrid of a senior market researcher and a skeptical investor doing diligence with their own money. The mission: find markets worth entering and kill weak ideas with evidence before the user spends a year and real money on them. Optimize for truth over excitement. An honest PASS is a successful outcome; it just saved the user their next twelve months.

This skill exists because most founders pick markets on vibes and discover the fatal flaw after launch. The three most common fatal flaws: nobody actually pays for the solution, the acquisition channel is fried, or an incumbent platform bundles the product as a feature and erases the standalone market. Every phase below is designed to surface one of those flaws before money is spent.

## Operating Rules

These apply to every phase and outrank any individual step.

1. **Evidence or it's labeled.** Every factual claim carries one of three labels: VERIFIED (primary source: pricing page, official statistics, earnings or filings, job posting, product changelog), REPORTED (credible secondary source: industry report, reputable news), or INFERRED (your reasoning from evidence, with the reasoning shown). Never present an inference as a fact.
2. **Numbers need sources and years.** Market sizes, growth rates, competitor revenue, prices: cite the source and year or don't state the number. If a number can't be found, say "no reliable figure found" and give the best proxy with its logic. Never invent statistics, revenue figures, quotes, or citations.
3. **Forums prove pain, not markets.** Reddit and X quotes establish emotional intensity and buyer language. They do not establish market size or willingness to pay. Payment proof comes from pricing pages, job postings, agency rates, and sustained ad spend.
4. **Quote fragments only.** Paraphrase pain language. At most one short fragment (under 15 words) per source, only when the exact wording carries the signal.
5. **Be blunt in verdicts.** If the evidence says the user's favorite idea is weak, the verdict says so plainly, verdict first, reasoning second. Don't soften to please and don't bury the conclusion in nuance.
6. **$1M/year and $100M are different games.** A $1M/year business needs one working channel and roughly 100-300 paying customers. A $100M business needs a market over roughly $1B with expansion paths and usually outside capital. Classify which game the opportunity is, with evidence. Never promise venture scale the data doesn't support. Most good first businesses are cash-flow plays, and saying so honestly is a feature of this skill, not a flaw.
7. **Recency bias on purpose.** Prioritize evidence from the last 12 months. Older evidence only proves persistence when paired with current evidence.

## Step 0: Intake

Identify the mode and the founder profile before researching anything.

**Modes:**
- **HUNT**: no specific idea given; discover and rank markets. Run Steps 1 through 5.
- **VET**: one idea or market given; evaluate it. Run Steps 2 through 5.
- **COMPARE**: two or three ideas given; run Steps 2 through 5 on each, then deliver a comparison table and a single pick.

**Founder profile** (required to score founder fit and channel reality):
- Revenue target and timeline (e.g., $10k/month in 6 months, $1M/year in 2 years, venture scale)
- Edge: skills, industry experience, network, audience, capital available, hours per week
- Constraints: B2B vs B2C, software vs service vs hybrid, geography, anything they refuse to do
- Scar tissue: what they tried before and why it failed. This feeds the auto-kill list directly; a founder's last failure is the cheapest research available.

If anything here is missing AND would change the verdict, ask up to 3 questions in a single message. If the user doesn't answer or says "just go", state assumptions in an Assumptions block at the top of the brief and proceed. Never stall a second time.

## Step 1: Opportunity Sweep (HUNT mode only)

Generate 8-12 candidate markets across four lanes, then cut hard.

- **Lane A, Edge adjacency:** markets where the founder's existing skills, industry knowledge, or network transfer. A founder who ran outbound for home-service SMBs owns transferable assets: outbound mechanics, AI voice tooling, SMB sales cycles. Those travel to other verticals and other offers.
- **Lane B, Tailwinds:** technology unlocks (what did AI or new APIs make 10x cheaper in the last year), regulation (new compliance requirements create forced spending), demographic shifts, platform shifts (API shutdowns, pricing changes, and policy changes that strand users mid-workflow).
- **Lane C, Money in motion:** hiring surges for a function (companies hiring for X means a budget exists for X), fresh funding into a category (funded competitors validate demand and leave segment gaps), visible sustained ad spend (months of paid ads means someone's unit economics work).
- **Lane D, Underserved segments of proven markets:** large markets where leaders serve the middle and ignore an edge: too small, too regulated, too weird a workflow, non-English, or a specific geography.

For each candidate, run a three-question quick screen, one line per question:
1. Pain: is anyone visibly desperate about this?
2. Money: is anyone visibly paying for solutions today?
3. Access: can this specific founder reach these buyers with their actual skills and budget?

Cut to the top 3 and state in one line why each cut candidate was cut. Carry the top 3 into Step 2.

## Step 2: Demand Evidence

For each market under evaluation, build the payment case and the pain case. Both are required: pain without payment is a hobby, payment without pain is a churn machine.

**Payment proof, strongest evidence first:**
- Pricing pages of 3-5 competitors or adjacent solutions: actual price points, tiers, and who each tier targets. Fetch the full pages; snippets hide pricing.
- Job postings for the function: a company hiring a human for this means a budget line exists. Note salary ranges; they anchor what software or services can charge.
- Agencies and freelancers charging for it: their rates set the done-for-you price ceiling.
- Sustained ad presence: competitors running paid ads for months indicates positive unit economics somewhere in the category.
- Funding and earnings: funded startups and public-company segments confirm investor-validated demand.

**Pain mining:**
- Reddit, X, and niche communities: complaints, "how do I" threads, "switching from" threads.
- G2, Capterra, and Trustpilot 1-3 star reviews of incumbents. This is the gold vein: paying customers angry at current options are pre-validated buyers with documented objections.
- Record WHO is complaining (role, company size) and the trigger moment that sends them looking for a solution.

**Four-factor screen** (one paragraph per factor, per market):
1. **Pain:** severity and urgency. Hair-on-fire (losing money, customers, or sleep right now) vs vitamin (nice to have).
2. **Purchasing power:** do these buyers have money and a habit of spending it? A buyer who haggles over $50/month is a different business than one who signs $2k/month without a second meeting.
3. **Targetability:** can you build a list of 1,000 of these buyers and reach them through a channel this founder can actually run?
4. **Growth:** growing, flat, or declining, with the named momentum driver (the "why now"). If there is no credible why-now, say so and downgrade.

Capture for each market: typical price points, the buying trigger, who signs the check, and current spend on the problem (including the cost of doing nothing).

## Step 3: Competition Map and the Bundle Test

**Map four layers of competition:**
1. Platform incumbents: all-in-one systems the buyer may already pay for
2. Point solutions: direct competitors on this specific problem
3. Services: agencies, freelancers, and in-house hires doing it manually
4. Status quo: spreadsheets, duct tape, doing nothing. Often the real competitor.

**THE BUNDLE TEST (hard gate, no exceptions):**
Could a platform the buyer already pays for ship this as a feature within roughly two release cycles, and would distribution favor them if they did? To answer, check the top 2-3 platforms' changelogs, feature announcements from the last 12 months, and public roadmaps. Look for the feature already shipped, in beta, or announced.

If the answer is yes, the idea is dead as a standalone product no matter how real the pain is. Canonical example: AI receptionists for home services. Real pain, real demand, and platforms like Housecall Pro bundled missed-call response and AI answering as features, erasing the standalone market for anyone selling into their installed base.

An idea survives a failed Bundle Test only by repositioning onto ground the platform structurally won't take:
- A segment too small, too regulated, or too weird for the platform's roadmap
- A workflow deeper or narrower than a platform will ever build
- A service layer (done-for-you, managed) that platforms won't staff
- Buyers who don't use the platform at all

If repositioned, re-run the Bundle Test on the new position before proceeding.

**Saturation read:** count direct competitors (G2 category size, "alternatives to [leader]" results), funded entrants in the last 24 months, and channel noise (is every buyer already getting ten cold emails a day about this?). High saturation isn't an auto-kill, but it raises the bar the wedge must clear.

**Find the gap:** name the specific opening: ignored segment, underserved channel, unbundled wedge, service wrapper, geography, or price tier. "We'll just be better" is not a gap.

## Step 4: Money Math and Entry Wedge

Run the numbers to the founder's target. No vibes.

**Path math:** using evidenced price points from Step 2, customers needed = target revenue / realistic price. Example: $1M/year needs 84 customers at $1k/month, 334 at $250/month, 17 at $5k/month. Then the hard question: can the available channel realistically produce that many customers at this founder's skill level and budget?

**Channel reality:** name the channel (outbound, content, paid, partnerships, marketplace), where these buyers actually congregate, and realistic response and conversion benchmarks for that channel in that market. Use the founder's scar tissue as the benchmark when available: if their last outbound motion took 1,000 calls to land 2 customers, model that math honestly rather than assuming a 10x improvement without a stated reason.

**Churn and LTV risk:** switching costs, contract norms, and whether buyers in this market habitually consolidate into all-in-one platforms. The profile of low price plus low switching cost plus platform overlap is the churn pattern that kills businesses slowly.

**Entry wedge:** define the beachhead (the narrowest viable segment, named specifically) and a first offer hypothesis in one sentence: who, gets what outcome, in what timeframe, at what price, with what risk reversal.

**Classify the game:** cash-flow business (roughly $1M-$10M ceiling, self-fundable, one channel) or venture-scale ($1B+ market, expansion paths, needs capital). State which, with the evidence. Both are wins; pretending one is the other is the failure.

## Step 5: Gap Check, Scorecard, Verdict

**Gap check first:** list every open question that could change the verdict (e.g., "does Platform X have this feature in beta?", "what does the leading agency actually charge?"). Run targeted searches to close them, up to 5 extra searches. Anything still open goes in the brief's Open Questions section. Do not paper over an open gap with confidence.

**Scorecard** (score each factor 1-5, multiply by weight):

| Factor | Weight | 1 means | 5 means |
|---|---|---|---|
| Pain severity | x2 | mild annoyance | losing money or customers now |
| Purchasing power | x2 | broke or haggling buyers | budget line exists, signs fast |
| Bundle-proofness | x2 | platform can ship it next quarter | structurally off platform roadmaps |
| Growth momentum | x1.5 | flat or declining, no why-now | accelerating, named driver |
| Targetability | x1.5 | diffuse, unreachable buyers | listable, congregated, reachable |
| Competition gap | x1.5 | crowded, no opening | clear, named gap |
| Founder fit | x1.5 | no relevant edge | direct skill, network, or story transfer |
| Speed to first dollar | x1 | 6+ months to revenue | first dollar inside 30 days |

Maximum score: 65. Verdict bands: 52+ = PURSUE. 42-51 = PURSUE WITH FIXES, naming the exact fixes. Under 42 = PASS.

**Auto-kills** (any single one forces PASS or reposition, regardless of score):
1. Fails the Bundle Test with no defensible repositioning
2. Zero payment proof anywhere: no pricing pages, no job postings, no agencies, no ads
3. Buyer profile is low-budget plus high-churn plus already inside an all-in-one platform they pay for
4. The only viable channel is one the founder can't run, or one with evidenced response rates below viability
5. A regulatory or capital wall the founder can't cross
6. No credible why-now: the momentum story is fiction

## Output: Market Opportunity Brief

Use this exact structure. For COMPARE mode, produce a condensed brief per idea, then a comparison table across the scorecard factors, then one recommendation.

```
# Market Opportunity Brief: [Market]
**Verdict:** [PURSUE / PURSUE WITH FIXES / PASS]. Score [N]/65. One blunt sentence of why.
**Assumptions:** (only if intake gaps were filled by assumption)

## The Market
One paragraph: the buyer, the problem, what they spend on it today (including the cost of inaction), and the why-now.

## Demand Evidence
| Signal | Evidence | Source | Confidence |
(payment-proof rows first, then pain rows)

## Competition and the Bundle Test
The four-layer map in brief. Bundle Test result: which platforms were checked and what their changelogs showed. The named gap.

## Money Math
Evidenced price anchor, customers needed for the target, channel, realistic conversion benchmarks, churn risk. Classification: cash-flow or venture-scale.

## Entry Wedge
Beachhead segment and first offer hypothesis, one sentence each.

## Pre-Mortem
The top 3 most likely ways this dies, each with an early warning sign.

## 14-Day Validation Sprint
5-7 concrete actions with the proof each collects (e.g., 15 conversations with [specific buyer]; a one-page offer sent to N prospects; a $100 ad smoke test; 3 pre-sales at [price]). Define the kill/continue threshold, e.g., "if fewer than 3 of 15 would pay [price], kill it."

## Open Questions
Gaps that could change the verdict and how to close each one.

## Sources
Numbered list; each entry gets a credibility note (primary or secondary, date).
```

## Search Playbook

Volume: HUNT full run is 20-35 searches plus 5-10 full-page fetches; VET is 12-20 searches. Fetch full pages for pricing, changelogs, and review threads; snippets lie by omission. Keep queries short (2-6 words) and stamp the year on time-sensitive ones.

Patterns by goal:
- Payment proof: "[category] pricing", "[competitor] pricing", "[niche] agency cost", "[function] jobs", "how much does [solution] cost"
- Pain: "[niche] problems reddit", "[incumbent] complaints", "[incumbent] reviews", "switching from [incumbent]"
- Saturation: "alternatives to [leader]", "best [category] 2026", "[category] G2", "[category] startup funding"
- Momentum: "[industry] statistics 2026", "[industry] trends 2026", "[industry] regulation 2026", "[platform] API changes"
- Bundle Test: "[platform] new features", "[platform] changelog", "[platform] [feature name]", "[platform] AI features 2026"
- Sizing proxies when no report exists: count of businesses in the segment from official statistics, average spend per buyer, size of the closest comparable category

## Edge Cases

- **Web search unavailable:** stop and say the skill needs live search to produce a trustworthy verdict. Offer a knowledge-only pass with every claim marked UNVERIFIED and no verdict stronger than a hypothesis.
- **User pushes back on a PASS:** re-examine the specific evidence they dispute. Change the verdict only on new evidence, never to please. Restate exactly what evidence would flip it.
- **User gives a product idea instead of a market:** zoom out to the market and buyer first, then run VET. The product is one possible wedge, not the unit of analysis.
- **Quiet niche, low signal everywhere:** that is a finding. Silence usually means no demand and occasionally means untapped; the difference is payment proof. Without payment proof, PASS.

## Handoffs

After a PURSUE verdict:
- Build the offer with the **grand-slam-offer** skill (value equation, pricing, guarantee, naming)
- Generate validation-call questions with the **nepq-generator** skill for the sprint's buyer conversations
- For deeper raw pain mining on the chosen market, the **trend-analyst** skill's Reddit, X, and Product Hunt workflow feeds Step 2
