import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, View } from "react-native";
import { useTheme } from "styled-components/native";
import Avatar from "../../common/components/Avatar";
import BackButton from "../../common/components/BackButton";
import Container from "../../common/components/Container";
import Content from "../../common/components/Content";
import ShowCover from "../../common/components/ShowCover";
import Spacer from "../../common/components/Spacer";
import Text from "../../common/components/Text";
import useMyNavigation from "../../common/hooks/useMyNavigation";
import { flatListStyleSheet } from "../../common/utils/flatlist";
import usePersonController from "./person.controller";

import { Name } from "./styles";

const Person = () => {
  const {
    params: { person },
  } = useRoute<PersonRouteProp>();
  const { navigate, goBack } = useMyNavigation();

  const { spacing } = useTheme();

  const { castCredits } = usePersonController({ person });

  return (
    <Container>
      <Content>
        <Spacer height={spacing.md} />
        <BackButton onPress={goBack}></BackButton>
        <Spacer height={spacing.lg} />
        <FlatList
          key={"list-shows"}
          data={castCredits}
          columnWrapperStyle={flatListStyleSheet.columnWrapperStyle}
          numColumns={2}
          ItemSeparatorComponent={() => <Spacer height={spacing.md} />}
          renderItem={({ item }) => (
            <ShowCover
              key={item._embedded.show.id + item._embedded.show.id}
              url={item._embedded.show.image?.medium}
              title={item._embedded.show.name}
              onPress={() => navigate("Details", { show: item._embedded.show })}
            />
          )}
          ListHeaderComponent={() => {
            return (
              <>
                <Avatar
                  size="large"
                  url={person.image?.medium}
                  name={person.name}
                />
                <Spacer height={spacing.md} />
                <Name>{person.name}</Name>
                <Spacer height={spacing.lg} />
                {castCredits.length > 0 && (
                  <View>
                    <Text color="caption">Cast Credits</Text>
                    <Spacer height={spacing.md} />
                  </View>
                )}
              </>
            );
          }}
          ListFooterComponent={() => <Spacer height={spacing.lg} />}
        />
      </Content>
    </Container>
  );
};

export default Person;
