import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Color } from '../../../constants/GlobalStyle';
import Cart from '../../card/allCart/Cart';
import { printerStyle } from './PrinterStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useGetProductQuery } from '../../../redux/api/apiSlice';
const cartItem = [1, 2, 3, 4, 5];
const Printer = () => {
  const { data, isLoading } = useGetProductQuery(undefined);

  return (
    <ScrollView style={printerStyle.container}>
      <Animated.View style={printerStyle.cartContainer}>
        {data?.data?.map((item, index) => {
          return <Cart key={index.toString()} item={item} />;
        })}
      </Animated.View>
    </ScrollView>
  );
};

export default Printer;
