const rnaTable: { [id in string]: string } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

class Transcriptor {
  toRna(dnaStrand: string) {
    const dnaStrandArry = dnaStrand.split("");

    dnaStrandArry.forEach((letter: string, index: number, arr: string[]) => {
      if (!this.validate(letter)) throw "Invalid input DNA.";

      arr[index] = rnaTable[letter];
    });

    return dnaStrandArry.join("");
  }

  private validate(letter: string) {
    return letter.match(/[G|C|T|A]/g);
  }
}

export default Transcriptor;
