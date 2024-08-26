import Icon from "@ant-design/icons";
import React from "react";
import MenuIconSvg from "../svgs/MenuIconSvg";

interface IProps {
  height?: string;
  width?: string;
  fill?: string;
}

const MenuIcon: React.FC<IProps> = (props) => {
  const WrapperComponent = () => <MenuIconSvg {...props} />;
  return <Icon component={WrapperComponent} />;
};

export default MenuIcon;
