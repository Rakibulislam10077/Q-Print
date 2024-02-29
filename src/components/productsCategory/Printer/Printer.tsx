import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Color } from '../../../constants/GlobalStyle';
import Cart from '../../card/allCart/Cart';
import { printerStyle } from './PrinterStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useGetProductQuery, useGetQueryProductQuery } from '../../../redux/api/apiSlice';
import { IProduct } from '../../../types/interfaces/product.interface';
const cartItem = [1, 2, 3, 4, 5];
const Printer = () => {
  const { data, isLoading } = useGetQueryProductQuery('Computer Laptop');

  console.log(data?.data?.length);

  return (
    <ScrollView style={printerStyle.container}>
      <Animated.View style={printerStyle.cartContainer}>
        {data?.data?.map((item, index: number) => {
          return <Cart key={index?.toString()} item={item} />;
        })}
      </Animated.View>
    </ScrollView>
  );
};

export default Printer;
