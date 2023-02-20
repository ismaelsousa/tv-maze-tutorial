import { Platform } from "react-native";
import styled from "styled-components/native";
import Text from "../../common/components/Text";

const isIos = Platform.OS === "ios";

type Active = { active: boolean };

export const ContainerRowButtons = styled.View<Active>`
  opacity: ${(props) => (props.active ? 1 : 0.0)};
  flex-direction: row;
  justify-content: space-between;
`;

export const RowButtonFilter = styled.Pressable<Active>`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) =>
    props.active ? props.theme.colors.brand : props.theme.colors.caption};
  flex: 1;
  justify-content: center;
`;

export const ContentButtonFilter = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => (isIos ? 0 : props.theme.spacing.sm)}px;
  padding-bottom: ${(props) => (isIos ? 0 : props.theme.spacing.sm)}px;
`;
export const TextButtonFilter = styled(Text)``;

export const RowPerson = styled.Pressable`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const RowPersonName = styled.View`
  flex: 1;
`;
