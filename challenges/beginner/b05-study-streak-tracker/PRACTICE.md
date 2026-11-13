# B05 — Guided practice

Be able to edit a text file and read a simple function. Start with the generic kit if the runtime is unfamiliar.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Define a calendar-day policy before coding; deduplicate dates and keep storage separate from counting.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

Under a documented yesterday-grace rule the streak is 2 and duplicate dates count once.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test today present, gap, leap day, out-of-order dates, future dates and corrupted store. Document timezone and stale-streak rules. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Does the streak include yesterday when today has no entry?

</details>

<details><summary>Hint 2: approach</summary>

Define a calendar-day policy before coding; deduplicate dates and keep storage separate from counting.

</details>

<details><summary>Hint 3: next experiment</summary>

Choose and document that policy; test a gap, duplicates and month boundaries.

</details>

## Common mistake

Duplicate dates must not create extra study days.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
