// These contract tests are intentionally red until the learner implements calculate.
import assert from 'node:assert/strict';
import test from 'node:test';
import {calculate} from './core.mjs';

test('weighted result is a percentage', () => {
  assert.equal(calculate([{weight:40,score:80},{weight:60,score:90}]),86);
});
test('what-if result changes with the project score', () => {
  assert.equal(calculate([{weight:40,score:80},{weight:60,score:100}]),92);
});
test('weights must total 100', () => {
  assert.throws(() => calculate([{weight:90,score:80}]), /weight/i);
});
test('scores must be finite percentages', () => {
  for (const score of [-1,101,NaN,Infinity]) {
    assert.throws(() => calculate([{weight:100,score}]), /score/i);
  }
});
test('empty input is rejected', () => {
  assert.throws(() => calculate([]), /categor/i);
});
