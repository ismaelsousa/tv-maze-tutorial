import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, Platform, useWindowDimensions, View } from "react-native";
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
import SeasonsModal from "./localComponents/SeasonsModal";
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
    setSelectedSeason,
    addFavoriteShow,
    favoritesShows,
    removeFavoriteShow,
  } = useDetailController({ show });

  return (
    <>
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
              const isFavorite = favoritesShows[show.id];
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
                            removeFavoriteShow(show.id);
                          } else {
                            addFavoriteShow(show);
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
                  {!!selectedSeason && (
                    <View>
                      <Spacer height={spacing.lg} />
                      <RowButtonSeason onPress={() => setIsModalVisible(true)}>
                        <ContentButtonSeason>
                          <Text color="caption">
                            Season {selectedSeason.number}
                          </Text>
                          <Spacer width={spacing.sm} />
                          <Icon icon="menuDown" color={colors.caption} />
                        </ContentButtonSeason>
                      </RowButtonSeason>
                      <Spacer
                        height={Platform.OS === "ios" ? spacing.sm : spacing.md}
                      />
                    </View>
                  )}
                </View>
              );
            }}
          />
        </Content>
      </Container>

      <SeasonsModal
        visible={isModalVisible}
        seasons={seasons}
        setVisible={setIsModalVisible}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
      />
    </>
  );
};

export default Detail;
