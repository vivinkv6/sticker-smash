import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Images from "./components/screen1/Images";
import Button1 from "./components/screen1/Button1";
import Button2 from "./components/screen1/Button2";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function App() {
  const [imageSelect, setImageSelect] = useState(undefined);

  //function for pick an image from gallery and display it on image component

  const pickImage=async()=> {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageSelect(result.assets[0].uri);
    } else {
      alert("Image Not Selected");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sticker Smash</Text>
      <Images imageSelect={imageSelect} />
      <View>
        <Button1 pickImage={pickImage} />
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
    textTransform: "uppercase",
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
