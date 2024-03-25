/**
 * TrackedOrderDetails Component:
 * This component represents the screen for tracking an order's details.
 * It includes sections for customer details, order steps, product information,
 * and a summary of the order. Users can also cancel the order.
 *
 * State:
 * - isStepChange: A state variable to control the change in order steps.
 *
 * Navigation:
 * None
 *
 * Usage Example:
 * ```jsx
 * import TrackedOrderDetails from './TrackedOrderDetails';
 * <TrackedOrderDetails />
 * ```
 */

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { trackedOrderDetailsStyle } from './TrackedOrderDtailsSytle';
import CustomerDetailsContainer from '../../components/trackedOrderDtailsCom/customerDetailsContainer/CustomerDetailsContainer';
import OrderStepContainer from '../../components/trackedOrderDtailsCom/orderStepContainer/OrderStepContainer';
import ProductContainer from '../../components/trackedOrderDtailsCom/productContainer/ProductContainer';
import SummeryContainer from '../../components/trackedOrderDtailsCom/summaryContainer/SummeryContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { orderStepContainerStyle } from '../../components/trackedOrderDtailsCom/orderStepContainer/OrderStepStyle';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { IOrder } from '../../types/interfaces/orderHistory.interface';

const TrackedOrderDetails = (props: IOrder) => {
  //@ts-ignore
  const item = props?.route?.params;
  const [isStepChange, setIsStepChange] = useState<number>(0);

  console.log(JSON.stringify(item, null, 2), 'tracked');

  const handleButton = () => {
    setIsStepChange(1);
  };

  return (
    <Animated.View style={trackedOrderDetailsStyle.container}>
      {/* ======================== */}
      {/* header section */}
      {/* ======================== */}
      <CommonHeader title="Track Your Order" />
      {/* ======================== */}
      {/* body section */}
      {/* ======================== */}
      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          {/* ======================== */}
          {/* customer details */}
          {/* ======================== */}
          <CustomerDetailsContainer data={item} />
          {/* ======================== */}
          {/* order step container */}
          {/* ======================== */}
          <OrderStepContainer data={item} />
          {/* ======================== */}
          {/* product container */}
          {/* ======================== */}
          <ProductContainer data={item} />
          {/* ======================== */}
          {/* summary container */}
          {/* ======================== */}
          <SummeryContainer />
        </View>
      </ScrollView>
      {/* ======================== */}
      {/* linear button  */}
      {/* ======================== */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#C83B62', '#7F35CD']}
        style={trackedOrderDetailsStyle.button}
      >
        {/* =========================== */}
        {/* action layer  */}
        {/* =========================== */}
        <TouchableOpacity
          onPress={() => handleButton()}
          activeOpacity={0.7}
          style={trackedOrderDetailsStyle.buttonActionLayer}
        >
          {/* ===================== */}
          {/* button text */}
          {/* ===================== */}
          <Text style={trackedOrderDetailsStyle.buttonText}>Cancel Order</Text>
        </TouchableOpacity>
      </LinearGradient>
      {/* ======================= */}
      {/* expo status bar */}
      {/* ======================= */}
      <StatusBar style="dark" />
    </Animated.View>
  );
};

export default TrackedOrderDetails;
