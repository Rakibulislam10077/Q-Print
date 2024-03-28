import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { sliderItemStyle } from './SliderItemStyle';
import Animated, { FadeIn } from 'react-native-reanimated';
const SliderItem = ({ item }: any) => {
  console.log(item);

  return (
    <Animated.View style={sliderItemStyle.container}>
      <Animated.View
        entering={FadeIn.delay(50).duration(555).damping(20).springify()}
        style={{ flex: 1, flexDirection: 'row' }}
      >
        <View style={sliderItemStyle.insideCon}>
          <Text style={sliderItemStyle.title}>{item?.title}</Text>
          <Text style={sliderItemStyle.description}>{item?.description}</Text>
          <TouchableOpacity activeOpacity={0.7} style={sliderItemStyle.button}>
            <Text style={sliderItemStyle.buttonText}>{item?.buttonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={sliderItemStyle.insideCon}>
          <Image source={{ uri: item?.productPhoto }} />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default SliderItem;
