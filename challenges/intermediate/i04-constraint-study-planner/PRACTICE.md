# I04 — Guided practice

Be comfortable with small functions, synthetic fixtures and repeatable tests. Complete a related beginner build first.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Choose whether tasks may split. State that policy, implement one-day capacity checks, then extend to a week.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

Only 30 minutes fit; the other 30 are explicitly unscheduled. Never invent availability to satisfy a deadline.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test impossible load, zero availability, tied deadlines, invalid dates and a task longer than a slot. Verify summed blocks never exceed each day. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Where does unscheduled work appear?

</details>

<details><summary>Hint 2: approach</summary>

Choose whether tasks may split. State that policy, implement one-day capacity checks, then extend to a week.

</details>

<details><summary>Hint 3: next experiment</summary>

Hand-check available minutes before scheduling and explain every deferred block.

</details>

## Common mistake

Overbooking hides infeasible constraints instead of solving them.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
