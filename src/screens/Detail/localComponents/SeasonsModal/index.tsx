import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import Icon from "../../../../common/components/Icon";
import Spacer from "../../../../common/components/Spacer";
import Text from "../../../../common/components/Text";

import {
  ContainerCloseButton,
  Content,
  ContentCloseButton,
  List,
  Modal,
} from "./styles";
import { SeasonsModalProps } from "./types";

const SeasonsModal = ({
  seasons,
  selectedSeason,
  setSelectedSeason,
  setVisible,
  visible,
}: SeasonsModalProps) => {
  const { colors, spacing } = useTheme();

  return (
    <Modal transparent visible={visible}>
      <Content>
        <Spacer height={100} />
        <List>
          {seasons.map((season) => {
            const isTheSelectedSeason = selectedSeason?.id === season.id;
            return (
              <View key={season.id + "select season"}>
                <Spacer height={spacing.md} />
                <Text
                  onPress={() => {
                    setVisible(false);
                    setSelectedSeason(season);
                  }}
                  color={isTheSelectedSeason ? "onSecondary" : "caption"}
                  size={isTheSelectedSeason ? 24 : 20}
                >
                  Season {season.number}
                </Text>
              </View>
            );
          })}
        </List>
        <ContainerCloseButton>
          <ContentCloseButton onPress={() => setVisible(false)}>
            <Icon icon="close" color={colors.primary} />
          </ContentCloseButton>
        </ContainerCloseButton>
      </Content>
    </Modal>
  );
};

export default SeasonsModal;
