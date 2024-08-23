"use client";

import { Button, ButtonProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
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
    <StyledButton type="text" {...rest}>
      {children}
    </StyledButton>
  );
};

export default TextButton;
