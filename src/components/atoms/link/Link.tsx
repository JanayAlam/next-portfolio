"use client";

import NextLink, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledLink = styled(NextLink)`
  text-decoration: none;
`;

const Link: React.FC<PropsWithChildren<{ target?: string } & LinkProps>> = ({
  children,
  target,
  ...rest
}) => {
  return (
    <StyledLink target={target} {...rest}>
      {children}
    </StyledLink>
  );
};

export default Link;
