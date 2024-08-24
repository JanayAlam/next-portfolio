"use client";

import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type TFlexFlow = "column" | "column-reverse" | "row" | "row-reverse";

const StyledFlexContainer = styled.div<{
  $flexFlow?: TFlexFlow;
  $gap?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $width?: string;
  $flexWrap?: string;
  $margin?: string;
}>`
  display: flex;
  flex-direction: ${({ $flexFlow }) => $flexFlow ?? "row"};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  gap: ${({ $gap }) => $gap ?? "0"};
  align-items: ${({ $alignItems }) => $alignItems ?? "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? "start"};
  width: ${({ $width }) => $width ?? "100%"};
  margin: ${({ $margin }) => $margin};
`;

interface IProps {
  gap?: string;
  column?: boolean;
  flexFlow?: TFlexFlow;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  flexWrap?: string;
  margin?: string;
  className?: string;
}

const FlexContainer: React.FC<PropsWithChildren<IProps>> = ({
  gap,
  column,
  flexFlow,
  alignItems,
  justifyContent,
  width,
  flexWrap,
  className,
  margin,
  children,
}) => {
  return (
    <StyledFlexContainer
      className={className}
      $gap={gap}
      $flexFlow={column ? "column" : flexFlow}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $width={width}
      $flexWrap={flexWrap}
      $margin={margin}
    >
      {children}
    </StyledFlexContainer>
  );
};

export default FlexContainer;
