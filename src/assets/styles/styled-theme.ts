import { createStyledBreakpointsTheme } from "styled-breakpoints";
import { IBreakpointsInt, IStyledTheme } from "./styled-theme.types";

const breakpointsInt: IBreakpointsInt = {
  xs: 600,
  sm: 960,
  md: 1280,
  sl: 1440,
  lg: 1920,
  xl: 2600,
};

export const breakpoints = createStyledBreakpointsTheme({
  breakpoints: {
    xs: `${breakpointsInt.xs}px`,
    sm: `${breakpointsInt.sm}px`,
    md: `${breakpointsInt.md}px`,
    sl: `${breakpointsInt.sl}px`,
    lg: `${breakpointsInt.lg}px`,
    xl: `${breakpointsInt.xl}px`,
  },
});

export const styledTheme: IStyledTheme = {
  // color
  colors: {
    neutral: {
      neutral50: "#F8FAFC",
      neutral100: "#F1F5F9",
      neutral200: "#E2E8F0",
      neutral300: "#CBD5E1",
      neutral400: "#94A3B8",
      neutral500: "#68788D",
      neutral600: "#45505E",
      neutral700: "#343C46",
      neutral800: "#23282F",
      neutral900: "#181F27",
    },
    primary: {
      main: "#5FC6FF",
      dark: "#233358",
      gradient: "#5A7CFF, #5FC6FF",
    },
    sematic: {
      info: {
        main: "#5A7CFF",
      },
      error: {
        main: "#E9524A",
      },
      success: {
        main: "#1CB47C",
      },
      warning: {
        main: "#F29B28",
      },
    },
    typography: {
      heading: {
        main: "#181F27",
      },
      paragraph: {
        main: "#000000",
      },
      label: {
        main: "#000000",
      },
      ctaLabel: {
        main: "#000000",
      },
    },
  },

  // font weight
  fontWeightVariant: {
    extraLight: 100,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 1000,
  },

  // breakpoints
  breakpointsInt,
  ...breakpoints,
};

export const { up, down, between, only } = styledTheme.breakpoints;
