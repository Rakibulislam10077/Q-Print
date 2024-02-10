import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Color } from '../../../constants/GlobalStyle';
import Cart from '../../card/allCart/Cart';
import { printerStyle } from './PrinterStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
const cartItem = [1, 2, 3, 4, 5];
const Printer = () => {
  return (
    <ScrollView style={printerStyle.container}>
      <Animated.View style={printerStyle.cartContainer}>
        {cartItem?.map((i, _) => {
          return <Cart key={_} />;
        })}
      </Animated.View>
    </ScrollView>
  );
};

export default Printer;
