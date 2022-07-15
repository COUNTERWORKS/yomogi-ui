import { BreakPoint, defaultBreakPoints } from './breakPoint';
import { createColors, Colors, CustomColors } from './color';

export type Theme = {
  colors: Colors;
  space: (n: number) => number;
  breakPoints: BreakPoint;
};

export type CustomTheme = {
  colors?: CustomColors;
}

export const createTheme = (theme?: CustomTheme): Theme => {
  return ({
    colors: createColors(theme?.colors),
    space: (n: number): number => 4 * n,
    breakPoints: defaultBreakPoints,
  });
};
