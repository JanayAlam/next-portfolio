"use client";

import { styledTheme, up } from "@/assets/styles/styled-theme";
import { PrimaryButton, TertiaryButton } from "@/components/atoms/button";
import { FlexContainer, Space } from "@/components/atoms/grid";
import Link from "@/components/atoms/link";
import { Heading, Paragraph } from "@/components/atoms/typography";
import { useBreakPoints } from "@/hooks/useBreakPoints";
import useSocialMediaList from "@/hooks/useSocialMediaList";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import personalImage from "../../../assets/images/personal/personal.jpg";

const HeroSectionContainer = styled.div`
  background-color: #f8fafc;
  padding: 3rem 1rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  ${up("md")} {
    gap: 3rem;
    padding: 2rem;
  }

  ${up("sl")} {
    gap: 10rem;
  }
`;

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
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral.neutral500};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.neutral800};
  }
`;

const StyledImage = styled(Image)`
  border-radius: 6px;
`;

const HeroSection: React.FC = () => {
  const socialMediaList = useSocialMediaList();
  const { upMd, upXs, upLg } = useBreakPoints();

  const handleMailTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:janayalam820@gmail.com";
  };

  const handlePhoneTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "tel:+8801946748486";
  };

  return (
    <HeroSectionContainer>
      <HeroSectionItem>
        <Heading
          level={1}
          fontWeightVariant="extraBold"
          color={styledTheme.colors.neutral.neutral800}
        >
          Full stack
          <PrimaryGradientColoredText>
            &nbsp;software engineer&nbsp;
          </PrimaryGradientColoredText>
          and technical writer
        </Heading>
        <Space size={4} />
        <Paragraph color={styledTheme.colors.neutral.neutral600}>
          Hi, I am <b>Md. Janay Alam</b>, a software engineer based in Dhaka. I
          am experienced in web development MERN stack. I am proficient in
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

      <HeroSectionItem>
        {upMd ? (
          <StyledImage
            src={personalImage}
            alt="Personal photo"
            height={upLg ? 480 : upMd ? 380 : 240}
            width={upLg ? 480 : upMd ? 380 : 240}
          />
        ) : null}
      </HeroSectionItem>
    </HeroSectionContainer>
  );
};

export default HeroSection;
