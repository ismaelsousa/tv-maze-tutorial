import React, { useMemo } from "react";
import { Pressable, useWindowDimensions, View } from "react-native";
import { useTheme } from "styled-components/native";
import Icon from "../Icon";
import Spacer from "../Spacer";
import Text from "../Text";

import {
  Container,
  AbsoluteIcon,
  CenterIconAndImage,
  ShowCoverImage,
} from "./styles";
import { ShowCoverProps } from "./types";

const aspectRatio = 9 / 12.5;
const widthPercentage = 0.45;

const ShowCover = ({ onPress, title, url }: ShowCoverProps) => {
  /**
   * Hooks
   */
  const { width } = useWindowDimensions();
  const { spacing, colors } = useTheme();

  /**
   * Memos
   */
  const widthShowCover = useMemo(() => width * widthPercentage, [width]);

  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={title}
      accessibilityRole="button"
    >
      <Container width={widthShowCover}>
        <CenterIconAndImage>
          <ShowCoverImage
            hasBackground={!url}
            source={{ uri: url }}
            resizeMode="contain"
            style={{
              aspectRatio,
              width: widthShowCover,
            }}
          />
          {!url && (
            <AbsoluteIcon>
              <Icon icon="picture" size={40} color={colors.caption} />
            </AbsoluteIcon>
          )}
        </CenterIconAndImage>
        {!!title && (
          <>
            <Spacer height={spacing.sm} />
            <Text numberOfLines={1} color="caption">
              {title}
            </Text>
          </>
        )}
      </Container>
    </Pressable>
  );
};

export default React.memo(ShowCover);
