import React from "react";
import { IconProps } from "./types";

import { Container } from "./styles";
import Icons from "../../constants/icons";

const Icon = ({
  icon,
  size = 20,
  color,
  style,
  ...rest
}: Omit<IconProps, "source">) => {
  return (
    <Container
      size={size}
      source={Icons[icon]}
      style={[{ tintColor: color }, style]}
      resizeMode="contain"
      {...rest}
    />
  );
};

export default Icon;
