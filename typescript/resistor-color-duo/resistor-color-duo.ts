type Color =
  | "black"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "violet"
  | "grey"
  | "white";

const colorTable: { [id in Color]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export class ResistorColor {
  private colors: Color[];

  constructor(colors: Color[]) {
    if (colors.length < 2)
      throw new Error("At least two colors need to be present");

    this.colors = colors;
  }

  value = (): number => {
    const [color1, color2] = this.colors;
    const colorNumber = (state: Color) => colorTable[state] || "0";
    const result = "" + colorNumber(color1) + colorNumber(color2);
    return parseInt(result);
  };
}
