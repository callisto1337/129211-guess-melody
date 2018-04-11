export default class Timer {
  constructor(time) {
    this.timeLeft = time;
  }

  tick() {
    this.timeLeft = Math.max(0, this.timeLeft - 1);
    return this.timeLeft || null;
  }
}
