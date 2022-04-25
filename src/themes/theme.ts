import { defaultColors, Colors } from './color';

export type Theme = {
  colors: Colors;
  space: (n: number) => number;
}

export const theme: Theme = {
  colors: defaultColors,
  space: (n: number): number => 4 * n,
};
