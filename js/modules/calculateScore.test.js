import {assert} from 'chai';
import calculateScore from './calculateScore';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`должен вернуть верное количество очков`, () => {
      assert.deepEqual(calculateScore([
        {status: false, time: 10000},
        {status: true, time: 10000},
        {status: false, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 30000}], 1), 5);
      assert.deepEqual(calculateScore([
        {status: false, time: 10000},
        {status: true, time: 10000},
        {status: false, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: false, time: 10000},
        {status: false, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 30000}],
      0), -1);
      assert.deepEqual(calculateScore([
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 10000},
        {status: true, time: 30000}],
      0), -1);
    });
  });
});
