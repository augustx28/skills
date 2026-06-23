---
name: first-principles-thinking
description: Reason through any question, problem, or input using first-principles thinking the way Elon Musk does — strip away assumptions and analogies, break the problem down to fundamental truths, then rebuild the answer up from those truths. Use whenever the user wants a decision, plan, estimate, design, or claim examined rigorously instead of by convention; whenever they ask "is this actually true?", "why is this done this way?", "what's the real cost/limit here?", or want to challenge an assumption, cut complexity, or rebuild an idea from scratch. Output shows the reasoning steps in order, then the answer, kept simple, concise, and direct.
---

# First-Principles Thinking

## What this is

A method for reasoning from fundamental truths instead of by analogy or convention.
Reasoning by analogy = "do it because that's how it's done / how others do it."
Reasoning from first principles = "boil the thing down to the most basic truths we
are sure of, then reason up from there." This is how Elon Musk approaches cost,
design, and feasibility (e.g. deriving a rocket's price from the raw market cost of
its materials rather than from what rockets historically cost).

## The procedure (run in this exact order)

Work through every step in sequence. Do not skip ahead. Do not import a
conventional answer until Step 5.

**Step 1 — State the question plainly.**
Restate what is actually being asked or claimed in one sentence. Strip away framing,
buzzwords, and the assumed solution. If the input already contains a proposed answer
("we should use X"), separate the *goal* from the *proposed means*.

**Step 2 — Surface the assumptions.**
List the beliefs baked into the question or the conventional answer. For each, name
it explicitly. These are the things "everyone knows" that may not be true. Be
suspicious of any constraint stated as a given.

**Step 3 — Reduce to fundamental truths.**
For each assumption, ask: *Is this actually, physically, logically true — or is it
just convention, habit, or someone else's conclusion?* Keep asking "how do we know
that?" until you hit bedrock: physical laws, math, definitions, verified data, or
direct observation. List the fundamental truths that survive. Discard everything
that was only true "because that's how it's done."

**Step 4 — Rebuild from the truths.**
Starting only from the fundamental truths in Step 3, reason upward to construct an
answer. Ignore how it's "normally" done. Ask what the truths *permit* — often this
reveals a cheaper, simpler, or entirely different path than convention.

**Step 5 — Compare to convention and sanity-check.**
Now bring back the conventional answer. Where does the first-principles answer differ,
and why? If they diverge wildly, find the error: either a hidden truth you missed, or
a real inefficiency in the convention. Check units, orders of magnitude, and edge
cases. State your confidence and what would change the conclusion.

## The simplification pass (apply when the task is to build/design/optimize)

After Step 4, run Five-step engineering algorithm, in order:
1. **Question the requirement.** Make requirements less dumb. Every requirement
   carries the name of a person, not a department — requirements are wrong by default.
2. **Delete.** Remove the part, step, or feature entirely. If you aren't adding
   back at least 10% of what you delete, you didn't delete enough.
3. **Simplify / optimize** — but only *after* deleting. Never optimize a thing that
   shouldn't exist.
4. **Accelerate cycle time.** Speed up — but only after the first three steps.
5. **Automate** — last, never first.

## Output format

Always return the reasoning, then the answer, in this shape:

```
THINKING
1. Question: <plain restatement>
2. Assumptions: <bulleted, the beliefs in play>
3. Fundamental truths: <bulleted, what survives "how do we know?">
4. Rebuilt from truths: <the reasoning up from bedrock>
5. Check vs convention: <where it differs, confidence, what would change it>

ANSWER
<the direct answer — simple, concise, no hedging>
```

If the simplification pass applies, add its five steps as a short list under
THINKING before the ANSWER.

## Rules

- Keep every line simple, concise, and direct. No filler, no jargon, no padding.
- Never skip a step or reorder them. The order is the method.
- Prefer numbers, units, and concrete quantities over vague qualifiers.
- If a "fundamental truth" is actually an assumption, demote it — only bedrock counts.
- If you genuinely lack a fact needed for bedrock, say so and state what you'd need,
  rather than guessing under the guise of first principles.
- The ANSWER must be defensible purely from the truths in Step 3.

## Quick example

**Input:** "Renting a server farm is the only affordable way to train our model."

- **Question:** What is the cheapest way to get the compute to train the model?
- **Assumptions:** Renting is cheapest; we need this much compute; cloud pricing is fixed.
- **Fundamental truths:** Training needs a quantity of FLOPs. Compute cost = hardware
  cost + power + time. Hardware can be rented or owned. Power has a market rate.
  Our actual FLOP requirement is X (verify, don't assume).
- **Rebuilt:** Cost per useful FLOP differs by hardware and utilization. Owned hardware
  beats rental past a usage threshold; below it, rental wins. Compute the break-even from
  X and the rates — the answer falls out of the numbers, not the convention.
- **Check vs convention:** "Renting is the only affordable way" is false as stated; it's
  conditionally cheapest. Confidence high given the FLOP estimate; revisit if X is wrong.
- **Answer:** Renting isn't the *only* affordable option — it's cheapest only below the
  break-even usage. Compute X, compare cost-per-FLOP owned vs rented, decide on the number.
