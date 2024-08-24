"use client";

import { UserOutlined } from "@ant-design/icons";
import { Avatar as AntdAvatar, AvatarProps } from "antd";
import React from "react";

interface IProps extends AvatarProps {
  src?: string;
  fallBack?: string;
}

const Avatar: React.FC<IProps> = ({ src, fallBack, ...rest }) => {
  const defaultProps = {
    icon: !src && !fallBack ? <UserOutlined /> : undefined,
    src,
  };

  return <AntdAvatar {...defaultProps} {...rest} />;
};

export default Avatar;
