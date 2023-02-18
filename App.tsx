import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
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
          <Spacer height={30} />
          <Text size={30} color="onSecondary">
            1 Meu componente de text
          </Text>
          <Icon icon="home" color="red" size={40}></Icon>
          <Spacer height={30} />
          <Text size={30} color="onSecondary">
            2 Meu componente de text
          </Text>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
