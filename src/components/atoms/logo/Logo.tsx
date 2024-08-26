"use client";

import { up } from "@/assets/styles/styled-theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const LogoLink = styled(Link)`
  font-size: 1.125rem;
  letter-spacing: -1px;
  flex: 1;
  font-weight: ${({ theme }) => theme.fontWeightVariant.bold};

  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.primary.gradient1}
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${up("sm")} {
    font-size: 1.5rem;
  }
`;

interface IProps {
  name?: string;
}

const Logo: React.FC<IProps> = ({ name }) => {
  return (
    <LogoLink key="home" href="/">
      {name ?? "JA"}
    </LogoLink>
  );
};

export default Logo;
