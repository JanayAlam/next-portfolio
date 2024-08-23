"use client";

import { ButtonProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";

const StyledButton = styled(BaseButton)`
  border: 1px solid ${({ theme }) => theme.colors.neutral.neutral300};

  color: ${({ theme }) => theme.colors.neutral.neutral800};
  background: ${({ theme }) => theme.colors.neutral.neutral50};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.neutral800} !important;
    border: 1px solid ${({ theme }) => theme.colors.neutral.neutral300};
    background: ${({ theme }) => theme.colors.neutral.neutral50} !important;
  }

  &:disabled,
  &:disabled &:hover {
    border: 0;
    color: ${({ theme }) => theme.colors.neutral.neutral400} !important;
    background: ${({ theme }) => theme.colors.neutral.neutral200} !important;
  }
`;

const TertiaryButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...rest
}) => {
  return (
    <StyledButton {...rest} type="primary">
      {children}
    </StyledButton>
  );
};

export default TertiaryButton;
