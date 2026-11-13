# Accessible Web Starter Kit

A no-build HTML/CSS/JavaScript foundation with semantic structure, keyboard-visible focus, an accessible form, a live result region, responsive styling, and reduced-motion support.

Serve this folder with a local static server. The starter loads no remote scripts or fonts, sends no network requests, stores no data, and includes no analytics.


## Adapt the kit

1. Copy this directory into your own repository and confirm the unchanged example works.
2. Open your challenge's README and copy its starter and synthetic example.
3. Keep domain logic separate from CLI/DOM/IO so boundary tests can run without a network, clock wait or real secrets.
4. Implement the smallest expected example, then error paths. Record observed results in the challenge validation matrix.
5. Replace demo labels before documenting your own implementation. Declare every added capability.

Test keyboard-only navigation, visible focus, labels, invalid input, narrow screens and browser console errors. For PWA work, serve only your solution folder on localhost with `python -m http.server 8000 --bind 127.0.0.1`; stop the server after testing. The server is a separate opt-in tool, not part of the starter.

See [submission evidence](../../templates/SUBMISSION_EVIDENCE.md) before requesting review.
