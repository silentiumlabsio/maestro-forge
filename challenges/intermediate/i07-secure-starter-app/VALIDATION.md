# I07 validation

These are test specifications, not claims that an implementation passed. Run checks in your own solution repository; record the exact commit and actual outcome.

## Small example

Use [input.json](examples/input.json) as synthetic data. Valid input reaches the handler; invalid input yields a bounded public error without stack traces or environment values.

## Boundary and failure checks

Write at least five automated tests: success, missing title, wrong type, overlong body and unexpected fields. Also test malformed JSON and safe internal-error handling.

## Evidence matrix

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Every acceptance criterion in [the brief](challenge.md) | Criterion satisfied | Not run | Add test name or manual steps |
| Small example above | Stated behavior | Not run | Add output |
| Each boundary case above | Safe documented handling | Not run | Add result per case |
| Declared data behavior | No undeclared access | Not run | Inspection / network panel |

## Review prompts

- Explain: Validate a tiny create-note request without needing a live server.
- Debug: choose one boundary case above, reproduce it, and fix the cause.
- Adapt: change one input constraint, update its validation and show the changed result.

These checks supplement the brief and versioned rubric; they do not replace human review or prove security.
