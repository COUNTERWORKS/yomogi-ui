import { MOBILE, TABLE } from '../constants';

export type BreakPoint = {
  mobile: number;
  tablet: number;
}

export const defaultBreakPoints: BreakPoint = {
  mobile: MOBILE,
  tablet: TABLE,
};
