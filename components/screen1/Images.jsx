import { View, Image,StyleSheet } from "react-native";

const image=require('../../assets/images/background-image.png');

export default function Images() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
    <Image source={image} style={styles.image} accessibilityLabel="Image Not Found" />
    </View>
    </View>
  );
}


const styles=StyleSheet.create({
  container:{
    width:300,
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