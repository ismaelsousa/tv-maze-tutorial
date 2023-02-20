import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components/native";

import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";
import FavoritesShows from "./src/common/contexts/FavoritesShows";
import Routes from "./src/navigation";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <FavoritesShows>
          <Routes />
        </FavoritesShows>
      </NavigationContainer>
    </ThemeProvider>
  );
}
