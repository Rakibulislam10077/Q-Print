import { View, Text, Image } from "react-native";
import React from "react";
import { productCartStyle } from "./ProductCartStyle";

const ProductCart = () => {
  return (
    <View style={productCartStyle.container}>
      <View style={productCartStyle.subContainer}>
        <View style={productCartStyle.imgCon}>
          <Image source={{}} />
        </View>
        <View style={productCartStyle.textContainer}>
          <Text style={productCartStyle.productNameAndSpec}>
            HP DeskJet Ink Advantage 4175 All-in-One Printer
          </Text>
          <View style={productCartStyle.currencyAndPriceCon}>
            <Text style={productCartStyle.price}>
              250 <Text style={productCartStyle.currency}>QAR</Text>
            </Text>
            <Text style={productCartStyle.verticalDivider}>|</Text>
            <Text>X 1</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCart;
