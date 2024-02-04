import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { orderAndPrinterDesignStyle } from "../../../pages/custom_order/CustomOrderStyle";
import { placedOrderStyle } from "./PlacedOrderStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const TotalOrderComponent = () => {
  const navigation: any = useNavigation();
  return (
    <View style={placedOrderStyle.container}>
      {/* <Text>
        You are placing a custom order, So After placing an order, our one of
        agent will contact you soon.
      </Text> */}
      <Text style={placedOrderStyle.title}>Total Order</Text>
      <Divider style={placedOrderStyle.divider} />
      <LinearGradient
        colors={["#C83B62", "#7F35CD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={placedOrderStyle.button}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("customOrderConfirmation")}
          activeOpacity={0.7}
          style={placedOrderStyle.actionLayer}
        >
          <Text style={placedOrderStyle.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default TotalOrderComponent;
