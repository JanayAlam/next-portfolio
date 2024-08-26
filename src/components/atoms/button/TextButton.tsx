"use client";

import { ButtonProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";

const StyledButton = styled(BaseButton)`
  border: none;
  padding: 0;
  height: 20px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.neutral.neutral800} !important;

  &:hover {
    background: none !important;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.neutral.neutral400} !important;
  }
`;

const TextButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...rest
}) => {
  return (
    <StyledButton {...rest} type="text">
      {children}
    </StyledButton>
  );
};

export default TextButton;
