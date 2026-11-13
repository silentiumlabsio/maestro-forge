# Pattern: validate at a pure boundary

**Context:** a CLI, form or JSON import feeds a small domain function. Keep parsing and IO separate so malformed values can be tested cheaply.

Python 3.12+, standard library, repository MIT license:

```python
def bounded_minutes(value):
    if type(value) is not int or not 1 <= value <= 180:
        raise ValueError("minutes must be an integer from 1 to 180")
    return value
```

Checks: 1 and 180 accepted; 0, 181, True, 1.5, None and "10" rejected. Parse form strings in the adapter, then call this function. Reject booleans deliberately because Python treats them as integers.

**Security:** a bound limits one input; it does not limit aggregate work or concurrency. Never execute a value to parse it.

**Alternative:** use a schema library for larger nested data, with pinned dependencies and tests. This snippet is for a bounded scalar, not an entire API validator.
