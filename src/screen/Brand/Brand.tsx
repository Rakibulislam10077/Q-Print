import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";
import { brandStyle } from "./BrandStyle";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import TopBrand from "./topBrand/TopBrand";
import AllBrand from "./allBrand/AllBrand";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

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

const Brand = () => {
  return (
    <View style={brandStyle.container}>
      <CommonHeader title="Brand" />
      {/* body container */}
      <ScrollView>
        <View style={brandStyle.bodyContainer}>
          <Text style={brandStyle.topBrandText}>Top Brand</Text>
          {/* top brand section  */}
          <Animated.FlatList
            entering={FadeInRight.delay(50).duration(500)}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={logodata}
            renderItem={({ item }) => <TopBrand item={item} />}
          />
          {/* all brand container */}
          <View style={brandStyle.allBrandContainer}>
            <Text style={brandStyle.allBrandText}>All Brand</Text>
            <Animated.View
              entering={FadeInDown.delay(50)
                .duration(500)
                .damping(20)
                .springify()}
              style={brandStyle.allCartContainer}
            >
              {logodata?.map((item) => {
                return <AllBrand key={item?.id} item={item} />;
              })}
            </Animated.View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

export default Brand;
