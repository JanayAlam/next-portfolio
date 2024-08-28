import Icon from "@ant-design/icons";
import React from "react";
import MenuIconSvg from "../svgs/MenuIconSvg";
import IIconProps from "./props.type";

const MenuIcon: React.FC<IIconProps> = (props) => {
  const WrapperComponent = () => <MenuIconSvg {...props} />;
  return <Icon component={WrapperComponent} />;
};

export default MenuIcon;
