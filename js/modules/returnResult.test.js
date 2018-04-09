import {assert} from 'chai';
import returnResult from './returnResult';

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`должен вернуть корректный результат игры`, () => {
      assert.deepEqual(returnResult([4, 5, 8, 10, 11], {score: 11, notes: 2, time: 10000}), `Вы заняли 2 место из 6 игроков. Это лучше, чем у 66% игроков`);
      assert.deepEqual(returnResult([], {score: 11, notes: 2, time: 10000}), `Вы заняли 1 место из 1 игроков. Это лучше, чем у 100% игроков`);
      assert.deepEqual(returnResult([4, 5, 8, 10, 11], {score: 11, notes: 0, time: 300}), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
      assert.deepEqual(returnResult([4, 5, 8, 10, 11], {score: 11, notes: 2, time: 0}), `Время вышло! Вы не успели отгадать все мелодии`);
    });
  });
});
