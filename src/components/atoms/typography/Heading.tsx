"use client";

import { styledTheme, up } from "@/assets/styles/styled-theme";
import {
  IColorVariant,
  IFontWeightVariant,
} from "@/assets/styles/styled-theme.types";
import React, { PropsWithChildren } from "react";
import {} from "styled-breakpoints";
import styled from "styled-components";

const fontSizes = {
  desktop: ["3rem", "2.25rem", "2rem", "1.5rem", "1.375rem", "1.125rem"],
  mobile: ["3rem", "2.25rem", "2rem", "1.5rem", "1.375rem", "1.125rem"],
};

const lineHeights = {
  desktop: ["3.5rem", "2.75rem", "2.5rem", "2rem", "2rem", "1.75rem"],
  mobile: ["3.5rem", "2.75rem", "2.5rem", "2rem", "2rem", "1.75rem"],
};

const StyledHeading = styled.h1<{
  $level: number;
  $fontWeight: number;
  $colorVariant: keyof IColorVariant;
}>`
  font-size: ${({ $level }) => fontSizes.mobile[$level - 1]};
  line-height: ${({ $level }) => lineHeights.mobile[$level - 1]};
  color: ${({ $colorVariant, theme }) =>
    theme.colors.typography.heading[$colorVariant] ??
    theme.colors.typography.heading.main};
  font-weight: ${({ $fontWeight }) => $fontWeight};

  ${up("sm")} {
    font-size: ${({ $level }) => fontSizes.desktop[$level - 1]};
    line-height: ${({ $level }) => lineHeights.desktop[$level - 1]};
  }
`;

interface IProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: number;
  fontWeightVariant?: keyof IFontWeightVariant;
  colorVariant?: keyof IColorVariant;
}

const Heading: React.FC<PropsWithChildren<IProps>> = ({
  level = 1,
  fontWeight,
  fontWeightVariant = "medium",
  colorVariant = "main",
  children,
}) => {
  return (
    <StyledHeading
      as={`h${level}`}
      $level={level}
      $fontWeight={
        fontWeight ?? styledTheme.fontWeightVariant[fontWeightVariant]
      }
      $colorVariant={colorVariant}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
