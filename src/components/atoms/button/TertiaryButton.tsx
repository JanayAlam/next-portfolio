"use client";

import { Button, ButtonProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
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
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default TertiaryButton;
