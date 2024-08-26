import About from "@/components/templates/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Janay Alam",
};

const AboutPage: React.FC = () => {
  return <About />;
};

export default AboutPage;
