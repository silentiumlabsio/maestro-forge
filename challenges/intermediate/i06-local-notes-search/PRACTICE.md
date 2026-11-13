# I06 — Guided practice

Be comfortable with small functions, synthetic fixtures and repeatable tests. Complete a related beginner build first.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Start with token overlap as a baseline. Measure ranking on fixed queries before considering TF-IDF.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

a.md ranks before b.md; an absent term produces a clear empty result instead of an unrelated answer.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test casing, punctuation, empty query, ties, deleted files, rebuild and escaping symlink. Report index limitations and keep all note content local. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

How are ties and no-match queries handled?

</details>

<details><summary>Hint 2: approach</summary>

Start with token overlap as a baseline. Measure ranking on fixed queries before considering TF-IDF.

</details>

<details><summary>Hint 3: next experiment</summary>

Create fixed relevance judgments for multiple synthetic queries and compare to token overlap.

</details>

## Common mistake

A ranking demo with one convenient query hides poor retrieval.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
