import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Color } from '../../../constants/GlobalStyle';
import Animated from 'react-native-reanimated';
import Cart from '../../card/allCart/Cart';
import { useGetQueryProductQuery } from '../../../redux/api/productSlice';
import { IProduct } from '../../../types/interfaces/product.interface';
import EmptyData from '../../common/EmptyData';

const Cartridge = ({ itemId, searchText }: { itemId: string; searchText: string }) => {
  // const { data, isLoading } = useGetQueryProductQuery(
  //   `category.categoryName=Mobile Phone&brand.brandId=${itemId}`
  // );
  const { data, isLoading } = useGetQueryProductQuery(
    `category.categoryName=Mobile Phone&${searchText ? 'searchTerm=' + searchText : ''}&${itemId ? 'brand.brandId=' + itemId : ''}`
  );

  return (
    <>
      {data?.data?.length === 0 ? (
        <EmptyData children="No cartridge available" />
      ) : (
        <ScrollView style={styles.container}>
          <Animated.View style={styles.cartContainer}>
            {data?.data?.map((item: IProduct, index: number) => {
              return <Cart key={index?.toString()} item={item} />;
            })}
          </Animated.View>
        </ScrollView>
      )}
    </>
  );
};

export default Cartridge;

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
