"use client";

import { up } from "@/assets/styles/styled-theme";
import styled from "styled-components";

const SectionContainer = styled.section<{ primary?: boolean }>`
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.neutral.neutral50 : "#fffff"};
  padding: 2rem 1.5rem;

  ${up("sm")} {
    padding: 3rem 2rem;
  }

  ${up("md")} {
    padding: 3rem 4rem;
  }

  ${up("sl")} {
    padding: 5rem 7rem;
  }
`;

export default SectionContainer;
