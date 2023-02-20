import React from "react";
import { FlatList, View } from "react-native";
import { useTheme } from "styled-components/native";
import Avatar from "../../common/components/Avatar";
import Container from "../../common/components/Container";
import Content from "../../common/components/Content";
import Input from "../../common/components/Input";
import NotFound from "../../common/components/NotFound";
import ShowCover from "../../common/components/ShowCover";
import Spacer from "../../common/components/Spacer";
import Text from "../../common/components/Text";
import useMyNavigation from "../../common/hooks/useMyNavigation";
import { flatListStyleSheet } from "../../common/utils/flatlist";
import useSearchController from "./search.controller";

import {
  ContainerRowButtons,
  ContentButtonFilter,
  RowButtonFilter,
  RowPerson,
  RowPersonName,
  TextButtonFilter,
} from "./styles";

const Search: React.FC = () => {
  const { navigate } = useMyNavigation();
  const { colors, spacing } = useTheme();
  const {
    loading,
    people,
    searchText,
    searchType,
    setSearchText,
    setSearchType,
    shows,
  } = useSearchController();

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <Text color="onSecondary" size={24}>
          Search
        </Text>
        <Spacer height={spacing.md} />
        <Input
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="done"
          loading={loading}
        />
        <Spacer height={spacing.md} />
        <ContainerRowButtons active={!!people.length || !!shows.length}>
          <RowButtonFilter
            active={searchType === "show"}
            onPress={() => setSearchType("show")}
          >
            <ContentButtonFilter>
              <Text
                color={searchType === "show" ? "onSecondary" : "caption"}
                size={16}
              >
                Series
              </Text>
            </ContentButtonFilter>
          </RowButtonFilter>
          <RowButtonFilter
            active={searchType === "people"}
            onPress={() => setSearchType("people")}
          >
            <ContentButtonFilter>
              <Text
                color={searchType === "people" ? "onSecondary" : "caption"}
                size={16}
              >
                People
              </Text>
            </ContentButtonFilter>
          </RowButtonFilter>
        </ContainerRowButtons>
        {searchType === "show" ? (
          <FlatList
            key="shows"
            data={shows}
            numColumns={2}
            columnWrapperStyle={[
              { paddingTop: spacing.md },
              flatListStyleSheet.columnWrapperStyle,
            ]}
            ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
            renderItem={({ item, index }) => (
              <ShowCover
                key={index + item.show.id + item.show.name}
                url={item.show.image?.medium}
                title={item.show.name}
                onPress={() => navigate("Details", { show: item.show })}
              />
            )}
            ListFooterComponent={() => <Spacer height={spacing.md} />}
            ListEmptyComponent={() => {
              if (!searchText.length) {
                return (
                  <View>
                    <Spacer height={spacing.lg} />
                    <NotFound
                      icon="noResults"
                      title="Search for a show or a person"
                    />
                  </View>
                );
              }
              return null;
            }}
          />
        ) : (
          <FlatList
            key={"people"}
            data={people}
            contentContainerStyle={{ paddingTop: spacing.md }}
            ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
            renderItem={({ item, index }) => (
              <RowPerson
                key={index + item.person.id}
                onPress={() => navigate("Person", { person: item.person })}
              >
                <Avatar
                  url={item.person.image?.medium}
                  name={item.person.name}
                />
                <Spacer width={spacing.md} />
                <RowPersonName>
                  <Text numberOfLines={1} color="onSecondary" size={16}>
                    {item.person.name}
                  </Text>
                  <Spacer height={spacing.sm} />
                  <Text color="caption">{item.person.country?.code}</Text>
                </RowPersonName>
              </RowPerson>
            )}
            ListFooterComponent={() => <Spacer height={spacing.md} />}
            ListEmptyComponent={() => {
              if (!searchText.length) {
                return (
                  <View>
                    <Spacer height={spacing.lg} />
                    <NotFound
                      icon="noResults"
                      title="Search for a show or a person"
                    />
                  </View>
                );
              }
              return null;
            }}
          />
        )}
      </Content>
    </Container>
  );
};

export default Search;
