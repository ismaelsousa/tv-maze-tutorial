import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";

import { useTheme } from "styled-components/native";
import Container from "../../common/components/Container";
import Content from "../../common/components/Content";
import Icon from "../../common/components/Icon";
import NotFound from "../../common/components/NotFound";
import ShowCover from "../../common/components/ShowCover";
import Spacer from "../../common/components/Spacer";
import Text from "../../common/components/Text";
import useMyNavigation from "../../common/hooks/useMyNavigation";
import { flatListStyleSheet } from "../../common/utils/flatlist";
import useFavoritesController from "./favorites.controller";

import { ContainerButtonOrder, RowButtonOrder } from "./styles";

const Favorites = () => {
  const { colors, spacing } = useTheme();
  const { navigate } = useMyNavigation();

  const { favoritesList, setSortedOrder, sortedOrder } =
    useFavoritesController();

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <Text color="onSecondary" size={24}>
          Favorites
        </Text>
        <Spacer height={spacing.md} />
        <RowButtonOrder
          onPress={() => {
            setSortedOrder((old) => (old === "asc" ? "desc" : "asc"));
          }}
        >
          <ContainerButtonOrder>
            <Text color="caption" size={18}>
              {sortedOrder === "asc" ? "A-Z" : "Z-A"}
            </Text>
            <Spacer height={spacing.md} />
            <Icon icon="menuDown" color={colors.caption} />
          </ContainerButtonOrder>
        </RowButtonOrder>
        <Spacer height={spacing.md} />
        <FlatList
          data={favoritesList}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          columnWrapperStyle={flatListStyleSheet.columnWrapperStyle}
          renderItem={({ item }) => (
            <ShowCover
              url={item.image?.medium}
              title={item.name}
              onPress={() => navigate("Details", { show: item })}
            />
          )}
          ListFooterComponent={() => <Spacer height={spacing.md} />}
          ListEmptyComponent={() => (
            <View>
              <Spacer height={spacing.lg} />
              <NotFound icon="inbox" title="You don't have favorite yet" />
            </View>
          )}
        />
      </Content>
    </Container>
  );
};

export default Favorites;
