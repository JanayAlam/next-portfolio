import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import React from "react";

interface ISocialMediaItem {
  key: string;
  link?: string;
  icon: React.ReactNode;
}

const useSocialMediaList = (): ISocialMediaItem[] => {
  return [
    {
      key: "github",
      link: "https://www.github.com/JanayAlam",
      icon: <GithubFilled style={{ fontSize: "24px" }} />,
    },
    {
      key: "linkedin",
      link: "https://www.linkedin.com/in/janay-alam",
      icon: <LinkedinFilled style={{ fontSize: "24px" }} />,
    },
  ];
};

export default useSocialMediaList;
