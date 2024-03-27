import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Color } from '../../../constants/GlobalStyle';
import Cart from '../../card/allCart/Cart';
import { printerStyle } from './PrinterStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { IProduct } from '../../../types/interfaces/product.interface';
import AllProductSkeleton from '../../skeleton/allProduct.skeleton';
import EmptyData from '../../common/EmptyData';
import { useGetQueryProductQuery } from '../../../redux/api/productSlice';
const Printer = ({ itemId, searchText }: { itemId: string; searchText: string }) => {
  const { data, isLoading } = useGetQueryProductQuery(
    `category.categoryName=Computer Laptop&${searchText ? 'searchTerm=' + searchText : ''}&${itemId ? 'brand.brandId=' + itemId : ''}`
  );

  return (
    <>
      {data?.data?.length === 0 ? (
        <EmptyData children="No Product Found" />
      ) : (
        // <></>
        <ScrollView style={printerStyle.container}>
          <Animated.View style={printerStyle.cartContainer}>
            {data?.data?.map((item: IProduct, index: number) => {
              return <Cart key={index?.toString()} item={item} />;
            })}
          </Animated.View>
        </ScrollView>
      )}
      {isLoading && <AllProductSkeleton />}
    </>
  );
};

export default Printer;
