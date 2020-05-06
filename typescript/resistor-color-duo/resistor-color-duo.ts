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

const colorTable: { [id in Color]: string } = {
  black: "0",
  brown: "1",
  red: "2",
  orange: "3",
  yellow: "4",
  green: "5",
  blue: "6",
  violet: "7",
  grey: "8",
  white: "9",
};

export class ResistorColor {
  private colors: Color[];

  constructor(colors: Color[]) {
    if (colors.length < 2)
      throw new Error("At least two colors need to be present");

    this.colors = colors;
  }

  value = (): number => {
    const colors = this.colors.slice(0, 2);
    // const [color1, color2] = this.colors;
    console.log(colors);
    const result = parseInt(
      colors.map((color) => colorTable[color] || "0").join("")
    );
    return result;
  };
}
