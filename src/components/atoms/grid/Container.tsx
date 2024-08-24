"use client";

import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledContainer = styled.div<{
  $margin?: string;
  $padding?: string;
  $bgColor?: string;
  $width?: string;
  $height?: string;
}>`
  margin: ${({ $margin }) => $margin ?? "0"};
  padding: ${({ $padding }) => $padding ?? "0"};
  background-color: ${({ $bgColor }) => $bgColor ?? undefined};
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "fit-content"};
`;

interface IProps {
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const Container: React.FC<PropsWithChildren<IProps>> = ({
  margin,
  padding,
  backgroundColor,
  width,
  height,
  children,
}) => {
  return (
    <StyledContainer
      $margin={margin}
      $padding={padding}
      $bgColor={backgroundColor}
      $width={width}
      $height={height}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
