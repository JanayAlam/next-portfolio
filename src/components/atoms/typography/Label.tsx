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
  desktop: ["1rem", "0.875rem"],
  mobile: ["1rem", "0.875rem"],
};

const lineHeights = {
  desktop: ["1rem", "1rem"],
  mobile: ["1rem", "1rem"],
};

const StyledLabel = styled.label<{
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
      : theme.colors.typography.label.main};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  margin: ${({ $margin }) => $margin ?? "0"};
  letter-spacing: 2%;

  ${up("sm")} {
    font-size: ${({ $level }) => fontSizes.desktop[$level - 1]};
    line-height: ${({ $level }) => lineHeights.desktop[$level - 1]};
  }
`;

interface IProps {
  level?: 1 | 2;
  fontWeight?: number;
  fontWeightVariant?: keyof IFontWeightVariant;
  typographyColor?: keyof ITypographyColor;
  sematicColor?: keyof ISematicColor;
  colorVariant?: keyof IColorVariant;
  margin?: string;
}

const Label: React.FC<PropsWithChildren<IProps>> = ({
  level = 1,
  fontWeight,
  fontWeightVariant = "regular",
  typographyColor,
  sematicColor,
  colorVariant,
  margin,
  children,
}) => {
  return (
    <StyledLabel
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
    </StyledLabel>
  );
};

export default Label;
