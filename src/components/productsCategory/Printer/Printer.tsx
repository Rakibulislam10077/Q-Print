import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Color } from "../../../constants/GlobalStyle";
import Cart from "../../card/allCart/Cart";
import { printerStyle } from "./PrinterStyle";
const cartItem = [1, 2, 3, 4, 5];
const Printer = () => {
  return (
    <ScrollView style={printerStyle.container}>
      <View style={printerStyle.cartContainer}>
        {cartItem?.map((i, _) => {
          return <Cart key={_} />;
        })}
      </View>
    </ScrollView>
  );
};

export default Printer;
