# Turn a brief into checks

1. Copy each acceptance criterion into an evidence matrix. Describe an observable result rather than “works.”
2. Use a tiny synthetic fixture with a hand-computable result. For a weighted calculator: 40% at 80 plus 60% at 90 is 86.
3. Add boundaries: empty input, wrong types, smallest/largest values, duplicates and unavailable storage.
4. Separate pure logic from effects. Pass a fake clock to a timer and a mock provider to an AI exercise. A deterministic mock tests wiring, not real model quality.
5. Automate stable behavior; manually inspect keyboard flow, screen-reader labels and data disclosures. Record runtime and exact commands.
6. Capture actual outcomes, including failures. If you did not run a check, say “Not run.”

## A useful test
A calculation test compares against a result derived independently. A file test verifies the original file is unchanged. A redaction test captures output and searches for a dummy value. Avoid asserting only that a function exists or repeating its implementation as the expected answer.

## Safe test boundaries
Use temporary directories and synthetic notes. Do not use real secrets, run unknown submissions, contact providers silently or open a listener unless explicitly part of your local test setup. See [the cookbook](secure-coding-cookbook.md) and [submission evidence](../templates/SUBMISSION_EVIDENCE.md).
