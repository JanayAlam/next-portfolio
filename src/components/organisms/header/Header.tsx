"use client";

import { up } from "@/assets/styles/styled-theme";
import { TertiaryButton, TextButton } from "@/components/atoms/button";
import { Container, FlexContainer, Space } from "@/components/atoms/grid";
import Link from "@/components/atoms/link";
import useNavigationItems from "@/hooks/useNavigationItems";
import { useRouter } from "next/navigation";
import React from "react";
import {} from "styled-breakpoints";
import styled from "styled-components";

const StyledDesktopHeader = styled.div`
  display: none;
  height: 100%;

  ${up("sm")} {
    display: flex;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  font-size: 1.375rem;
  letter-spacing: -1px;
  font-weight: ${({ theme }) => theme.fontWeightVariant.bold};

  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.primary.gradient}
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Header: React.FC = () => {
  const menuItems = useNavigationItems();
  const router = useRouter();

  const resumeButtonClickHandler = () => {
    router.push("/resume");
  };

  return (
    <Container height="5rem" padding="0 5rem" backgroundColor="#ffffff">
      <StyledDesktopHeader>
        <Logo key="home" href="/">
          JA
        </Logo>
        <Space horizontal size={8} />
        <FlexContainer justifyContent="space-between">
          <FlexContainer gap="2rem">
            {menuItems.map((item) => (
              <Link key={item.key} href={item.path || ""}>
                <TextButton>{item.display}</TextButton>
              </Link>
            ))}
          </FlexContainer>
          <TertiaryButton onClick={resumeButtonClickHandler}>
            Resume
          </TertiaryButton>
        </FlexContainer>
      </StyledDesktopHeader>
    </Container>
  );
};

export default Header;
