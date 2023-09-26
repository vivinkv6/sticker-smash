import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Button2({setShowAppOption}) {
  return (
    <View>
      <Pressable onPress={() => {
        console.log("Button Clicked");
        setShowAppOption(true)}}>
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
