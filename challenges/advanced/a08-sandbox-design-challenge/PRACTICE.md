# A08 — Guided practice

Be able to explain architecture, trust boundaries and failure modes, with evidence from smaller builds.

Tools: A Markdown editor; no runtime or container required. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Copy the local threat-model template. Compare metadata-only review with a hypothetical disposable evaluator; justify whether execution should exist at all.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

The default decision is non-execution. A tabletop walk-through records reject/quarantine decisions and unanswered operational risks.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Walk through a secret request, fork bomb scenario, oversized upload, dependency download, symlink escape and cleanup failure as text only. Do not deploy an evaluator. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

What is the safest default if any control fails?

</details>

<details><summary>Hint 2: approach</summary>

Copy the local threat-model template. Compare metadata-only review with a hypothetical disposable evaluator; justify whether execution should exist at all.

</details>

<details><summary>Hint 3: next experiment</summary>

Compare a metadata-only design against hypothetical execution, then document denial, teardown and residual risk.

</details>

## Common mistake

A sandbox diagram alone does not establish an isolation guarantee.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
