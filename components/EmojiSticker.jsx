import { View, Image, StyleSheet } from "react-native";
import { PanGestureHandler,TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

function EmojiSticker({ emoji }) {

  //variables and methods -> show emoji on image  
  const imageSize = 30;
  const scaleImage = useSharedValue(imageSize);




  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(scaleImage.value),
      width: withSpring(scaleImage.value),
    };
  });

    //variables methods -> drag emoji through on image
    const translateX=useSharedValue(0);
    const translateY=useSharedValue(0);

  const onDrag=useAnimatedGestureHandler({
    onStart:(event,context)=>{
        context.translateX= event.translateX.value
        context.translateY= event.translateY.value;
    },
    onActive:(event,context)=>{
      translateX.value=event.translationX + context.translateX;
      translateY.value=event.translationY + context.translateY;
    }
  })

  const containerStyle=useAnimatedStyle((event)=>{
    return{
      transform:[
        {
            translateX:translateX.value
        },
        {
            translateY:translateY.value
        }
      ]
    }
  })

  

  return (
    <>
      <View style={styles.container}>
       {/* <PanGestureHandler onGestureEvent={onDrag}> */}
        {/* <AnimatedView style={[containerStyle,styles.imageContainer]} > */}
            <View style={[styles.imageContainer]}>
          <TapGestureHandler>
            <AnimatedImage
              source={emoji}
              style={[
                animatedStyle,
                styles.image,
                { height: imageSize, width: imageSize },
              ]}
              onGestureEvent={onDoubleTap}
              numberOfTaps={2}
            />
          </TapGestureHandler>
          </View>
        {/* </AnimatedView> */}
        {/* </PanGestureHandler> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  imageContainer: {
    position: "absolute",
    top: 100,
    left: 10,
  },
  image: {
    zIndex: 1,
  },
});

export default EmojiSticker;
