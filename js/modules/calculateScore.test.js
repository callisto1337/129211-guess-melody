import {assert} from 'chai';
import calculateScore from './calculateScore';

describe(`calculateScore`, () => {
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
  });

  it(`должен вернуть -1`, () => {
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
    3), -1);
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

  it(`должен вернуть минимальное количество очков без ошибок`, () => {
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
      {status: true, time: 10000}],
    3), 10);
  });

  it(`должен вернуть максимальное количество очков`, () => {
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
      {status: true, time: 30000}],
    3), 20);
  });
});
