# I08 — Challenge Progress Board

Build a static dashboard that reads challenge metadata and shows status, owner, and completion progress.

[Full brief](challenge.md) · [Validation checklist](VALIDATION.md) · [All challenges](../../README.md)

## Start here

1. Read the brief's acceptance criteria and security requirements. This package is scaffolding, not a completed solution.
2. Create your own solution repository. Copy this folder and the [web kit](../../../starter-kits/web/README.md) if helpful; keep your executable solution outside Forge.
3. Open [the starter](starter/core.mjs) and [synthetic example](examples/input.json). Use this synthetic fixture locally; only use published metadata when showing real activity. Separate unknown, open and completed.
4. Implement one criterion at a time. Use [VALIDATION.md](VALIDATION.md) to collect evidence, including failing and boundary cases.
5. Follow the [submission guide](../../../handbook/SUBMITTING.md); never submit restricted course material or credentials.

## Tools and first milestone

A current browser; Node.js 22+ for pure-function tests. No paid API is required for the base exercise.

Validate and normalize challenge records into display state; completion requires evidence.

Expected behavior: The synthetic card shows unclaimed and no completion evidence. Unknown status never becomes completed.

The starter function intentionally throws an unfinished error. Import it from your own Node tests (`node --test`) or connect it to a copy of the web kit. For PWA work serve only your project folder on localhost.

## Ready for review

Include setup instructions, checks and observed results, design tradeoffs, all declared data/network/file behavior, AI assistance disclosure, and an exact 40-character solution commit SHA. An issue claim is optional coordination, not exclusive ownership or verification.

## Guided practice

Use [progressive hints and practice cases](PRACTICE.md) to compare predictions with actual observations without copying a solution.
