import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { topBrandStyle } from "./TopBrandStyle";
import { useNavigation } from "@react-navigation/native";

const TopBrand = (item:any) => {
  const navigation:any = useNavigation();
  return (
    <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('BrandDetails', {...item})} style={topBrandStyle.container}>
      <View style={topBrandStyle.logoCon}>
        <Image style={topBrandStyle.logo} source={item?.item?.img} />
      </View>
      <Text style={topBrandStyle.brandName}>canon</Text>
    </TouchableOpacity>
  );
};

export default TopBrand;
