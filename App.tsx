import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "styled-components/native";

import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";
import Routes from "./src/navigation";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
