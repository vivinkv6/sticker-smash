import { View,StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CircleButton from "./CircleButton";
import IconButton1 from "./IconButton1";
import IconButton2 from "./IconButton2";

export default function AddIconButton({setIsVisible}) {
  return (
    <View style={styles.container}>
      <View>
        <IconButton1 />
      </View>
      <View>
        <CircleButton setIsVisible={setIsVisible}/>
      </View>
      <View>
        <IconButton2 />
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingLeft:20,
  }
})
