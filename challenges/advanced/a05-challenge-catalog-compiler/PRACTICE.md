# A05 — Guided practice

Be able to explain architecture, trust boundaries and failure modes, with evidence from smaller builds.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Write a schema and invalid fixtures first. Sort by stable IDs; use a text serializer without evaluating templates.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

A valid manifest can render escaped text; two copies of DEMO-1 produce a duplicate-ID error and nonzero validation status.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test missing field, unknown difficulty, duplicate IDs, traversal, hostile HTML and input ordering. Two identical builds must be byte-for-byte equal. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

How are duplicate IDs and invalid paths reported?

</details>

<details><summary>Hint 2: approach</summary>

Write a schema and invalid fixtures first. Sort by stable IDs; use a text serializer without evaluating templates.

</details>

<details><summary>Hint 3: next experiment</summary>

Sort stable IDs and collect file-scoped errors before writing generated data.

</details>

## Common mistake

Directory iteration order can make identical catalogs produce different output.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
