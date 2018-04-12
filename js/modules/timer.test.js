import {assert} from 'chai';
import Timer from './timer';

describe(`Timer`, () => {
  it(`should return the correct time`, () => {
    const timer = new Timer(10);
    assert.deepEqual(timer.tick(), 9);
  });

  it(`should return null if zero`, () => {
    const timer = new Timer(0);
    assert.deepEqual(timer.tick(), null);
  });

  it(`should return null if no arguments`, () => {
    const timer = new Timer();
    assert.deepEqual(timer.tick(), null);
  });

  it(`should return null if -1`, () => {
    const timer = new Timer(-1);
    assert.deepEqual(timer.tick(), null);
  });
});
