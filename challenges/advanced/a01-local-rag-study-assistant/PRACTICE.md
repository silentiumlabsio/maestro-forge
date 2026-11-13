# A01 — Guided practice

Be able to explain architecture, trust boundaries and failure modes, with evidence from smaller builds.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Implement local token retrieval as a baseline. Preserve passage IDs through chunking; a mock answerer is sufficient for the free route.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

A supported response cites demo-a; a question about an absent topic reports insufficient evidence.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Measure retrieval on at least five queries including no-match and conflicting passages. Test document prompt injection, invalid citations, deletion and explicit provider consent. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Can each returned passage be traced to a stable source?

</details>

<details><summary>Hint 2: approach</summary>

Implement local token retrieval as a baseline. Preserve passage IDs through chunking; a mock answerer is sufficient for the free route.

</details>

<details><summary>Hint 3: next experiment</summary>

Test irrelevant queries and missing evidence; abstain instead of filling the gap.

</details>

## Common mistake

A fluent answer can cite a passage that never supports the claim.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
