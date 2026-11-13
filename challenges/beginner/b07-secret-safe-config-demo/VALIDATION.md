# B07 validation

These are test specifications, not claims that an implementation passed. Run checks in your own solution repository; record the exact commit and actual outcome.

## Small example

Use [input.json](examples/input.json) as synthetic data. The dummy key permits startup; no output contains its value. Missing configuration produces a clear redacted error.

## Boundary and failure checks

Test missing, empty and whitespace-only values. Capture logs and errors; assert the fake key never appears. No actual API call is needed.

## Evidence matrix

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Every acceptance criterion in [the brief](challenge.md) | Criterion satisfied | Not run | Add test name or manual steps |
| Small example above | Stated behavior | Not run | Add output |
| Each boundary case above | Safe documented handling | Not run | Add result per case |
| Declared data behavior | No undeclared access | Not run | Inspection / network panel |

## Review prompts

- Explain: Return a validated config without exposing the fake secret in messages.
- Debug: choose one boundary case above, reproduce it, and fix the cause.
- Adapt: change one input constraint, update its validation and show the changed result.

These checks supplement the brief and versioned rubric; they do not replace human review or prove security.
