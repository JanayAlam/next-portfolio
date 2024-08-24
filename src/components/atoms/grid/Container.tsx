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
  $border?: string;
  $borderRadius?: string;
  $boxShadow?: keyof IShadow;
}>`
  margin: ${({ $margin }) => $margin ?? "0"};
  padding: ${({ $padding }) => $padding ?? "0"};
  background-color: ${({ $bgColor }) => $bgColor ?? undefined};
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "fit-content"};
  border: ${({ $border }) => $border ?? "0"};
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
  borderRadius,
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
      $borderRadius={borderRadius}
      $boxShadow={shadow}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
