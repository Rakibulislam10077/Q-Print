import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { sliderItemStyle } from "./SliderItemStyle";
import Animated, { FadeIn } from "react-native-reanimated";
const SliderItem = ({ item }: any) => {
  return (
    <Animated.View style={sliderItemStyle.container}>
      <Animated.View
        entering={FadeIn.delay(50).duration(555).damping(20).springify()}
        style={{ flex: 1 }}
      >
        <Image
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
          source={item?.img}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default SliderItem;
