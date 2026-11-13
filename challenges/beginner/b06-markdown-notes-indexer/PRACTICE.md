# B06 — Guided practice

Be able to edit a text file and read a simple function. Start with the generic kit if the runtime is unfamiliar.

Tools: Python 3.12+ and its standard library. Keep your implementation in your own repository. The starter is intentionally unfinished.

## First milestone

Create the fixture files in a temporary directory. Resolve the allowed root and inventory files before extracting headings.

## Compare behavior

Use [the synthetic input](examples/input.json) in your implementation. Expected behavior:

The index includes Alpha and a filename fallback for nested/beta.md in deterministic order.

Record the exact command or manual steps, actual output and any difference. Formatting can differ if the brief permits it. This expected behavior is a teaching reference, not a full solution.

| Case | Prediction before running | Actual result and evidence |
|---|---|---|
| Supplied synthetic example | Write the expected behavior above in your own words | Not run |
| Boundary case | Choose one: Test empty tree, uppercase extension policy, unreadable file, UTF-8 text, traversal and an escaping symlink. Verify original files are unchanged. | Not run |
| Repeat the same input | Explain which outcomes must remain stable | Not run |
| Recovery after failure | Explain how the next valid operation should behave | Not run |

For a design-only submission, replace execution with a structured walkthrough against the stated threat model, and label it as analysis rather than a measured result.

## Progressive hints

Try the milestone before opening a hint. The website reveals these one at a time.

<details><summary>Hint 1: question</summary>

Can a symlink or traversal escape the root?

</details>

<details><summary>Hint 2: approach</summary>

Create the fixture files in a temporary directory. Resolve the allowed root and inventory files before extracting headings.

</details>

<details><summary>Hint 3: next experiment</summary>

Use a disposable directory and check resolved paths before reading; do not modify source notes.

</details>

## Common mistake

A notes indexer must not follow a path outside the chosen directory.

## Turn observations into tests

Keep expected behavior separate from the implementation. Use the [validation guide](VALIDATION.md) for domain checks. Test the supplied example, one invalid input and recovery after that failure. Use a temporary directory for files, a fake clock for time and a mock provider for network services. Do not put real secrets or private course material in fixtures. A passing example alone does not establish correctness.

## Ask for useful feedback

Explain one decision, provide one actual check, and ask one specific question. List what remains untested. Use [submission guidance](../../../handbook/SUBMITTING.md) and declare AI assistance. No self-check awards verification.
