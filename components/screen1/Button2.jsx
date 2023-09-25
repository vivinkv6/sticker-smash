import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Button2() {
  return (
    <View>
      <Pressable onPress={() => alert("You Click Use this photo button")}>
        <Text style={styles.btn}> Use this Photo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    color: "#ffffff",
  },
});
