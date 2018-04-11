import {assert} from 'chai';
import returnResult from './returnResult';

describe(`returnResult`, () => {
  it(`должен вернуть корректный результат обычной игры`, () => {
    const callFunction = returnResult([4, 5, 8, 10, 11], {score: 11, notes: 2, time: 10000});
    assert.deepEqual({place: callFunction.data.place, playersCount: callFunction.data.playersCount, percent: callFunction.data.percent}, {place: 2, playersCount: 6, percent: `66`});
  });

  it(`должен вернуть корректный результат первой игры`, () => {
    const callFunction = returnResult([], {score: 11, notes: 2, time: 10000});
    assert.deepEqual({place: callFunction.data.place, playersCount: callFunction.data.playersCount, percent: callFunction.data.percent}, {place: 1, playersCount: 1, percent: `100`});
  });

  it(`должен вернуть корректный результат неудачной игры (попытки)`, () => {
    const callFunction = returnResult([4, 5, 8, 10, 11], {score: 11, notes: 0, time: 300});
    assert.deepEqual(callFunction.data, null);
  });

  it(`должен вернуть корректный результат неудачной игры (время)`, () => {
    const callFunction = returnResult([4, 5, 8, 10, 11], {score: 11, notes: 2, time: 0});
    assert.deepEqual(callFunction.data, null);
  });

  it(`должен вернуть корректный результат при неверных даннных`, () => {
    const callFunction = returnResult([4, 5, 8, 10, 11], {score: 0, notes: 0, time: 0});
    assert.deepEqual(callFunction.data, null);
  });
});
