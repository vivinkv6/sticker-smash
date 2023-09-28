import { View, StyleSheet, Pressable } from "react-native";
import CircleButton from "./CircleButton";
import IconButton1 from "./IconButton1";
import IconButton2 from "./IconButton2";

export default function AddIconButton({ setIsVisible,refresh,save }) {
  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={()=>refresh()}>
        <IconButton1 />
        </Pressable>
      </View>
      <View>
        <CircleButton setIsVisible={setIsVisible} />
      </View>
      <View>
        <Pressable onPress={()=>save()}>
        <IconButton2 />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 20,
  },
});
