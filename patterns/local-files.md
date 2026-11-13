# Pattern: confine local reads

**Context:** B06/I06 read an explicitly selected notes folder. Python 3.12+, standard library, MIT license.

```python
from pathlib import Path

def selected_file(root, relative):
    base = Path(root).resolve(strict=True)
    candidate = (base / relative).resolve(strict=True)
    if not candidate.is_relative_to(base) or not candidate.is_file():
        raise ValueError("select a file inside the notes folder")
    return candidate
```

Checks: a normal relative file is accepted; traversal, an outside absolute path, directory and escaping symlink are rejected. Add a byte cap before parsing; handle unreadable files explicitly. Do not run or import note content.

**Limitations:** resolving before opening has a race if another process can replace paths. This pattern is for a learner-controlled local folder, not a hostile multi-user upload service. Concurrent adversarial filesystem access requires stronger platform-specific open semantics. Avoid following symlinks entirely when unnecessary.
