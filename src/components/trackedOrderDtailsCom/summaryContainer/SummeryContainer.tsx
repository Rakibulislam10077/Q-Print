import { View, Text } from "react-native";
import React from "react";
import { summerContainerStyle } from "./SummeryContainerStyle";
import Animated, { FadeInLeft } from "react-native-reanimated";

const SummeryContainer = () => {
  return (
    <Animated.View style={summerContainerStyle.container}>
      <Text style={summerContainerStyle.title}>Order Summery</Text>
      <View style={summerContainerStyle.infoCon}>
        <Text style={summerContainerStyle.leftText}>
          Subtotal <Text style={summerContainerStyle.smallText}>(3 item)</Text>
        </Text>
        <Text style={summerContainerStyle.price}>QR 3530.00</Text>
      </View>
      {/* ================== */}
      <View style={summerContainerStyle.infoCon}>
        <Text style={summerContainerStyle.leftText}>Delivery Fee</Text>
        <Text>QR 3530.00</Text>
      </View>
      {/* ================== */}
      <View style={summerContainerStyle.infoCon}>
        <Text style={summerContainerStyle.leftText}>
          Discount <Text style={summerContainerStyle.smallText}>(15%)</Text>
        </Text>
        <Text>QR 3530.00</Text>
      </View>
      {/* ================== */}
      <View style={summerContainerStyle.infoCon}>
        <Text style={summerContainerStyle.leftText}>4 Item, 3 Package</Text>
        <Text style={summerContainerStyle.leftText}>
          Total:
          <Text style={summerContainerStyle.totalPrice}> QR 345.00</Text>
        </Text>
      </View>
    </Animated.View>
  );
};

export default SummeryContainer;
