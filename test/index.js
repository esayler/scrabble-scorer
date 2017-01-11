import { assert, expect } from 'chai';
import scoreWord from '../lib/scoreWord';

describe('scoreWord', () => {

  it('is a function', () => {
    assert.isFunction(scoreWord);
  });

  context('without the optional multiplier argument', () => {
    it('returns the correct score of the provided word', () => {
      assert.equal(scoreWord('hello'), 8);
    });

    it('returns the correct score if provided a string starting or ending with whitespace', () => {
      assert.equal(scoreWord(' hello '), 8);
    });

    it('returns a score of 0 of when provided an empty string', () => {
      assert.equal(scoreWord(''), 0);
    });

    it('returns a score of 0 of when provided a null value', () => {
      assert.equal(scoreWord(null), 0);
    });


  });

  context('with the optional multiplier argument', () => {
    it('returns the correct score of the provided word', () => {
      assert.equal(scoreWord('hello', 2), 16);
    });

    it('returns the correct score if provided a string starting or ending with whitespace', () => {
      assert.equal(scoreWord(' hello ', 2), 16);
    });

    it('returns a score of 0 of when provided an empty string', () => {
      assert.equal(scoreWord('', 2), 0);
    });

    it('returns a score of 0 of when provided a null value', () => {
      assert.equal(scoreWord(null, 2), 0);
    });
  });
});
