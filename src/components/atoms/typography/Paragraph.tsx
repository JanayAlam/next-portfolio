"use client";

import { styledTheme, up } from "@/assets/styles/styled-theme";
import {
  IColorVariant,
  IFontWeightVariant,
  ISematicColor,
  ITypographyColor,
} from "@/assets/styles/styled-theme.types";
import { TTextAlign } from "@/types";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const fontSizes = {
  desktop: ["1rem", "0.875rem", "0.75rem"],
  mobile: ["1rem", "0.875rem", "0.75rem"],
};

const lineHeights = {
  desktop: ["1.5rem", "1.375rem", "1.25rem"],
  mobile: ["1.5rem", "1.375rem", "1.25rem"],
};

const StyledParagraph = styled.p<{
  $level: number;
  $fontWeight: number;
  $color?: string;
  $typographyColor?: keyof ITypographyColor;
  $sematicColor?: keyof ISematicColor;
  $colorVariant?: keyof IColorVariant;
  $textAlign: TTextAlign;
  $margin?: string;
  $underlined?: boolean;
  $italic?: boolean;
}>`
  font-size: ${({ $level }) => fontSizes.mobile[$level - 1]};
  line-height: ${({ $level }) => lineHeights.mobile[$level - 1]};
  color: ${({
    $color,
    $sematicColor,
    $typographyColor,
    $colorVariant,
    theme,
  }) =>
    $color
      ? $color
      : $sematicColor
      ? $colorVariant && theme.colors.sematic[$sematicColor][$colorVariant]
        ? theme.colors.sematic[$sematicColor][$colorVariant]
        : theme.colors.sematic[$sematicColor].main
      : $typographyColor
      ? $colorVariant &&
        theme.colors.typography[$typographyColor][$colorVariant]
        ? theme.colors.typography[$typographyColor][$colorVariant]
        : theme.colors.typography[$typographyColor].main
      : theme.colors.typography.paragraph.main};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  text-align: ${({ $textAlign }) => $textAlign};
  margin: ${({ $margin }) => $margin ?? "0"};
  text-decoration: ${({ $underlined }) =>
    $underlined ? "underline" : undefined};
  font-style: ${({ $italic }) => ($italic ? "italic" : undefined)};

  ${up("sm")} {
    font-size: ${({ $level }) => fontSizes.desktop[$level - 1]};
    line-height: ${({ $level }) => lineHeights.desktop[$level - 1]};
  }
`;

interface IProps {
  level?: 1 | 2 | 3;
  fontWeight?: number;
  fontWeightVariant?: keyof IFontWeightVariant;
  color?: string;
  typographyColor?: keyof ITypographyColor;
  sematicColor?: keyof ISematicColor;
  colorVariant?: keyof IColorVariant;
  textAlign?: TTextAlign;
  margin?: string;
  underlined?: boolean;
  italic?: boolean;
}

const Paragraph: React.FC<PropsWithChildren<IProps>> = ({
  level = 1,
  fontWeight,
  fontWeightVariant = "regular",
  color,
  typographyColor,
  sematicColor,
  colorVariant,
  margin,
  textAlign = "left",
  underlined = false,
  italic = false,
  children,
}) => {
  return (
    <StyledParagraph
      $level={level}
      $fontWeight={
        fontWeight ?? styledTheme.fontWeightVariant[fontWeightVariant]
      }
      $color={color}
      $typographyColor={typographyColor}
      $sematicColor={sematicColor}
      $colorVariant={colorVariant}
      $textAlign={textAlign}
      $margin={margin}
      $underlined={underlined}
      $italic={italic}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
