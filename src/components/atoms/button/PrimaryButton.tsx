"use client";

import { ButtonProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";

const StyledButton = styled(BaseButton)`
  border: none;

  color: ${({ theme }) => theme.colors.neutral.neutral50};
  background: ${({ theme }) => theme.colors.neutral.neutral800};

  &:hover {
    background: ${({ theme }) => theme.colors.neutral.neutral700} !important;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.neutral.neutral400};
    background: ${({ theme }) => theme.colors.neutral.neutral200} !important;
  }
`;

const PrimaryButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...rest
}) => {
  return (
    <StyledButton {...rest} type="primary">
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;
