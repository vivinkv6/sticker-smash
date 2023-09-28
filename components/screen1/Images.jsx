import { View, Image,StyleSheet } from "react-native";
import EmojiSticker from "../EmojiSticker";

const image=require('../../assets/images/background-image.png');

export default function Images({imageSelect,emoji}) {

  const checkImage=imageSelect ? {uri:imageSelect}:image;
  console.log(emoji);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      {emoji && <EmojiSticker emoji={emoji}/>}
    <Image source={checkImage} style={styles.image} accessibilityLabel="Image Not Found" />
    </View>
    </View>
  );
}


const styles=StyleSheet.create({
  container:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:400,
  },
  imageContainer:{
    padding:20,
  },
  image:{
    height:400,
    width:270,
    borderRadius:10
  }
})