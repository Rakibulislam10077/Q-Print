import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import Cart from '../../card/allCart/Cart';
import AllProductSkeleton from '../../skeleton/allProduct.skeleton';
import { IProduct } from '../../../types/interfaces/product.interface';
import { useGetQueryProductQuery } from '../../../redux/api/apiSlice';
import { Color } from '../../../constants/GlobalStyle';

const ProductAll = ({ itemId }: { itemId: string }) => {
  const { data, isLoading } = useGetQueryProductQuery(`${itemId ? 'brand.brandId=' + itemId : ''}`);
  return (
    <>
      <ScrollView style={styles.container}>
        <Animated.View style={styles.cartContainer}>
          {data?.data?.map((item: IProduct, index: number) => {
            return <Cart key={index?.toString()} item={item} />;
          })}
        </Animated.View>
      </ScrollView>
      {isLoading && <AllProductSkeleton />}
    </>
  );
};

export default ProductAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.C_white,
  },
  cartContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: Color.C_white,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
