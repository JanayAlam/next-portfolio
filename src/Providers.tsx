"use client";

import { ConfigProvider } from "antd";
import React, { PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { antDesignTheme } from "./assets/styles/antd-theme";
import { styledTheme } from "./assets/styles/styled-theme";
import StyledComponentsRegistry from "./lib/styled-component-registry";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <HelmetProvider>
      <ConfigProvider theme={antDesignTheme}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </ConfigProvider>
    </HelmetProvider>
  );
};

export default Providers;
