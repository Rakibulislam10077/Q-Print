import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import NotificationItem from "../../components/notificationItem/NotificationItem";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { notificationStyle } from "./NotificationStyle";
import { StatusBar } from "expo-status-bar";

const logodata = [
  {
    id: 1,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 2,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 3,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 4,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 5,
    img: require("../../../assets/image/adidas.png"),
  },
  {
    id: 5,
    img: require("../../../assets/image/adidas.png"),
  },
];

const Notification = () => {
  return (
    <View style={notificationStyle.container}>
      <CommonHeader title="Notification" />
      {/* body section */}
      <ScrollView>
        <View style={notificationStyle.bodyContainer}>
          <Text style={notificationStyle.dayText}>Today</Text>
          {logodata?.map((item) => {
            return <NotificationItem item={item} />;
          })}
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

export default Notification;
