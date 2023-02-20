import { Platform } from "react-native";
import styled from "styled-components/native";

const isIos = Platform.OS === "ios";

export const RowButtonOrder = styled.Pressable`
  flex-direction: row;
  align-items: center;
  border-radius: ${(props) => (isIos ? 0 : props.theme.borders.radius.small)}px;
`;

export const ContainerButtonOrder = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${(props) => (isIos ? 0 : props.theme.spacing.sm)}px;
  background-color: ${(props) =>
    isIos ? "transparent" : props.theme.colors.surface};
`;
