import { View, Text } from "react-native";
import React from "react";
import { homePageCateTitleStyle } from "./HomePageProCateTitleStyle";

const HomePageProductCateTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <View style={homePageCateTitleStyle.container}>
      <Text style={homePageCateTitleStyle.title}>{title}</Text>
      <Text style={homePageCateTitleStyle.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default HomePageProductCateTitle;
