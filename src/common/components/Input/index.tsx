import React from "react";
import { ActivityIndicator, Platform } from "react-native";
import { useTheme } from "styled-components/native";
import Icon from "../Icon";

import { Container, AbsoluteIcon, AbsoluteLoading, Content } from "./styles";
import { InputProps } from "./types";

const Input = ({ loading, ...props }: InputProps) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Content
        placeholder="Search"
        placeholderTextColor={colors.caption}
        {...props}
      />
      {loading && (
        <AbsoluteLoading>
          <ActivityIndicator
            color={colors.onSecondary}
            size={Platform.OS === "ios" ? "small" : "large"}
          />
        </AbsoluteLoading>
      )}
      <AbsoluteIcon>
        <Icon icon="magnify" color={colors.caption} />
      </AbsoluteIcon>
    </Container>
  );
};

export default Input;
