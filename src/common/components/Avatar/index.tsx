import React from "react";
import { useTheme } from "styled-components/native";

import { Container, Content, AbsoluteIcon } from "./styles";
import { AvatarProps } from "./types";

const Avatar = ({ name, size, url }: AvatarProps) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Content
        source={{ uri: url }}
        size={size}
        resizeMode="cover"
        accessibilityRole="image"
        accessibilityLabel={name}
      ></Content>
      {!url && <AbsoluteIcon icon="person" size={20} color={colors.caption} />}
    </Container>
  );
};

export default Avatar;
