import { View, Text, FlatList } from "react-native";
import React from "react";
import { productContainerStyle } from "./ProductContainerStyle";
import OrderPlaceCart from "../../orderHistoryComponents/order_placed/orderPlaceCart/OrderPlaceCart";
import ProductCart from "./productCart/ProductCart";

const data = [1, 1, 1];
const ProductContainer = () => {
  return (
    <View style={productContainerStyle.container}>
      {data?.map((item, index) => {
        return <ProductCart key={index.toString()} />;
      })}
      <View style={productContainerStyle.quantityAndPriceCon}>
        <Text style={productContainerStyle.quantityText}>
          3 Item, 3 Package
        </Text>
        <Text style={productContainerStyle.totalPrice}>
          1250 <Text style={productContainerStyle.currency}>QAR</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductContainer;
