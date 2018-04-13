import {assert} from 'chai';
import calculateScore from './calculateScore';

describe(`calculateScore`, () => {
  it(`should return -1`, () => {
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
      {status: true, time: 30000}], 3), -1);

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
      {status: true, time: 30000}], 0), -1);
  });

  it(`should return the correct number of points`, () => {
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
  });

  it(`should return the minimum number of points without mistakes`, () => {
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
      {status: true, time: 10000}], 3), 10);
  });

  it(`should return the minimum number of points`, () => {
    assert.deepEqual(calculateScore([
      {status: true, time: 30000},
      {status: true, time: 30000},
      {status: true, time: 30000},
      {status: true, time: 30000},
      {status: true, time: 30000},
      {status: true, time: 30000},
      {status: true, time: 30000},
      {status: true, time: 30000},
      {status: true, time: 30000},
      {status: true, time: 30000}], 3), 20);
  });
});
