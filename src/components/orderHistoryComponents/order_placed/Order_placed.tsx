import { View, Text, FlatList } from "react-native";
import React from "react";
import { orderPlacedStyle } from "./Order_placedStyle";
import OrderPlaceCart from "./orderPlaceCart/OrderPlaceCart";

const Order_placed = (index: any) => {
  return (
    <View style={orderPlacedStyle.container}>
      <FlatList
        data={[1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3]}
        renderItem={({}) => {
          return <OrderPlaceCart />;
        }}
      />
    </View>
  );
};

export default Order_placed;
