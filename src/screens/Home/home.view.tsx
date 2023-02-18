import React from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
  SafeAreaView,
} from "react-native";
import { useTheme } from "styled-components/native";
import Container from "../../common/components/Container";
import ShowCover from "../../common/components/ShowCover";
import Spacer from "../../common/components/Spacer";
import useMyNavigation from "../../common/hooks/useMyNavigation";
import { flatListStyleSheet } from "../../common/utils/flatlist";
import useHomeController from "./home.controller";

import { Logo } from "./styles";

const Home = () => {
  /**
   * Navigation
   */
  const { navigate } = useMyNavigation();
  const { colors, spacing } = useTheme();
  const { loading, shows, currentPage, isRefreshing, loadShows } =
    useHomeController();

  return (
    <Container>
      <SafeAreaView>
        <FlatList
          data={shows}
          numColumns={2}
          columnWrapperStyle={flatListStyleSheet.columnWrapperStyle}
          style={{ paddingHorizontal: spacing.sm }}
          ListHeaderComponent={() => (
            <View>
              <Logo />
            </View>
          )}
          renderItem={({ item, index }) => (
            <ShowCover
              key={`${item.id + index + item.name}`}
              url={item.image?.medium}
              title={item.name}
              onPress={() => {
                navigate("Details", { show: item });
              }}
            />
          )}
          ItemSeparatorComponent={() => <Spacer height={spacing.sm} />}
          ListFooterComponent={() => {
            return (
              <View>
                {loading && (
                  <>
                    <Spacer height={spacing.lg} />
                    <ActivityIndicator
                      size={"small"}
                      color={colors.onSecondary}
                    />
                  </>
                )}
                <Spacer height={spacing.sm} />
              </View>
            );
          }}
          refreshControl={
            <RefreshControl
              enabled={!isRefreshing}
              tintColor={colors.onSecondary}
              colors={[colors.onSecondary]}
              refreshing={isRefreshing}
              onRefresh={() => loadShows(0, true)}
            />
          }
          onEndReached={() => {
            if (!loading) {
              loadShows(currentPage);
            }
          }}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Home;
