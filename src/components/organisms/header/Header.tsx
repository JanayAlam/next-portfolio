"use client";

import { MenuIcon } from "@/assets/icons";
import { styledTheme, up } from "@/assets/styles/styled-theme";
import { TertiaryButton, TextButton } from "@/components/atoms/button";
import { FlexContainer, Space } from "@/components/atoms/grid";
import Link from "@/components/atoms/link";
import Logo from "@/components/atoms/logo";
import useNavigationItems from "@/hooks/useNavigationItems";
import { Drawer, Menu } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.nav<{
  $borderBottom?: string;
  $shadow?: string;
}>`
  width: 100%;
  height: ${({ theme }) => styledTheme.ui.navbarHeightMobile};
  padding: 0 auto;
  background-color: #ffffff;
  position: fixed;
  border-bottom: ${({ $borderBottom }) => $borderBottom};
  box-shadow: ${({ $shadow }) => $shadow};
  z-index: 1000;

  ${up("xs")} {
    height: ${({ theme }) => styledTheme.ui.navbarHeightMobile};
    padding: ${({ theme }) => styledTheme.ui.sidePadding};
  }
`;

const DesktopHeader = styled.div`
  font-family: "Inter", sans-serif;
  display: none;
  height: 100%;

  ${up("xs")} {
    display: flex;
    align-items: center;
  }
`;

const MobileHeader = styled.div`
  font-family: "Inter", sans-serif;
  height: 100%;
  display: flex;
  margin-inline: 1rem;
  align-items: center;
  justify-content: space-between;

  ${up("xs")} {
    display: none;
  }
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-header-title {
    flex-direction: row-reverse;
  }

  .ant-drawer-close {
    margin: 0;
  }

  .ant-menu {
    border-inline-end: 0 !important;
  }

  .ant-menu li {
    margin: 0 !important;
    padding-left: 1rem !important;
    border-radius: 4px;
  }

  .ant-menu-item-selected {
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.primary.gradient2}
    ) !important;
    color: ${({ theme }) => theme.colors.neutral.neutral900} !important;
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigationModalOpen, setIsNavigationModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = useNavigationItems();
  const router = useRouter();

  const resumeButtonClickHandler = () => {
    router.push("/resume");
    setIsNavigationModalOpen(false);
  };

  return (
    <HeaderContainer
      $borderBottom={
        isScrolled ? `1px solid ${styledTheme.colors.border.light}` : undefined
      }
      $shadow={isScrolled ? "sm" : undefined}
    >
      <DesktopHeader>
        <Logo />
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
      </DesktopHeader>

      <MobileHeader>
        <Logo name="Janay Alam" />
        <TextButton
          onClick={() => setIsNavigationModalOpen(true)}
          icon={
            <MenuIcon
              width="22px"
              height="22px"
              fill={styledTheme.colors.neutral.neutral900}
            />
          }
        />
      </MobileHeader>

      <StyledDrawer
        open={isNavigationModalOpen}
        onClose={() => setIsNavigationModalOpen(false)}
        title={
          <TertiaryButton onClick={resumeButtonClickHandler} size="small">
            Resume
          </TertiaryButton>
        }
      >
        <Menu
          mode="inline"
          items={[
            {
              key: "/",
              label: "Home",
              onClick: () => {
                router.push("/");
                setIsNavigationModalOpen(false);
              },
            },
            ...menuItems.map((item) => ({
              key: item.key,
              label: item.display,
              onClick: () => {
                router.push(item.path ?? "");
                setIsNavigationModalOpen(false);
              },
            })),
          ]}
        />
      </StyledDrawer>
    </HeaderContainer>
  );
};

export default Header;
