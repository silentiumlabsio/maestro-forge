"""Optional learner checks. Run only in your own reviewed working copy.

Run: python -m unittest -v test_contract.py
These tests intentionally fail until you implement validate_deck.
"""
import unittest
from copy import deepcopy
from main import validate_deck


class DeckContract(unittest.TestCase):
    def test_valid_deck_preserved(self):
        cards = [{"question": "What repeats?", "answer": "A loop"}]
        self.assertEqual(validate_deck(cards), cards)

    def test_input_is_not_modified(self):
        cards = [{"question": "What stores a value?", "answer": "A variable"}]
        before = deepcopy(cards)
        validate_deck(cards)
        self.assertEqual(cards, before)

    def test_missing_answer_rejected(self):
        with self.assertRaises(ValueError):
            validate_deck([{"question": "Incomplete card"}])

    def test_non_collection_rejected(self):
        with self.assertRaises(ValueError):
            validate_deck(None)


if __name__ == "__main__":
    unittest.main()
