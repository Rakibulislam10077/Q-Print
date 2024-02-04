import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ToReview from "../../pages/review/ToReview/toReview/ToReview";
import History from "../../pages/review/ToReview/reviewHistory/History";

const Tab = createMaterialTopTabNavigator();
const ReviewTopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="To Review" component={ToReview} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default ReviewTopTab;
