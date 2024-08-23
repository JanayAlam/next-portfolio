"use client";

import { styledTheme, up } from "@/assets/styles/styled-theme";
import {
  IColorVariant,
  IFontWeightVariant,
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
  $colorVariant: keyof IColorVariant;
  $textAlign: TTextAlign;
}>`
  font-size: ${({ $level }) => fontSizes.mobile[$level - 1]};
  line-height: ${({ $level }) => lineHeights.mobile[$level - 1]};
  color: ${({ $colorVariant, theme }) =>
    theme.colors.typography.paragraph[$colorVariant] ??
    theme.colors.typography.paragraph.main};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  text-align: ${({ $textAlign }) => $textAlign};

  ${up("sm")} {
    font-size: ${({ $level }) => fontSizes.desktop[$level - 1]};
    line-height: ${({ $level }) => lineHeights.desktop[$level - 1]};
  }
`;

interface IProps {
  level?: 1 | 2 | 3;
  fontWeight?: number;
  fontWeightVariant?: keyof IFontWeightVariant;
  colorVariant?: keyof IColorVariant;
  textAlign?: TTextAlign;
}

const Paragraph: React.FC<PropsWithChildren<IProps>> = ({
  level = 1,
  fontWeight,
  fontWeightVariant = "regular",
  colorVariant = "main",
  textAlign = "left",
  children,
}) => {
  return (
    <StyledParagraph
      as={`h${level}`}
      $level={level}
      $fontWeight={
        fontWeight ?? styledTheme.fontWeightVariant[fontWeightVariant]
      }
      $colorVariant={colorVariant}
      $textAlign={textAlign}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
