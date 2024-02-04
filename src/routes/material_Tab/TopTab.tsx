import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import All from "../../components/productsCategory/all/All";
import Printer from "../../components/productsCategory/Printer/Printer";
import Cartridge from "../../components/productsCategory/Cartridge/Cartridge";
import Ink from "../../components/productsCategory/Ink/Ink";
import { Color } from "../../constants/GlobalStyle";

const Tab = createMaterialTopTabNavigator();
const DimensionsWidth = Dimensions.get("window").width;
export const TopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Color.C_main,
          inactiveTintColor: "#9E9E9E",
          labelStyle: { fontSize: 16, textTransform: "lowercase" },
          style: { backgroundColor: "#FFFFFF" },
          indicatorStyle: {
            backgroundColor: Color.C_main,
            height: 1,
            borderRadius: 10,
          },
        }}
      >
        {/* <Tab.Screen name="all" component={All} /> */}
        <Tab.Screen name="Printer" component={Printer} />
        <Tab.Screen name="Cartridge" component={Cartridge} />
        <Tab.Screen name="Ink" component={Ink} />
      </Tab.Navigator>
    </View>
  );
};
