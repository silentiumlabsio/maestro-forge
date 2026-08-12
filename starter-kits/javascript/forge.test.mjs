import assert from 'node:assert/strict';
import test from 'node:test';
import { normalizeText } from './forge.mjs';

test('normalizes bounded text', () => assert.equal(normalizeText('  learn   securely '), 'learn securely'));
test('rejects empty text', () => assert.throws(() => normalizeText('   '), /must not be empty/));
test('rejects non-string input', () => assert.throws(() => normalizeText(null), /must be a string/));
test('rejects unbounded text', () => assert.throws(() => normalizeText('x'.repeat(201)), /200/));
