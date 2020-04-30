const squareOfSum = (num: number): number => {
  const totalNum = (num * (num + 1)) / 2;

  return totalNum ** 2;
};

const sumOfSquares = (num: number): number => {
  var total = 0;

  for (var i = 1; i < num; i++) {
    total += i ** 2;
  }

  return total;
};

export default class Squares {
  num: number;
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  constructor(num: number) {
    this.num = num;
    this.squareOfSum = squareOfSum(num);
    this.sumOfSquares = sumOfSquares(num);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}
