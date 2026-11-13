# I08 — Guided practice

Be comfortable with small functions, synthetic fixtures and repeatable tests. Complete a related beginner build first.

Tools: A current browser; Node.js 22+ for pure-function tests. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Use this synthetic fixture locally; only use published metadata when showing real activity. Separate unknown, open and completed.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

The synthetic card shows unclaimed and no completion evidence. Unknown status never becomes completed.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test missing fields, empty catalog, duplicate IDs, all filters with no matches and markup in titles. No fabricated owners or completion counts. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

How do unknown and completed differ?

</details>

<details><summary>Hint 2: approach</summary>

Use this synthetic fixture locally; only use published metadata when showing real activity. Separate unknown, open and completed.

</details>

<details><summary>Hint 3: next experiment</summary>

Use explicit states and require evidence for completion; label every synthetic record.

</details>

## Common mistake

Missing completion evidence must not turn into a completed badge.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
