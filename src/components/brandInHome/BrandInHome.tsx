import { View, Text, FlatList } from "react-native";
import React from "react";
import Brand from "./Brand";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";

const logodata = [
  {
    id: 1,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 2,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 3,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 4,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 5,
    img: require("../../../assets/image/adidas.png"),
  },
];
const BrandInHome = () => {
  return (
    <View>
      <Animated.FlatList
        entering={FadeInRight.delay(50).duration(245)}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={logodata}
        renderItem={({ item }) => <Brand item={item} />}
      />
    </View>
  );
};

export default BrandInHome;
