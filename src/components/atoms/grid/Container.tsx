"use client";

import { up } from "@/assets/styles/styled-theme";
import { IShadow } from "@/assets/styles/styled-theme.types";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledContainer = styled.div<{
  $margin?: string;
  $padding?: string;
  $bgColor?: string;
  $width?: string;
  $height?: string;
  $position?: string;
  $border?: string;
  $borderTop?: string;
  $borderBottom?: string;
  $borderRight?: string;
  $borderLeft?: string;
  $borderRadius?: string;
  $zIndex?: number;
  $boxShadow?: keyof IShadow;
}>`
  z-index: ${({ $zIndex }) => $zIndex};
  margin: 0 auto;
  padding: ${({ $padding }) => $padding ?? "0"};
  background-color: ${({ $bgColor }) => $bgColor ?? undefined};
  width: ${({ $width }) => $width};
  position: ${({ $position }) => $position};
  height: ${({ $height }) => $height ?? "fit-content"};
  border: ${({ $border }) => $border ?? "0"};
  border-top: ${({ $borderTop }) => $borderTop};
  border-bottom: ${({ $borderBottom }) => $borderBottom};
  border-right: ${({ $borderRight }) => $borderRight};
  border-left: ${({ $borderLeft }) => $borderLeft};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "0"};
  box-shadow: ${({ $boxShadow, theme }) =>
    $boxShadow ? theme.shadow[$boxShadow] : undefined};

  ${up("xs")} {
    max-width: 600px;
  }

  ${up("sm")} {
    max-width: 960px;
  }

  ${up("md")} {
    max-width: 1280px;
  }

  ${up("sl")} {
    max-width: 1440px;
  }

  ${up("lg")} {
    max-width: 1920px;
  }

  ${up("xl")} {
    max-width: 2600px;
  }
`;

interface IProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  position?: string;
  borderRadius?: string;
  zIndex?: number;
  shadow?: keyof IShadow;
}

const Container: React.FC<PropsWithChildren<IProps>> = ({
  margin,
  padding,
  backgroundColor,
  width,
  height,
  border,
  borderTop,
  borderBottom,
  borderRight,
  borderLeft,
  borderRadius,
  position,
  shadow,
  children,
  zIndex,
}) => {
  return (
    <StyledContainer
      $margin={margin}
      $padding={padding}
      $bgColor={backgroundColor}
      $width={width}
      $height={height}
      $border={border}
      $borderTop={borderTop}
      $borderBottom={borderBottom}
      $borderRight={borderRight}
      $borderLeft={borderLeft}
      $borderRadius={borderRadius}
      $boxShadow={shadow}
      $position={position}
      $zIndex={zIndex}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
