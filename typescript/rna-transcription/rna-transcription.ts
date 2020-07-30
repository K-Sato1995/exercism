type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";

const rnaTable: Record<DNA, RNA> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

class Transcriptor {
  toRna(dnaStrand: string) {
    if (!this.isValidDnaStrand(dnaStrand)) throw "Invalid input DNA.";

    const dnaStrandArry = [...dnaStrand] as DNA[];

    dnaStrandArry.forEach((value: DNA, index: number, array: string[]) => {
      array[index] = rnaTable[value];
    });

    return dnaStrandArry.join("");
  }

  private isValidDnaStrand(text: string): boolean {
    return /^[G|C|T|A]*$/.test(text);
  }
}

export default Transcriptor;
