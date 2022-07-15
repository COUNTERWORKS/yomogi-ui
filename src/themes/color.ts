import { darken, lighten } from 'polished';
import * as constants from '../constants';
interface MainColor {
  main: string;
  text: string;
}

interface ShadowColor {
  base: string;
}

export type Colors = {
  primary: MainColor;
  secondary: MainColor;
  success: MainColor;
  info: MainColor;
  caution: MainColor;
  error: MainColor;
  danger: MainColor;
  light: MainColor;
  neutral: MainColor;
  gray: Record<number, string>;
  blue: Record<number, string>;
  green: Record<number, string>;
  orange: Record<number, string>;
  red: Record<number, string>;
  shadow: ShadowColor;
  white: string;
  black: string;
  border: String;
  link: string;
  text: string;
  textGray: string;
  hover: (code: string) => string;
}

export type Color = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'caution' | 'error' | 'light' | 'danger';

export type CustomColors = {
  primary?: {
    main?: string;
    text?: string;
  },
  secondary?: {
    main?: string;
    text?: string;
  }
}

export const createColors = (theme: CustomColors = {}): Colors => {
  const { primary, secondary } = theme;
  return ({
    primary: {
      main: primary?.main || constants.PRIMARY_COLOR_MAIN,
      text: primary?.text || constants.PRIMARY_COLOR_TEXT,
    },
    secondary: {
      main: secondary?.main || constants.SECONDARY_COLOR_MAIN,
      text: secondary?.text || constants.SECONDARY_COLOR_TEXT,
    },
    neutral: {
      main: darken(0.3, '#ddd'),
      text: '#fff',
    },
    success: {
      main: darken(0.5, '#c6edcf'),
      text: '#fff',
    },
    info: {
      main: darken(0.5, '#cbe2ee'),
      text: '#fff',
    },
    caution: {
      main: darken(0.5, '#f3ddba'),
      text: '#fff',
    },
    error: {
      main: darken(0.5, '#f6d0cd'),
      text: '#fff',
    },
    danger: {
      main: darken(0.5, '#f6d0cd'),
      text: '#fff',
    },
    light: {
      main: '#fff',
      text: darken(0.5, '#ddd'),
    },

    gray: {
      100: '#f5f5f5',
      200: '#ddd',
      300: darken(0.1, '#ddd'),
      400: darken(0.2, '#ddd'),
      500: darken(0.3, '#ddd'),
      600: darken(0.4, '#ddd'),
      700: darken(0.5, '#ddd'),
      800: darken(0.6, '#ddd'),
      900: darken(0.7, '#ddd'),
    },
    blue: {
      100: lighten(0.1, '#cbe2ee'),
      200: '#cbe2ee',
      300: darken(0.1, '#cbe2ee'),
      400: darken(0.2, '#cbe2ee'),
      500: darken(0.3, '#cbe2ee'),
      600: darken(0.4, '#cbe2ee'),
      700: darken(0.5, '#cbe2ee'),
      800: darken(0.6, '#cbe2ee'),
      900: darken(0.7, '#cbe2ee'),
    },
    green: {
      100: lighten(0.1, '#c6edcf'),
      200: '#c6edcf',
      300: darken(0.1, '#c6edcf'),
      400: darken(0.2, '#c6edcf'),
      500: darken(0.3, '#c6edcf'),
      600: darken(0.4, '#c6edcf'),
      700: darken(0.5, '#c6edcf'),
      800: darken(0.6, '#c6edcf'),
      900: darken(0.7, '#c6edcf'),
    },
    orange: {
      100: lighten(0.1, '#f3ddba'),
      200: '#f3ddba',
      300: darken(0.1, '#f3ddba'),
      400: darken(0.2, '#f3ddba'),
      500: darken(0.3, '#f3ddba'),
      600: darken(0.4, '#f3ddba'),
      700: darken(0.5, '#f3ddba'),
      800: darken(0.6, '#f3ddba'),
      900: darken(0.7, '#f3ddba'),
    },
    red: {
      100: lighten(0.1, '#f6d0cd'),
      200: '#f6d0cd',
      300: darken(0.1, '#f6d0cd'),
      400: darken(0.2, '#f6d0cd'),
      500: darken(0.3, '#f6d0cd'),
      600: darken(0.4, '#f6d0cd'),
      700: darken(0.5, '#f6d0cd'),
      800: darken(0.6, '#f6d0cd'),
      900: darken(0.7, '#f6d0cd'),
    },
    shadow: {
      base: '0 0 6px rgba(0,0,0,.15)',
    },
    white: '#fff',
    black: '#000',
    border: '#ddd',
    link: '#ff4a1a',
    text: darken(0.5, '#ddd'),
    textGray: darken(0.3, '#ddd'),
    hover: (code: string) => lighten(0.1, code),
  });
};
