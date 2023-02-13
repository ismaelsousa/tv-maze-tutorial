import styled from "styled-components/native";
import { Props } from "./types";

export const Container = styled.Text<Partial<Props>>`
  color: ${(props) => props.theme.colors[props.color || "onSecondary"]};
  font-size: ${(props) => props.size || 14}px;
`;
