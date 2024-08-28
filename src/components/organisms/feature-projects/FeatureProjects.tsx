"use client";

import { styledTheme } from "@/assets/styles/styled-theme";
import { TextButton } from "@/components/atoms/button";
import { FlexContainer } from "@/components/atoms/grid";
import SectionContainer from "@/components/atoms/grid/SectionContainer";
import { Heading, Paragraph } from "@/components/atoms/typography";
import { useBreakPoints } from "@/hooks/useBreakPoints";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const getAllProjectsButton = (margin?: string, clickHandler?: () => void) => {
  return (
    <div style={{ margin }}>
      <TextButton
        icon={<ArrowRightOutlined />}
        iconPosition="end"
        onClick={clickHandler}
      >
        See all projects
      </TextButton>
    </div>
  );
};

const FeatureProjects: React.FC = () => {
  const { upSm } = useBreakPoints();

  return (
    <SectionContainer>
      <FlexContainer justifyContent="space-between">
        <Heading level={2} fontWeightVariant="extraBold" margin="0 0 0.5rem 0">
          Recent case studies
        </Heading>
        {upSm ? getAllProjectsButton() : null}
      </FlexContainer>
      <Paragraph level={1} color={styledTheme.colors.neutral.neutral600}>
        Over the past two years, I have worked on a large number of projects
        across a range of platforms.
      </Paragraph>
      {upSm ? null : getAllProjectsButton("1rem 0")}
    </SectionContainer>
  );
};

export default FeatureProjects;
