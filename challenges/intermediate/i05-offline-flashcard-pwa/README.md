# I05 — Offline Flashcard PWA

Create an installable flashcard web app that works offline.

[Full brief](challenge.md) · [Validation checklist](VALIDATION.md) · [All challenges](../../README.md)

## Start here

1. Read the brief's acceptance criteria and security requirements. This package is scaffolding, not a completed solution.
2. Create your own solution repository. Copy this folder and the [web kit](../../../starter-kits/web/README.md) if helpful; keep your executable solution outside Forge.
3. Open [the starter](starter/core.mjs) and [synthetic example](examples/input.json). Build local CRUD first; add a manifest and scoped service worker after storage works. Use localhost or HTTPS for service-worker testing.
4. Implement one criterion at a time. Use [VALIDATION.md](VALIDATION.md) to collect evidence, including failing and boundary cases.
5. Follow the [submission guide](../../../handbook/SUBMITTING.md); never submit restricted course material or credentials.

## Tools and first milestone

A current browser; Node.js 22+ for pure-function tests. No paid API is required for the base exercise.

Validate local card data before it reaches storage or the view.

Expected behavior: After the first local load, reload offline and edit the card; the edit survives another reload.

The starter function intentionally throws an unfinished error. Import it from your own Node tests (`node --test`) or connect it to a copy of the web kit. For PWA work serve only your project folder on localhost.

## Ready for review

Include setup instructions, checks and observed results, design tradeoffs, all declared data/network/file behavior, AI assistance disclosure, and an exact 40-character solution commit SHA. An issue claim is optional coordination, not exclusive ownership or verification.
