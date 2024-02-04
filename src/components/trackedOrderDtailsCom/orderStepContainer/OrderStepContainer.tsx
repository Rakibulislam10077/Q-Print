import { View, Text } from "react-native";
import React from "react";
import { orderStepContainerStyle } from "./OrderStepStyle";

const OrderStepContainer = () => {
  return (
    <View style={orderStepContainerStyle.container}>
      <Text>OrderStepContainer</Text>
    </View>
  );
};

export default OrderStepContainer;
