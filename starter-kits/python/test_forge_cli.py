import unittest

from forge_cli import main, normalize_text


class NormalizeTextTests(unittest.TestCase):
    def test_collapses_whitespace(self):
        self.assertEqual(normalize_text("  learn   securely  "), "learn securely")

    def test_rejects_empty_text(self):
        with self.assertRaises(ValueError):
            normalize_text("   ")

    def test_rejects_unbounded_text(self):
        with self.assertRaises(ValueError):
            normalize_text("x" * 201)

    def test_main_returns_success(self):
        self.assertEqual(main(["forge"]), 0)


if __name__ == "__main__":
    unittest.main()
