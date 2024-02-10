/**
 * TopTab Component:
 * This component defines a top tab navigator for displaying different product categories.
 * It utilizes the createMaterialTopTabNavigator from '@react-navigation/material-top-tabs'.
 * It includes tabs for Printer, Cartridge, and Ink categories.
 *
 * Props:
 * None
 *
 * Usage Example:
 * ```jsx
 * import { TopTab } from './TopTab';
 * <TopTab />
 * ```
 */

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import All from '../../components/productsCategory/all/All';
import Printer from '../../components/productsCategory/Printer/Printer';
import Cartridge from '../../components/productsCategory/Cartridge/Cartridge';
import Ink from '../../components/productsCategory/Ink/Ink';
import { Color } from '../../constants/GlobalStyle';

const Tab = createMaterialTopTabNavigator();
const DimensionsWidth = Dimensions.get('window').width;

export const TopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* =============================== */}
      {/* Top Tab Navigator */}
      {/* =============================== */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#FFFFFF', // Background color of the tab bar
          },
          tabBarActiveTintColor: Color.C_main,
          tabBarInactiveTintColor: '#9E9E9E',
          tabBarLabelStyle: { fontSize: 16, textTransform: 'lowercase' }, // Text style for tab labels
          tabBarIndicatorStyle: {
            backgroundColor: Color.C_main, // Color of the indicator line
            height: 1, // Height of the indicator line
            borderRadius: 10, // Border radius of the indicator line
          },
        }}
      >
        {/* =============================== */}
        {/* Printer Category Tab */}
        {/* =============================== */}
        <Tab.Screen name="Printer" component={Printer} />
        {/* =============================== */}
        {/* Cartridge Category Tab */}
        {/* =============================== */}
        <Tab.Screen name="Cartridge" component={Cartridge} />
        {/* =============================== */}
        {/* Ink Category Tab */}
        {/* =============================== */}
        <Tab.Screen name="Ink" component={Ink} />
      </Tab.Navigator>
    </View>
  );
};
