import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View<{ width: number }>`
  width: ${(props) => props.width}px;
`;

export const ShowCoverImage = styled.Image<{ hasBackground: boolean }>`
  background-color: ${(props) =>
    props.hasBackground ? props.theme.colors.surface : "transparent"};
  border-radius: ${(props) =>
    Platform.OS === "ios" ? props.theme.borders.radius.small : 0}px;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
`;

export const CenterIconAndImage = styled.View`
  justify-content: center;
  align-items: center;
`;
