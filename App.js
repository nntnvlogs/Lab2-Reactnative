import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/components/LoginScreen";
import Screen2b from "./src/components/Screen2b";
import ScreenTiki from "./src/components/ScreenTiki";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      {/* <Screen2b /> */}
      <ScreenTiki />
    </View>
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
