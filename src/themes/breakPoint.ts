export type BreakPoint = {
  mobile: number;
  tablet: number;
  desktop: number;
}

export const defaultBreakPoints: BreakPoint = {
  mobile: 1,
  tablet: 769,
  desktop: 1024,
};
