import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CircleButton() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="add"
          color="#000000"
          size={50}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 90,
    padding: 20,
    backgroundColor: "#ffffff",
    borderColor: "#ffb300",
    borderStyle: "solid",
    borderWidth: 5,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconContainer: {
    height: 80,
    width: 80,
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
});
