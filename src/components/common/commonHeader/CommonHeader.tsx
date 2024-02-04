import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { BackArrow, CartBag, CartIcon } from "../../../constants/allSvg/AllSvg";
import { commonHeaderStyle } from "./CommonHeaderStyle";
import { useNavigation } from "@react-navigation/native";

const CommonHeader = ({ title }: { title: any }) => {
  const navigation: any = useNavigation();
  return (
    <View style={commonHeaderStyle.container}>
      <View style={commonHeaderStyle.titleCon}>
        <TouchableOpacity
          style={commonHeaderStyle.backButton}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <BackArrow />
        </TouchableOpacity>
        <Text style={commonHeaderStyle.title}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MyCart")}
        activeOpacity={0.7}
        style={commonHeaderStyle.cartIcon}
      >
        <CartBag />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;
