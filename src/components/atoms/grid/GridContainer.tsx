"use client";

import { up } from "@/assets/styles/styled-theme";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledGridContainer = styled.div<{
  $gap?: string;
  $width?: string;
  $templateColumns?: string;
  $templateRows?: string;
  $templateColumnsMd?: string;
  $templateRowsMd?: string;
}>`
  display: grid;
  gap: ${({ $gap }) => $gap ?? "0"};
  width: ${({ $width }) => $width};

  grid-template-columns: ${({ $templateColumns }) => $templateColumns ?? "1fr"};
  grid-template-rows: ${({ $templateRows }) => $templateRows ?? "1fr"};

  ${up("sm")} {
    grid-template-columns: ${({ $templateColumnsMd, $templateColumns }) =>
      $templateColumnsMd ?? $templateColumns ?? "1fr"};
    grid-template-rows: ${({ $templateRowsMd, $templateRows }) =>
      $templateRowsMd ?? $templateRows ?? "1fr"};
  }
`;

interface IProps {
  gap?: string;
  width?: string;
  templateColumns?: string;
  templateRows?: string;
  templateColumnsMd?: string;
  templateRowsMd?: string;
}

const GridContainer: React.FC<PropsWithChildren<IProps>> = ({
  gap,
  width,
  templateColumns,
  templateColumnsMd,
  templateRows,
  templateRowsMd,
  children,
}) => {
  return (
    <StyledGridContainer
      $gap={gap}
      $width={width}
      $templateColumns={templateColumns}
      $templateColumnsMd={templateColumnsMd}
      $templateRows={templateRows}
      $templateRowsMd={templateRowsMd}
    >
      {children}
    </StyledGridContainer>
  );
};

export default GridContainer;
