class Gigasecond {
  time: Date;

  constructor(time: Date) {
    this.time = time;
  }

  public date(): Date {
    return new Date(this.time.setSeconds(this.time.getSeconds() + 10 ** 9));
  }
}

export default Gigasecond;
