# A04 — Guided practice

Be able to explain architecture, trust boundaries and failure modes, with evidence from smaller builds.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Write the output schema and hand-label synthetic evaluation cases before building the answer workflow. Mock inference is acceptable.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

This claim is evidence-backed by demo-a; a claim about exam outcomes is unsupported. Never manufacture a citation.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Create an evaluation set with supported, inferred, contradictory, absent and injection-bearing cases. Report observed category errors separately from interpretation. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

What evidence would justify each output category?

</details>

<details><summary>Hint 2: approach</summary>

Write the output schema and hand-label synthetic evaluation cases before building the answer workflow. Mock inference is acceptable.

</details>

<details><summary>Hint 3: next experiment</summary>

Hand-label supported, inferred and unsupported synthetic claims before evaluation.

</details>

## Common mistake

Inference and direct evidence should not receive the same label.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
