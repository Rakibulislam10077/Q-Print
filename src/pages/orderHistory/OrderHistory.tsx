import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { orderHistoryStyle } from "./OrderHistoryStyle";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { logFunc } from "../../utils/log";
import { Color } from "../../constants/GlobalStyle";
import Order_placed from "../../components/orderHistoryComponents/order_placed/Order_placed";
import { navigation } from "../../constants/orderHis/orderHCustomNav";
import Packaging from "../../components/orderHistoryComponents/Packeaging/Packaging";
import Shipping from "../../components/orderHistoryComponents/shipping/Shipping";
import OrderReview from "../../components/orderHistoryComponents/ordeReview/OrderReview";
import Animated, { FadeInDown } from "react-native-reanimated";
const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState<null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  // const [activeTabIndex, setActiveTabIndex] = useState<any>(navigation?.map(i) => i?.id);
  const toggleTab = (activeTab: any) => {
    // setActiveTabIndex(1)
    setActiveTab(activeTab);
    if (activeTab?.id === 0) {
      setActiveTabIndex(0);
    } else if (activeTab?.id === 1) {
      setActiveTabIndex(1);
    } else if (activeTab?.id === 2) {
      setActiveTabIndex(2);
    } else {
      setActiveTabIndex(3);
    }
  };
  return (
    <View style={orderHistoryStyle.container}>
      {/* header container */}
      <CommonHeader title="Order History" />
      {/* body container */}
      <View style={orderHistoryStyle.bodyContainer}>
        {/* navigation container */}
        <View style={orderHistoryStyle.navCon}>
          <Animated.FlatList
            // entering={FadeInDown.delay(50).duration(500)}
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
    </View>
  );
};

export default OrderHistory;
