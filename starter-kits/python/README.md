# Python CLI Starter Kit

A dependency-free Python foundation with argument parsing, explicit exit codes, safe input validation, and standard-library tests.

```text
python/
├── forge_cli.py
└── test_forge_cli.py
```

Run `python forge_cli.py "your text"` and test with `python -m unittest test_forge_cli.py`.

This kit does not access the network, execute a shell, read environment secrets, or write files. Add only the capabilities your challenge requires and document each one.


## Adapt the kit

1. Copy this directory into your own repository and confirm the unchanged example works.
2. Open your challenge's README and copy its starter and synthetic example.
3. Keep domain logic separate from CLI/DOM/IO so boundary tests can run without a network, clock wait or real secrets.
4. Implement the smallest expected example, then error paths. Record observed results in the challenge validation matrix.
5. Replace demo labels before documenting your own implementation. Declare every added capability.

From this kit directory: `python forge_cli.py "learn securely"`, then `python -m unittest -v`. Expect normalized text and four passing tests. No virtual environment or install step is required.

See [submission evidence](../../templates/SUBMISSION_EVIDENCE.md) before requesting review.
