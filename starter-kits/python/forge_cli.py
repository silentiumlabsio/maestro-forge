"""Minimal dependency-free CLI starter."""
from __future__ import annotations

import argparse
import sys


def normalize_text(value: str) -> str:
    """Return bounded, single-spaced text or raise a useful validation error."""
    cleaned = " ".join(value.split())
    if not cleaned:
        raise ValueError("text must not be empty")
    if len(cleaned) > 200:
        raise ValueError("text must be 200 characters or fewer")
    return cleaned


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="A safe Maestro Forge CLI starting point.")
    parser.add_argument("text", help="Text to normalize and print")
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    try:
        result = normalize_text(args.text)
    except ValueError as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2
    print(result)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
