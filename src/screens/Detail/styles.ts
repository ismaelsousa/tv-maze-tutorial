import { Platform } from "react-native";
import styled from "styled-components/native";

const isIos = Platform.OS === "ios";

export const RowCover = styled.View`
  flex-direction: row;
`;

export const RowFavorite = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const RowButtonSeason = styled.Pressable`
  flex-direction: row;
  align-items: center;
  border-radius: ${(props) => (isIos ? props.theme.borders.radius.small : 0)}px;
`;

export const ContentButtonSeason = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${(props) => (!isIos ? props.theme.spacing.sm : 0)}px;
  background-color: ${(props) =>
    !isIos ? props.theme.colors.surface : "transparent"};
`;
