type DANStrand = "G" | "C" | "T" | "A";
type RNAStrand = "C" | "G" | "A" | "U";

const rnaTable: { [id in DANStrand]: RNAStrand } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

class Transcriptor {
  toRna(dnaStrand: string) {
    if (!this.isValidDnaStrand(dnaStrand)) throw "Invalid input DNA.";

    const dnaStrandArry: any = dnaStrand.split("");

    dnaStrandArry.forEach(
      (letter: DANStrand, index: number, arr: RNAStrand[]) => {
        arr[index] = rnaTable[letter];
      }
    );

    return dnaStrandArry.join("");
  }

  private isValidDnaStrand(text: string) {
    const matchedText = text.match(/[G|C|T|A]/g) || [];
    return text === matchedText.join("");
  }
}

export default Transcriptor;
