"use client";

import { LightingBoltIcon } from "@/assets/icons";
import { styledTheme, up } from "@/assets/styles/styled-theme";
import { PrimaryButton, TertiaryButton } from "@/components/atoms/button";
import { FlexContainer, Space } from "@/components/atoms/grid";
import SectionContainer from "@/components/atoms/grid/SectionContainer";
import Link from "@/components/atoms/link";
import { Heading, Paragraph } from "@/components/atoms/typography";
import useSocialMediaList from "@/hooks/useSocialMediaList";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const HeroSectionItem = styled.div`
  max-width: 760px;
`;

const PrimaryGradientColoredText = styled.span`
  background: -webkit-linear-gradient(
    2450deg,
    ${({ theme }) => theme.colors.primary.gradient1}
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;

  ${up("sm")} {
    display: inline;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral.neutral500};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.neutral800};
  }
`;

const HeroSection: React.FC = () => {
  const socialMediaList = useSocialMediaList();

  const handleMailTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:janayalam820@gmail.com";
  };

  const handlePhoneTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "tel:+8801946748486";
  };

  return (
    <SectionContainer primary>
      <HeroSectionItem>
        <FlexContainer gap="0.5rem" alignItems="center">
          <LightingBoltIcon />
          <Heading level={6} gradient fontWeightVariant="semiBold">
            Open to new projects
          </Heading>
        </FlexContainer>
        <Space size={4} />
        <Heading
          level={1}
          fontWeightVariant="extraBold"
          color={styledTheme.colors.neutral.neutral800}
        >
          Full stack&nbsp;
          <PrimaryGradientColoredText>
            software engineer&nbsp;
          </PrimaryGradientColoredText>
          and technical writer
        </Heading>
        <Space size={4} />
        <Paragraph color={styledTheme.colors.neutral.neutral600}>
          Hi, I am <b>Md. Janay Alam</b>, a software engineer based in Dhaka. I
          am experienced in web development. I am proficient in
          JavaScript/Typescript, Python, and Java.
        </Paragraph>
        <Space size={4} />
        <FlexContainer alignItems="center" gap="0.5rem">
          <PrimaryButton icon={<MailOutlined />} onClick={handleMailTo}>
            Email me
          </PrimaryButton>
          <TertiaryButton icon={<PhoneOutlined />} onClick={handlePhoneTo}>
            +8801946748486
          </TertiaryButton>
        </FlexContainer>
        <Space size={8} />
        <FlexContainer alignItems="center" gap="1rem">
          {socialMediaList.map((socialMedia) => (
            <StyledLink
              href={socialMedia.link || ""}
              key={socialMedia.key}
              target="_blank"
            >
              {socialMedia.icon}
            </StyledLink>
          ))}
        </FlexContainer>
      </HeroSectionItem>
    </SectionContainer>
  );
};

export default HeroSection;
