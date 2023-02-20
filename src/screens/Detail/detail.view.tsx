import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import { useTheme } from "styled-components/native";
import BackButton from "../../common/components/BackButton";
import Container from "../../common/components/Container";
import Content from "../../common/components/Content";
import EpisodeCard from "../../common/components/EpisodeCard";
import Icon from "../../common/components/Icon";
import ShowCover from "../../common/components/ShowCover";
import Spacer from "../../common/components/Spacer";
import Text from "../../common/components/Text";
import useDetailController from "./detail.controller";
import {
  RowCover,
  ContentButtonSeason,
  RowButtonSeason,
  RowFavorite,
} from "./styles";

const Detail: React.FC = () => {
  /**
   * Navigation
   */
  const { goBack } = useNavigation();
  const {
    params: { show },
  } = useRoute<DetailRouteProp>();

  /**
   * States
   */
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { colors, spacing } = useTheme();
  const { width } = useWindowDimensions();

  const {
    episodes,
    seasons,
    formattedDate,
    genres,
    moreSummary,
    schedule,
    selectedSeason,
    summaryWithoutHtml,
    toggleMoreSummary,
  } = useDetailController({ show });

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <BackButton onPress={goBack} />
        <Spacer height={spacing.md} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={episodes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <EpisodeCard episode={item} />}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          ListHeaderComponent={() => {
            const isFavorite = false;

            return (
              <View>
                <RowCover>
                  <ShowCover url={show.image?.medium} />
                  <Spacer width={spacing.md} />
                  <View style={{ maxWidth: width * 0.4 }}>
                    <Text size={24}>{show.name}</Text>
                    <Spacer height={spacing.sm} />
                    <RowFavorite
                      onPress={() => {
                        if (isFavorite) {
                          //TODO: remove from favorite
                        }
                      }}
                    >
                      <Text size={16} color="caption">
                        {show.rating.average}
                      </Text>
                      <Spacer width={spacing.sm} />
                      <Icon
                        icon={isFavorite ? "star" : "starOutline"}
                        color="yellow"
                      />
                    </RowFavorite>
                    <Spacer height={spacing.sm} />
                    <Text color="caption">{schedule}</Text>
                    <Spacer height={spacing.lg} />
                    <Text color="caption">{formattedDate}</Text>
                    <Spacer height={spacing.sm} />
                    <Text size={12} color="caption">
                      {genres}
                    </Text>
                  </View>
                </RowCover>
                <Spacer height={spacing.md} />
                <Text>
                  {summaryWithoutHtml.slice(0, moreSummary ? undefined : 200)}
                  {summaryWithoutHtml.length >= 200 && (
                    <Text onPress={toggleMoreSummary} color="caption">
                      {moreSummary ? " Show less" : " Show more"}
                    </Text>
                  )}
                </Text>
              </View>
            );
          }}
        />
      </Content>
    </Container>
  );
};

export default Detail;
