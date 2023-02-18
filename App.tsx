import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Avatar from "./src/common/components/Avatar";
import BackButton from "./src/common/components/BackButton";
import Container from "./src/common/components/Container";
import Content from "./src/common/components/Content";
import EpisodeCard from "./src/common/components/EpisodeCard";
import EpisodeCover from "./src/common/components/EpisodeCover";
import Icon from "./src/common/components/Icon";
import Input from "./src/common/components/Input";
import NotFound from "./src/common/components/NotFound";
import ShowCover from "./src/common/components/ShowCover";
import Spacer from "./src/common/components/Spacer";
import Text from "./src/common/components/Text";
import { episodeMocked } from "./src/common/constants/mocks/episode.mock";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
