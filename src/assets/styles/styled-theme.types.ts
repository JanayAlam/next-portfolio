import { StyledBreakpointsTheme } from "styled-breakpoints";

export interface IBreakpointsInt {
  xs: number;
  sm: number;
  md: number;
  sl: number;
  lg: number;
  xl: number;
}

export interface IColorVariant {
  light?: string;
  main: string;
  dark?: string;
}

export interface IFontWeightVariant {
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
}

export interface INeutralColor {
  neutral50: string;
  neutral100: string;
  neutral200: string;
  neutral300: string;
  neutral400: string;
  neutral500: string;
  neutral600: string;
  neutral700: string;
  neutral800: string;
  neutral900: string;
}

export interface IPrimaryColor {
  main: string;
  dark: string;
  gradient: string;
}

export interface ISematicColor {
  info: IColorVariant;
  error: IColorVariant;
  warning: IColorVariant;
  success: IColorVariant;
}

export interface ITypographyColor {
  heading: IColorVariant;
  paragraph: IColorVariant;
  label: IColorVariant;
  ctaLabel: IColorVariant;
}

export interface IStyledTheme
  extends StyledBreakpointsTheme<
    "xs" | "sm" | "md" | "lg" | "xl" | "sl",
    "sm" | "md" | "lg" | "xl" | "sl"
  > {
  colors: {
    neutral: INeutralColor;
    primary: IPrimaryColor;
    sematic: ISematicColor;
    typography: ITypographyColor;
  };
  fontWeightVariant: IFontWeightVariant;
  breakpointsInt: IBreakpointsInt;
}
