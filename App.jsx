import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Images from "./components/screen1/Images";
import Button1 from "./components/screen1/Button1";
import Button2 from "./components/screen1/Button2";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sticker Smash</Text>

      <Images />

      <View>
        <Button1 />
      </View>
      <View>
        <Button2 />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#171716",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    textTransform:'uppercase',
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    textShadowColor: "#64cdd1",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 10,
    letterSpacing: 2,
  },
});
