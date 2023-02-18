import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Avatar from "./src/common/components/Avatar";
import BackButton from "./src/common/components/BackButton";
import Container from "./src/common/components/Container";
import Content from "./src/common/components/Content";
import Icon from "./src/common/components/Icon";
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
          <Text size={30} color="onSecondary">
            1 Meu componente de text
          </Text>
          <Icon icon="home" color="red" size={40}></Icon>
          <Spacer height={30} />
          <Text size={30} color="onSecondary">
            2 Meu componente de text
          </Text>
          <Avatar />
          <Avatar
            size="large"
            url="https://br.web.img3.acsta.net/pictures/18/08/01/20/13/3535250.jpg"
          />
        </Content>
      </Container>
    </ThemeProvider>
  );
}
