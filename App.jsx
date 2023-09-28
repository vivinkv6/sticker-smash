import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import Images from "./components/screen1/Images";
import Button1 from "./components/screen1/Button1";
import Button2 from "./components/screen1/Button2";
import * as ImagePicker from "expo-image-picker";
import {useRef, useState } from "react";
import AddIconButton from "./components/showAppOptions/AddIconButton";
import EmojiPicker from "./components/modal/EmojiPicker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import DomToImage from "dom-to-image";

export default function App() {
  const [imageSelect, setImageSelect] = useState(undefined);
  const [showAppOption, setShowAppOption] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [emoji, setEmoji] = useState(undefined);

  //refresh or clear the emoji from the image
  const refresh = () => {
    setEmoji(undefined);
  };

  //save the image to mobile
  const [status, permission] = MediaLibrary.usePermissions();

  if (status == null) {
    permission();
  }

  const imageRef = useRef();

  // save image in gallery

  const save = async () => {
    if (Platform.OS !== "web") {
      try {
        const imageUri = await captureRef(imageRef, {
          height: 400,
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(imageUri);

        if (imageUri) {
          alert("Saved");
        } else {
          alert("Failed to Save");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const imageUri = await DomToImage.toJpeg(imageRef, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement("a");
        link.download = "sticker-smash.jpeg";
        link.href = imageUri;
        link.click();
      } catch (error) {
        console.log(error);
      }
    }
  };

  //function for pick an image from gallery and display it on image component

  const pickImage = async () => {
    setShowAppOption(false);
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setShowAppOption(true);
      setImageSelect(result.assets[0].uri);
    } else {
      alert("Image Not Selected");
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.text}>Sticker Smash</Text>
      <View ref={imageRef} collapsable={false} style={styles.childContainer}>
        <Images imageSelect={imageSelect} emoji={emoji} />
      </View>
      {showAppOption ? (
        <AddIconButton
          setIsVisible={setIsVisible}
          refresh={refresh}
          save={save}
        />
      ) : (
        <>
          <View>
            <Button1 pickImage={pickImage} />
          </View>
          <View>
            <Button2 setShowAppOption={setShowAppOption} />
          </View>
        </>
      )}
      <EmojiPicker
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        setEmoji={setEmoji}
      />

      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
  childContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
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
