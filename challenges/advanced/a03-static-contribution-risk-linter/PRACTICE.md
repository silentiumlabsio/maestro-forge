# A03 — Guided practice

Be able to explain architecture, trust boundaries and failure modes, with evidence from smaller builds.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Start with metadata-only extension checks, then add explained patterns. Bound file sizes and ensure the scanner reads data only.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

sample.exe produces an extension finding; notes.md does not. Fixtures remain JSON text, never actual executable files.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test traversal, symlink escape, size cap, unreadable files, false positives and narrowly scoped suppressions with reasons. A clean scan must not claim safety. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Can a huge or unusual file exhaust scanning resources?

</details>

<details><summary>Hint 2: approach</summary>

Start with metadata-only extension checks, then add explained patterns. Bound file sizes and ensure the scanner reads data only.

</details>

<details><summary>Hint 3: next experiment</summary>

Bound input sizes and report explained static findings; never evaluate scanned text.

</details>

## Common mistake

A scanner that imports its inputs crosses the trust boundary.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
