import { View, Text,StyleSheet } from "react-native";

export default function Button2() {
  return (
    <View>
      <Text style={styles.btn}> Use this Photo</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  btn:{
    color:'#ffffff'
  }
})