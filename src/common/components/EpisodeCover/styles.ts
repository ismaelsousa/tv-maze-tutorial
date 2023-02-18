import { Platform } from "react-native";
import styled from "styled-components/native";
import { EpisodeCoverProps } from "./types";

export const Container = styled.Image<Partial<EpisodeCoverProps>>`
  width: ${({ size }) =>
    size === "small" ? 100 : size === "medium" ? 200 : 300}px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) =>
    Platform.OS === "ios" ? theme.borders.radius.small : 0}px;
`;

export const AbsoluteIconEpisodeCover = styled.View`
  position: absolute;
  left: 40%;
  top: 40%;
`;
