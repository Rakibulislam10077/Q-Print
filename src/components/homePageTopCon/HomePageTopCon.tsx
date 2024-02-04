import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { homePageStyle } from "./HomePageHearSTyle";
import { CartBag } from "../../constants/allSvg/AllSvg";
import { Badge } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomePageTopCon = () => {
  const navigation: any = useNavigation();
  return (
    <View style={homePageStyle.container}>
      <View>
        <Image source={require("../../../assets/image/logo.png")} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyCart")}
        activeOpacity={0.7}
        style={homePageStyle.cart}
      >
        <CartBag />
        <Badge style={homePageStyle.badge}>3</Badge>
      </TouchableOpacity>
    </View>
  );
};

export default HomePageTopCon;
