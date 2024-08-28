"use client";

import { Container } from "@/components/atoms/grid";
import FeatureProjects from "@/components/organisms/feature-projects";
import HeroSection from "@/components/organisms/hero-section";
import React from "react";

const Homepage: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      <FeatureProjects />
    </Container>
  );
};

export default Homepage;
