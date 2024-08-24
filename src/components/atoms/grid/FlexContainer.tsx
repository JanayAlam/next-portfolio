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
}>`
  display: flex;
  flex-direction: ${({ $flexFlow }) => $flexFlow ?? "row"};
  gap: ${({ $gap }) => $gap ?? "0"};
  align-items: ${({ $alignItems }) => $alignItems ?? "center"};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? "center"};
  width: ${({ $width }) => $width};
`;

interface IProps {
  gap?: string;
  column?: boolean;
  flexFlow?: TFlexFlow;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
}

const FlexContainer: React.FC<PropsWithChildren<IProps>> = ({
  gap,
  column,
  flexFlow,
  alignItems,
  justifyContent,
  width,
  children,
}) => {
  return (
    <StyledFlexContainer
      $gap={gap}
      $flexFlow={column ? "column" : flexFlow}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $width={width}
    >
      {children}
    </StyledFlexContainer>
  );
};

export default FlexContainer;
