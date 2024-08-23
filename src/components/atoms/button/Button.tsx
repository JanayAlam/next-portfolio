"use client";

import { ButtonProps } from "antd";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TertiaryButton from "./TertiaryButton";
import TextButton from "./TextButton";

const ButtonContainer = styled.div`
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: none;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.25rem;
  }
`;

interface IProps extends ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

const Button: React.FC<PropsWithChildren<IProps>> = ({
  primary,
  secondary,
  tertiary,
  type,
  children,
  ...rest
}) => {
  type = type === "text" ? "text" : "primary";

  return type === "text" ? (
    <TextButton {...rest} size="small" type="text">
      {children}
    </TextButton>
  ) : (
    <ButtonContainer>
      {tertiary ? (
        <TertiaryButton {...rest} type={type}>
          {children}
        </TertiaryButton>
      ) : secondary ? (
        <SecondaryButton {...rest} type={type}>
          {children}
        </SecondaryButton>
      ) : (
        <PrimaryButton {...rest} type={type}>
          {children}
        </PrimaryButton>
      )}
    </ButtonContainer>
  );
};

export default Button;
