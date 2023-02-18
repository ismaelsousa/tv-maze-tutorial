import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Avatar from "./src/common/components/Avatar";
import BackButton from "./src/common/components/BackButton";
import Container from "./src/common/components/Container";
import Content from "./src/common/components/Content";
import Icon from "./src/common/components/Icon";
import Input from "./src/common/components/Input";
import NotFound from "./src/common/components/NotFound";
import ShowCover from "./src/common/components/ShowCover";
import Spacer from "./src/common/components/Spacer";
import Text from "./src/common/components/Text";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Content>
          <Spacer height={20} />
          <BackButton
            onPress={() => {
              console.log("clicou no botão in");
            }}
          />
          <Spacer height={20} />
          <Input loading />
          <Spacer height={20} />
          <Text numberOfLines={1} size={30} color="onSecondary">
            2 Meu componente de text 2 Meu componente de text2 Meu componente de
            text2 Meu componente de text
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ShowCover
              onPress={() => {}}
              url="https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg"
              title="The Flash"
            />
            <ShowCover url="https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg" />
          </View>
          <Spacer height={20} />
          <Avatar
            size="small"
            url="https://br.web.img3.acsta.net/pictures/18/08/01/20/13/3535250.jpg"
          />
          <NotFound />
        </Content>
      </Container>
    </ThemeProvider>
  );
}
