# I03 — Guided practice

Be comfortable with small functions, synthetic fixtures and repeatable tests. Complete a related beginner build first.

Tools: A current browser; Node.js 22+ for pure-function tests. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Render fixtures first. Accept owner/repo identifiers, constrain the API host, then add bounded caching and retry-after handling.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

Fixture mode displays 3 stars and 1 open issue, labeled as synthetic demo data; live mode labels fetch time.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test 404, 403/429, offline, stale cache and hostile display text. Never embed tokens in client code or fetch arbitrary user-supplied URLs. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

How are rate limits and stale data represented?

</details>

<details><summary>Hint 2: approach</summary>

Render fixtures first. Accept owner/repo identifiers, constrain the API host, then add bounded caching and retry-after handling.

</details>

<details><summary>Hint 3: next experiment</summary>

Use fixtures for success, missing fields and rate limits; show unknown separately from zero.

</details>

## Common mistake

A failed API response must not look like zero activity.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
