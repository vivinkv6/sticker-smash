import { View, Text, Modal, StyleSheet, Image, Pressable } from "react-native";
import { data } from "../emojis/list";
import { MaterialIcons } from "@expo/vector-icons";

export default function EmojiPicker({ isVisible,setIsVisible }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalTitle}>
          <Text style={styles.text}>Choose a Sticker</Text>
          <Pressable onPress={()=>setIsVisible(false)}>
            <MaterialIcons
              name="close"
              size={25}
              color="#000000"
              style={styles.icon}
            />
          </Pressable>
        </View>
        <View style={styles.modalContent}>
          {data.map((value) => {
            return (
              <Image
                source={value.src}
                key={value.id}
                accessibilityLabel="Emoji Not Found"
                style={styles.image}
              />
            );
          })}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width:'100%',
    height: "100%",
    position: "sticky",
    top: "72%",
  },
  modalTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "white",
  },
  modalContent: {
   
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gray",
    color: "white",
    padding:5,
  },
  image: {
    height: 70,
    width: 70,
    margin: 5,
  },
  text: {
    padding: 10,
    fontSize:20
  },
  icon: {
    padding: 10,
  },
});
