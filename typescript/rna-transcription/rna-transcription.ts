// Is a single character really a strand? I think this is just DNA and RNA.
type DANStrand = "G" | "C" | "T" | "A";
type RNAStrand = "C" | "G" | "A" | "U";

const rnaTable: { [id in DANStrand]: RNAStrand } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

class Transcriptor {
  // If you had a strand type it would describe the input and output here, would it not?
  toRna(dnaStrand: string): string {
    if (!this.isValidDnaStrand(dnaStrand)) throw "Invalid input DNA.";

    // can we solve this without any arrays?
    const dnaStrandArry = [...dnaStrand] as DANStrand[];

    dnaStrandArry.forEach(
      (value: DANStrand, index: number, array: string[]) => {
        array[index] = rnaTable[value];
      }
    );

    return dnaStrandArry.join("");
  }

  private isValidDnaStrand(text: string): boolean {
    // Isn't there a much simple way to just let the regex test the whole string and return a true or false result on its own?
    const matchedText = text.match(/[G|C|T|A]/g) || [];
    return text === matchedText.join("");
  }
}

export default Transcriptor;
