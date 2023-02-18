import { Platform } from "react-native";
import styled from "styled-components/native";

export const Content = styled.TextInput`
  font-size: 14px;
  padding: ${(props) =>
    Platform.OS === "ios" ? props.theme.spacing.sm : props.theme.spacing.md}px;
  border-radius: ${(props) => props.theme.borders.radius.small}px;
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.caption};
  padding-left: ${Platform.OS === "ios" ? "35px" : "50px"};
  padding-right: ${Platform.OS === "ios" ? "35px" : "50px"};
`;

export const Container = styled.View`
  justify-content: center;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
  left: ${(props) =>
    Platform.OS === "ios" ? props.theme.spacing.sm : props.theme.spacing.md}px;
`;

export const AbsoluteLoading = styled.View`
  position: absolute;
  right: ${(props) =>
    Platform.OS === "ios" ? props.theme.spacing.sm : props.theme.spacing.md}px;
`;
