import Resume from "@/components/templates/resume";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume | Janay Alam",
};

const ResumePage: React.FC = () => {
  return <Resume />;
};

export default ResumePage;
