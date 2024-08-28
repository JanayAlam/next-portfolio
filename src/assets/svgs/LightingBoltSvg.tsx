"use client";

import React from "react";
import ISvgProps from "./props.type";

const LightingBoltSvg: React.FC<ISvgProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width ?? "32"}
      height={height ?? "32"}
      viewBox="0 0 32 32"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width ?? "32"}
        height={height ?? "32"}
        rx="16"
        fill={fill ?? "#F1F5F9"}
      />
      <path
        d="M16.6667 14.6667V10L10.6667 17.3333H15.3334L15.3334 22L21.3334 14.6667L16.6667 14.6667Z"
        stroke="url(#paint0_linear_1414_1360)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1414_1360"
          x1="21.3334"
          y1="22"
          x2="9.41617"
          y2="11.4069"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={fill ?? "#5A7CFF"} />
          <stop offset="1" stop-color={fill ?? "#5FC6FF"} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LightingBoltSvg;
