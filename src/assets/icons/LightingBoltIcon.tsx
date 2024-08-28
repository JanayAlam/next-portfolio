"use client";

import Icon from "@ant-design/icons";
import React from "react";
import LightingBoltSvg from "../svgs/LightingBoltSvg";
import IIconProps from "./props.type";

const LightingBoltIcon: React.FC<IIconProps> = (props) => {
  const WrapperComponent = () => <LightingBoltSvg {...props} />;
  return <Icon component={WrapperComponent} />;
};

export default LightingBoltIcon;
