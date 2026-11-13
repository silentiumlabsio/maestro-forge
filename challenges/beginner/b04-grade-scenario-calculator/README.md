# B04 — Grade Scenario Calculator

Create a calculator that helps a student estimate course outcomes from weighted categories.

[Full brief](challenge.md) · [Validation checklist](VALIDATION.md) · [All challenges](../../README.md)

## Start here

1. Read the brief's acceptance criteria and security requirements. This package is scaffolding, not a completed solution.
2. Create your own solution repository. Copy this folder and the [web kit](../../../starter-kits/web/README.md) if helpful; keep your executable solution outside Forge.
3. Open [the starter](starter/core.mjs) and [synthetic example](examples/input.json). Use synthetic category names and percentages. Keep parsing, calculation and form rendering separate.
4. Implement one criterion at a time. Use [VALIDATION.md](VALIDATION.md) to collect evidence, including failing and boundary cases.
5. Follow the [submission guide](../../../handbook/SUBMITTING.md); never submit restricted course material or credentials.

## Tools and first milestone

A current browser; Node.js 22+ for pure-function tests. No paid API is required for the base exercise.

Return a weighted percentage only after validating weights and scores.

Expected behavior: The weighted result is 86%; changing the project score to 100 produces 92%.

The starter function intentionally throws an unfinished error. Import it from your own Node tests (`node --test`) or connect it to a copy of the web kit. For PWA work serve only your project folder on localhost.

## Ready for review

### Optional executable contract tests

From `starter/`, run `node --test core.test.mjs`. These five tests intentionally fail against the unfinished starter. Implement `calculate` to return a numeric percentage and throw a descriptive error for invalid categories, weights or scores. They cover a small contract, not all brief requirements; add form, accessibility and privacy checks from the validation guide. These are learner tests, separate from Forge's maintainer validation.

Include setup instructions, checks and observed results, design tradeoffs, all declared data/network/file behavior, AI assistance disclosure, and an exact 40-character solution commit SHA. An issue claim is optional coordination, not exclusive ownership or verification.

## Guided practice

Use [progressive hints and practice cases](PRACTICE.md) to compare predictions with actual observations without copying a solution.
