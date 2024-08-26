import Projects from "@/components/templates/projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Janay Alam",
};

const ProjectsPage: React.FC = () => {
  return <Projects />;
};

export default ProjectsPage;
