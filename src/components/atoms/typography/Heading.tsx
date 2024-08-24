"use client";

import { styledTheme, up } from "@/assets/styles/styled-theme";
import {
  IColorVariant,
  IFontWeightVariant,
  ISematicColor,
  ITypographyColor,
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
  $typographyColor?: keyof ITypographyColor;
  $sematicColor?: keyof ISematicColor;
  $colorVariant?: keyof IColorVariant;
  $margin?: string;
}>`
  font-size: ${({ $level }) => fontSizes.mobile[$level - 1]};
  line-height: ${({ $level }) => lineHeights.mobile[$level - 1]};
  color: ${({ $sematicColor, $typographyColor, $colorVariant, theme }) =>
    $sematicColor
      ? $colorVariant && theme.colors.sematic[$sematicColor][$colorVariant]
        ? theme.colors.sematic[$sematicColor][$colorVariant]
        : theme.colors.sematic[$sematicColor].main
      : $typographyColor
      ? $colorVariant &&
        theme.colors.typography[$typographyColor][$colorVariant]
        ? theme.colors.typography[$typographyColor][$colorVariant]
        : theme.colors.typography[$typographyColor].main
      : theme.colors.typography.heading.main};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  margin: ${({ $margin }) => $margin ?? "0"};

  ${up("sm")} {
    font-size: ${({ $level }) => fontSizes.desktop[$level - 1]};
    line-height: ${({ $level }) => lineHeights.desktop[$level - 1]};
  }
`;

interface IProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: number;
  fontWeightVariant?: keyof IFontWeightVariant;
  typographyColor?: keyof ITypographyColor;
  sematicColor?: keyof ISematicColor;
  colorVariant?: keyof IColorVariant;
  margin?: string;
}

const Heading: React.FC<PropsWithChildren<IProps>> = ({
  level = 1,
  fontWeight,
  fontWeightVariant = "medium",
  typographyColor,
  sematicColor,
  colorVariant,
  children,
  margin,
}) => {
  return (
    <StyledHeading
      as={`h${level}`}
      $level={level}
      $fontWeight={
        fontWeight ?? styledTheme.fontWeightVariant[fontWeightVariant]
      }
      $typographyColor={typographyColor}
      $sematicColor={sematicColor}
      $colorVariant={colorVariant}
      $margin={margin}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
