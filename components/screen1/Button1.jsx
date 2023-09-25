import { View, Text, StyleSheet } from "react-native";

export default function Button1() {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.buttonContainer}>
        <Text> Choose Photo</Text>
      </View>
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
    justifyContent:'center',
    alignItems:'center',
    padding: 15,
    borderWidth: 5,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#000000",
  },
});
