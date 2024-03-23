import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import Cart from '../../card/allCart/Cart';
import AllProductSkeleton from '../../skeleton/allProduct.skeleton';
import { IProduct } from '../../../types/interfaces/product.interface';
import { Color } from '../../../constants/GlobalStyle';
import { useGetQueryProductQuery } from '../../../redux/api/prductSlice';

const ProductAll = ({ itemId, searchText }: { itemId: string; searchText: string }) => {
  const { data, isLoading } = useGetQueryProductQuery(
    `${searchText ? 'searchTerm=' + searchText : ''}&${itemId ? 'brand.brandId=' + itemId : ''}`
  );

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
