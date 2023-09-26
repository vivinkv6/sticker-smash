import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const icon = require("../../assets/gallery.png");
export default function Button1({ pickImage }) {
  return (
    <View style={styles.parentContainer}>
      <Pressable onPress={() =>pickImage()}>
        <View style={styles.buttonContainer}>
          <FontAwesome
            name="picture-o"
            size={18}
            color="#000000"
            style={styles.icon}
          />
          <Text style={styles.text}> Choose Photo</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: 340,
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "#fcc135",
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 15,
    borderWidth: 5,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#000000",
  },
  icon: {
    fontSize: 35,
    marginRight: -50,
  },
  text: {
    fontSize: 20,
  },
});
