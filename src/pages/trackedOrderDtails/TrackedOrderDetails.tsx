import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { trackedOrderDetailsStyle } from "./TrackedOrderDtailsSytle";
import CustomerDetailsContainer from "../../components/trackedOrderDtailsCom/customerDetailsContainer/CustomerDetailsContainer";
import OrderStepContainer from "../../components/trackedOrderDtailsCom/orderStepContainer/OrderStepContainer";
import ProductContainer from "../../components/trackedOrderDtailsCom/productContainer/ProductContainer";
import SummeryContainer from "../../components/trackedOrderDtailsCom/summaryContainer/SummeryContainer";
import { LinearGradient } from "expo-linear-gradient";
import { orderStepContainerStyle } from "../../components/trackedOrderDtailsCom/orderStepContainer/OrderStepStyle";
import Animated, { FadeInRight } from "react-native-reanimated";

const TrackedOrderDetails = () => {
  const [isStepChange, setIsStepChange] = useState<number>(0);

  const handleButton = () => {
    setIsStepChange(1);
  };

  return (
    <View style={trackedOrderDetailsStyle.container}>
      {/* header section */}
      <CommonHeader title="Track Your Order" />
      {/* body section */}
      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          {/* customer details */}
          <CustomerDetailsContainer />
          {/* order step container */}
          <View>
            {isStepChange === 1 ? (
              <Animated.View
                entering={FadeInRight.delay(50).duration(200)}
                style={orderStepContainerStyle.container}
              >
                <Text>bla bla bla</Text>
              </Animated.View>
            ) : (
              <OrderStepContainer />
            )}
          </View>
          {/* product container */}
          <ProductContainer />
          {/* summary container */}
          <SummeryContainer />
        </View>
      </ScrollView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#C83B62", "#7F35CD"]}
        style={trackedOrderDetailsStyle.button}
      >
        <TouchableOpacity
          onPress={() => handleButton()}
          activeOpacity={0.7}
          style={trackedOrderDetailsStyle.buttonActionLayer}
        >
          <Text style={trackedOrderDetailsStyle.buttonText}>Cancel Order</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default TrackedOrderDetails;
