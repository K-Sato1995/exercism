// https://codemix.com/opaque-types-in-javascript#:~:text=TypeScript%20does%20not%20have%20built,number)%20%7B%20if%20(Math.&text=You%20can%20try%20this%20example%20in%20the%20TypeScript%20Playground
type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";

const rnaTable: Record<DNA, RNA> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

type DNAStrand = string & { _: "DNAStrand" };

// function validDnaStrand(input: string) {
//   const matchedText = input.match(/[G|C|T|A]/g) || [];
//   if (!(input === matchedText.join(""))) throw "Invalid input DNA.";

//   return input as DNAStrand;
// }

class Transcriptor {
  // If you had a strand type it would describe the input and output here, would it not?
  toRna(dnaStrand: string): string {
    if (!this.isValidDnaStrand(dnaStrand)) throw "Invalid input DNA.";

    // for (let i = 0; i < dnaStrand.length; i++) {
    //   const dna: DNA = dnaStrand.charAt(i);
    //   dnaStrand.charAt(i) = rnaTable[dna];
    //   // dnaStrand.replace();
    // }
    // can we solve this without any arrays?
    const dnaStrandArry = [...dnaStrand] as DNA[];

    dnaStrandArry.forEach((value: DNA, index: number, array: string[]) => {
      array[index] = rnaTable[value];
    });

    return dnaStrandArry.join("");
  }

  private isValidDnaStrand(text: string): boolean {
    // Isn't there a much simple way to just let the regex test the whole string and return a true or false result on its own?
    const matchedText = text.match(/[G|C|T|A]/g) || [];
    return text === matchedText.join("");
  }
}

export default Transcriptor;
