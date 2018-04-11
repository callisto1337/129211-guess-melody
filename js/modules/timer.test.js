import {assert} from 'chai';
import Timer from './timer';

describe(`Timer`, () => {
  it(`должен вернуть корректное время`, () => {
    const timer = new Timer(10);
    assert.deepEqual(timer.tick(), 9);
  });

  it(`должен вернуть null при нуле`, () => {
    const timer = new Timer(0);
    assert.deepEqual(timer.tick(), null);
  });

  it(`должен вернуть null при отсутствии аргументов`, () => {
    const timer = new Timer();
    assert.deepEqual(timer.tick(), null);
  });

  it(`должен вернуть null при -1`, () => {
    const timer = new Timer(-1);
    assert.deepEqual(timer.tick(), null);
  });
});
