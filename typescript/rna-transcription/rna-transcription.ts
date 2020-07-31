type DNA = "G" | "C" | "T" | "A";
type RNA = "C" | "G" | "A" | "U";

type DNAStrand = string;
type RNAStrand = string;

class Transcriptor {
  toRna(dnaStrand: DNAStrand): RNAStrand {
    if (!this.isValidDnaStrand(dnaStrand)) throw "Invalid input DNA.";

    const rnaStrand: RNAStrand = dnaStrand.replace(
      /(G)|(C)|(T)|(A)/g,
      this.replacer
    );
    return rnaStrand;
  }

  private isValidDnaStrand = (text: string): boolean => {
    return /^[G|C|T|A]*$/.test(text);
  };

  private replacer = (
    _: string,
    p1: DNA,
    p2: DNA,
    p3: DNA,
    p4: DNA,
    _offset: number,
    _string: string
  ) => {
    if (p1) return "C";
    if (p2) return "G";
    if (p3) return "A";
    if (p4) return "U";
    return "";
  };
}

export default Transcriptor;
