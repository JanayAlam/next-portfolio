"use client";

import React from "react";
import styled from "styled-components";

const spaceSizes = {
  1: "0.125rem",
  2: "0.25rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
};

const StyledSpace = styled.span<{
  $size: keyof typeof spaceSizes;
  $horizontal?: boolean;
}>`
  display: ${({ $horizontal }) => ($horizontal ? undefined : "block")};
  height: ${({ $size, $horizontal }) =>
    $horizontal ? "0" : spaceSizes[$size]};
  width: ${({ $size, $horizontal }) => ($horizontal ? spaceSizes[$size] : "0")};
`;

interface IProps {
  size: keyof typeof spaceSizes;
  horizontal?: boolean;
}

const Space: React.FC<IProps> = ({ horizontal = false, size }) => (
  <StyledSpace $horizontal={horizontal} $size={size} />
);

export default Space;
