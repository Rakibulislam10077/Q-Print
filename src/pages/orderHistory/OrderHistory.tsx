/**
 * OrderHistory Component:
 * This component represents the screen for viewing order history.
 * It includes sections for displaying various stages of the order, such as order placed,
 * packaging, shipping, and order review.
 *
 * State:
 * - activeTab: Represents the currently active tab.
 * - activeTabIndex: Represents the index of the active tab.
 *
 * Navigation:
 * None
 *
 * Usage Example:
 * ```jsx
 * import OrderHistory from './OrderHistory';
 * <OrderHistory />
 * ```
 */

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { orderHistoryStyle } from './OrderHistoryStyle';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import { logFunc } from '../../utils/log';
import { Color } from '../../constants/GlobalStyle';
import Order_placed from '../../components/orderHistoryComponents/order_placed/Order_placed';
import { navigation } from '../../constants/orderHis/orderHCustomNav';
import Packaging from '../../components/orderHistoryComponents/Packeaging/Packaging';
import Shipping from '../../components/orderHistoryComponents/shipping/Shipping';
import OrderReview from '../../components/orderHistoryComponents/ordeReview/OrderReview';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState<null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  // Function to toggle between tabs
  const toggleTab = (activeTab: any) => {
    setActiveTab(activeTab);
    setActiveTabIndex(activeTab?.id || 0);
  };

  return (
    <View style={orderHistoryStyle.container}>
      {/* ======================== */}
      {/* Header Container */}
      {/* ======================== */}
      <CommonHeader title="Order History" />
      {/* ======================== */}
      {/* Body Container */}
      {/* ======================== */}
      <View style={orderHistoryStyle.bodyContainer}>
        {/* ======================== */}
        {/* Navigation Container */}
        {/* ======================== */}
        <View style={orderHistoryStyle.navCon}>
          <Animated.FlatList
            data={navigation}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => toggleTab(item)}
                style={
                  item?.id === activeTabIndex
                    ? [
                        orderHistoryStyle.navItem,
                        {
                          borderBottomColor: Color.C_main,
                          borderBottomWidth: 1,
                        },
                      ]
                    : [orderHistoryStyle.navItem]
                }
              >
                <Text>{item?.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* ======================== */}
        {/* Render Content Based on Active Tab */}
        {/* ======================== */}
        {activeTabIndex === 0 ? (
          <Order_placed index={activeTabIndex} />
        ) : activeTabIndex === 1 ? (
          <Packaging />
        ) : activeTabIndex === 2 ? (
          <Shipping />
        ) : (
          activeTabIndex === 3 && <OrderReview />
        )}
      </View>
      {/* ======================== */}
      {/* expo status bar */}
      {/* ======================== */}
      <StatusBar style="dark" />
    </View>
  );
};

export default OrderHistory;
