import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import Cart from "../../card/allCart/Cart";
import { allCartStyle } from "../../card/allCart/AllCartStyle";

const cartItem = [1, 2, 3, 4, 5];
const All = () => {
  return (
    <View style={allCartStyle.container}>
      {/* <ScrollView> */}
      {/* {
      cartItem?.map((i, _) =>{
        return(
          <Cart key={_}/>
        )
      })
     } */}
      {/* </ScrollView> */}
    </View>
  );
};

export default All;
