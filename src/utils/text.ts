enum COLORS {
  NONE = 0,
  BLUE = 34,
  GREEN = 32,
  RED = 41,
  YELLOW = 43,
}

export const withColor = (color: COLORS, text: string) =>
  `\x1b[${color}m ${text} \x1b[${COLORS.NONE}m`;

const withBoundColor = (color: COLORS) => (text: string) =>
  withColor(color, text);

export const blueText = withBoundColor(COLORS.BLUE);
export const greenText = withBoundColor(COLORS.GREEN);
export const redText = withBoundColor(COLORS.RED);
export const yellowText = withBoundColor(COLORS.RED);

export const asBulletPoint = (text: string) => "  • " + text;
