"use client";

import { styledTheme, up } from "@/assets/styles/styled-theme";
import {
  IColorVariant,
  IFontWeightVariant,
  ISematicColor,
  ITypographyColor,
} from "@/assets/styles/styled-theme.types";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const fontSizes = {
  desktop: ["0.875rem"],
  mobile: ["0.875rem"],
};

const lineHeights = {
  desktop: ["1rem"],
  mobile: ["1rem"],
};

const StyledCTALabel = styled.div<{
  $level: number;
  $fontWeight: number;
  $typographyColor?: keyof ITypographyColor;
  $sematicColor?: keyof ISematicColor;
  $colorVariant?: keyof IColorVariant;
  $margin?: string;
  $underlined?: boolean;
  $italic?: boolean;
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
      : theme.colors.typography.label.main};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  margin: ${({ $margin }) => $margin ?? "0"};
  letter-spacing: 2%;
  text-decoration: ${({ $underlined }) =>
    $underlined ? "underline" : undefined};
  font-style: ${({ $italic }) => ($italic ? "italic" : undefined)};

  ${up("sm")} {
    font-size: ${({ $level }) => fontSizes.desktop[$level - 1]};
    line-height: ${({ $level }) => lineHeights.desktop[$level - 1]};
  }
`;

interface IProps {
  level?: 1;
  fontWeight?: number;
  fontWeightVariant?: keyof IFontWeightVariant;
  typographyColor?: keyof ITypographyColor;
  sematicColor?: keyof ISematicColor;
  colorVariant?: keyof IColorVariant;
  underlined?: boolean;
  italic?: boolean;
  margin?: string;
}

const CTALabel: React.FC<PropsWithChildren<IProps>> = ({
  level = 1,
  fontWeight,
  typographyColor,
  sematicColor,
  colorVariant,
  underlined = false,
  italic = false,
  margin,
  children,
}) => {
  return (
    <StyledCTALabel
      $level={level}
      $fontWeight={fontWeight ?? styledTheme.fontWeightVariant.semiBold}
      $typographyColor={typographyColor}
      $sematicColor={sematicColor}
      $colorVariant={colorVariant}
      $margin={margin}
      $underlined={underlined}
      $italic={italic}
    >
      {children}
    </StyledCTALabel>
  );
};

export default CTALabel;
