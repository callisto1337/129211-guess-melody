export default class Timer {
  constructor(time) {
    this.timeLeft = time;
  }

  tick() {
    if (this.timeLeft > 0) {
      this.timeLeft--;
      return this.timeLeft;
    }

    return null;
  }
}
