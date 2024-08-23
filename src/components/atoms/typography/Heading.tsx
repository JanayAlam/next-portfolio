"use client";

import { styledTheme } from "@/assets/styles/styled-theme";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const fontSizes = {
  desktop: ["48px", "36px", "32px", "24px", "22px", "18px"],
  mobile: ["48px", "36px", "32px", "24px", "22px", "18px"],
};

const lineHeights = {
  desktop: ["56px", "44px", "40px", "32px", "32px", "28px"],
  mobile: ["56px", "44px", "40px", "32px", "32px", "28px"],
};

const StyledHeading = styled.h1<{ $level: number; $fontWeight: number }>`
  font-size: ${({ $level }) => fontSizes.mobile[$level - 1]};
  line-height: ${({ $level }) => lineHeights.mobile[$level - 1]};
  color: ${({ theme }) => theme.colors.typography.heading.main};
  font-weight: ${({ $fontWeight }) => $fontWeight};
`;

interface IProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: number;
  fontWeightVariant?: "regular" | "bold";
}

const Heading: React.FC<PropsWithChildren<IProps>> = ({
  level = 1,
  fontWeight,
  fontWeightVariant = "regular",
  children,
}) => {
  return (
    <StyledHeading
      as={`h${level}`}
      $level={level}
      $fontWeight={
        fontWeight ?? styledTheme.fontWeightVariant[fontWeightVariant]
      }
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
