import {assert} from 'chai';
import Timer from './timer';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`должен вернуть корректное время`, () => {
      const timer = new Timer(10);

      assert.deepEqual(timer.tick(), 9);
    });
    it(`должен вернуть null при нуле`, () => {
      const timer = new Timer(0);

      assert.deepEqual(timer.tick(), null);
    });
  });
});
