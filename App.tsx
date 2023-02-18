import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Spacer from "./src/common/components/Spacer";
import Text from "./src/common/components/Text";
import { defaultTheme } from "./src/common/constants/styles/theme/defaultTheme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <View style={styles.container}>
        <Text size={30} color="secondary">
          1 Meu componente de text
        </Text>
        <Spacer height={30} />
        <Text size={30} color="secondary">
          2 Meu componente de text
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
