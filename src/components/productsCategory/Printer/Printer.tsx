import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Color } from '../../../constants/GlobalStyle';
import Cart from '../../card/allCart/Cart';
import { printerStyle } from './PrinterStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useGetQueryProductQuery } from '../../../redux/api/apiSlice';
import { IProduct } from '../../../types/interfaces/product.interface';
import AllProductSkeleton from '../../skeleton/allProduct.skeleton';
const Printer = ({ itemId }: { itemId: string }) => {
  const categoryName = 'Computer Laptop';
  const id = itemId;

  const { data, isLoading } = useGetQueryProductQuery({ categoryName, brandId: id });

  // console.log(itemId, 'from Printer');
  // // console.log(JSON.stringify(data?.data[0]?.brand?.brandId, null, 2));
  // const ds = data?.data[0]?.brand?.brandId;
  // console.log(ds, 'form ds');

  // if (itemId === ds) {
  // }

  return (
    <>
      <ScrollView style={printerStyle.container}>
        <Animated.View style={printerStyle.cartContainer}>
          {data?.data?.map((item, index: number) => {
            return <Cart key={index?.toString()} item={item} />;
          })}
        </Animated.View>
      </ScrollView>
      {isLoading && <AllProductSkeleton />}
    </>
  );
};

export default Printer;
