"use client";

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
  $boxShadow?: keyof IShadow;
}>`
  margin: ${({ $margin }) => $margin ?? "0"};
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
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
