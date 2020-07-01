type DANStrand = "G" | "C" | "T" | "A";
type RNAStrand = "C" | "G" | "A" | "U";

const rnaTable: { [id in DANStrand]: RNAStrand } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

class Transcriptor {
  toRna(dnaStrand: string): string {
    if (!this.isValidDnaStrand(dnaStrand)) throw "Invalid input DNA.";

    const dnaStrandArry = [...dnaStrand] as DANStrand[];

    dnaStrandArry.forEach(
      (value: DANStrand, index: number, array: string[]) => {
        array[index] = rnaTable[value];
      }
    );

    return dnaStrandArry.join("");
  }

  private isValidDnaStrand(text: string): boolean {
    const matchedText = text.match(/[G|C|T|A]/g) || [];
    return text === matchedText.join("");
  }
}

export default Transcriptor;
