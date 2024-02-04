import { View, Text, Image } from "react-native";
import React from "react";
import { globalBrandStyle } from "./BrandInGlobalStyle";

const BrandInGlobalSearch = (item: any) => {
  return (
    <View style={globalBrandStyle.container}>
      <Image
        style={globalBrandStyle.img}
        source={require("../../../../assets/image/airpodmax.jpeg")}
      />
    </View>
  );
};

export default BrandInGlobalSearch;
