# I03 — Repository Activity Dashboard

Build a dashboard using public GitHub API data for stars, issues, and recent activity.

[Full brief](challenge.md) · [Validation checklist](VALIDATION.md) · [All challenges](../../README.md)

## Start here

1. Read the brief's acceptance criteria and security requirements. This package is scaffolding, not a completed solution.
2. Create your own solution repository. Copy this folder and the [web kit](../../../starter-kits/web/README.md) if helpful; keep your executable solution outside Forge.
3. Open [the starter](starter/core.mjs) and [synthetic example](examples/input.json). Render fixtures first. Accept owner/repo identifiers, constrain the API host, then add bounded caching and retry-after handling.
4. Implement one criterion at a time. Use [VALIDATION.md](VALIDATION.md) to collect evidence, including failing and boundary cases.
5. Follow the [submission guide](../../../handbook/SUBMITTING.md); never submit restricted course material or credentials.

## Tools and first milestone

A current browser; Node.js 22+ for pure-function tests. No paid API is required for the base exercise.

Validate a public repository API response into display-only fields.

Expected behavior: Fixture mode displays 3 stars and 1 open issue, labeled as synthetic demo data; live mode labels fetch time.

The starter function intentionally throws an unfinished error. Import it from your own Node tests (`node --test`) or connect it to a copy of the web kit. For PWA work serve only your project folder on localhost.

## Ready for review

Include setup instructions, checks and observed results, design tradeoffs, all declared data/network/file behavior, AI assistance disclosure, and an exact 40-character solution commit SHA. An issue claim is optional coordination, not exclusive ownership or verification.

## Guided practice

Use [progressive hints and practice cases](PRACTICE.md) to compare predictions with actual observations without copying a solution.
