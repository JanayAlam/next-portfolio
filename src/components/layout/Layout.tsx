"use client";

import { up } from "@/assets/styles/styled-theme";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "../organisms/header";

const MainContainer = styled.main`
  padding-top: ${({ theme }) => theme.ui.navbarHeightMobile};

  ${up("xs")} {
    padding-top: ${({ theme }) => theme.ui.navbarHeightDesktop};
  }
`;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default Layout;
