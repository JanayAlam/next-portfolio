"use client";

import { ConfigProvider } from "antd";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { antDesignTheme } from "./assets/styles/antd-theme";
import { GlobalStyles } from "./assets/styles/global-styles";
import { styledTheme } from "./assets/styles/styled-theme";
import StyledComponentsRegistry from "./lib/styled-component-registry";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ConfigProvider theme={antDesignTheme}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={styledTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </ConfigProvider>
  );
};

export default Providers;
