# Vanilla JavaScript Starter Kit

A dependency-free ES module with bounded validation and Node's built-in test runner. It does not access the network, filesystem, environment variables, DOM, or shell.

Run `node forge.mjs "your text"` and test with `node --test forge.test.mjs` on a current Node.js release.


## Adapt the kit

1. Copy this directory into your own repository and confirm the unchanged example works.
2. Open your challenge's README and copy its starter and synthetic example.
3. Keep domain logic separate from CLI/DOM/IO so boundary tests can run without a network, clock wait or real secrets.
4. Implement the smallest expected example, then error paths. Record observed results in the challenge validation matrix.
5. Replace demo labels before documenting your own implementation. Declare every added capability.

From this kit directory: `node forge.mjs "learn securely"`, then `node --test forge.test.mjs`. Expect normalized text and passing validation tests. No package installation is required.

See [submission evidence](../../templates/SUBMISSION_EVIDENCE.md) before requesting review.
