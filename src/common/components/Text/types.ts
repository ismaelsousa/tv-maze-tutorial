import { TextProps } from "react-native";
import { ColorPalette } from "styled-components/native";

export interface Props extends TextProps {
  color?: ColorPalette;
  size?: number;
}
