import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Color } from '../../../constants/GlobalStyle';
import { useGetQueryProductQuery } from '../../../redux/api/apiSlice';
import Animated from 'react-native-reanimated';
import Cart from '../../card/allCart/Cart';

const Cartridge = ({ itemId }: { itemId: string }) => {
  // const { data, isLoading } = useGetQueryProductQuery(
  //   `category.categoryName=Mobile Phone&brand.brandId=${itemId}`
  // );
  const { data, isLoading } = useGetQueryProductQuery(
    `category.categoryName=Mobile Phone&${itemId ? 'brand.brandId=' + itemId : ''}`
  );

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={styles.cartContainer}>
        {data?.data?.map((item, index: number) => {
          return <Cart key={index?.toString()} item={item} />;
        })}
      </Animated.View>
    </ScrollView>
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
