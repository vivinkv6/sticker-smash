import { View,Text,StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function IconButton2() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="save-alt" size={35} color="#ffffff"/>
      <Text style={styles.text}>Save</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    width:50,
    height:80,
    flexDirection:'column',
    justifyContent:'space-around'
  },
  text:{
    color:'#ffffff'
  }
})
