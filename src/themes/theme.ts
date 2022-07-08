import { BreakPoint, defaultBreakPoints } from './breakPoint';
import { defaultColors, Colors } from './color';

export type Theme = {
  colors: Colors;
  space: (n: number) => number;
  breakPoints: BreakPoint;
}

export const theme: Theme = {
  colors: defaultColors,
  space: (n: number): number => 4 * n,
  breakPoints: defaultBreakPoints,
};
