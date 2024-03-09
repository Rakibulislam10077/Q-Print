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
  const { data, isLoading } = useGetQueryProductQuery(
    `category.categoryName=Computer Laptop&${itemId ? 'brand.brandId=' + itemId : ''}`
  );

  return (
    <>
      <ScrollView style={printerStyle.container}>
        <Animated.View style={printerStyle.cartContainer}>
          {data?.data?.map((item: IProduct, index: number) => {
            return <Cart key={index?.toString()} item={item} />;
          })}
        </Animated.View>
      </ScrollView>
      {isLoading && <AllProductSkeleton />}
    </>
  );
};

export default Printer;
