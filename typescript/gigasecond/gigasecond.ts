class Gigasecond {
  time: Date;

  constructor(time: Date) {
    this.time = time;
  }

  public date(): Date {
    const givenTime = new Date(+this.time);
    return new Date(givenTime.setSeconds(givenTime.getSeconds() + 10 ** 9));
  }
}

export default Gigasecond;
