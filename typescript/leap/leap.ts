// Wrapper class
class Year {
  dividend: number;

  constructor(dividend: number) {
    this.dividend = dividend;
  }

  isDivisibleBy(divisor: number): boolean {
    return this.dividend % divisor === 0;
  }
}

function isLeapYear(num: number): boolean {
  const year: Year = new Year(num);

  return (
    year.isDivisibleBy(4) &&
    (year.isDivisibleBy(400) || !year.isDivisibleBy(100))
  );
}

export default isLeapYear;
