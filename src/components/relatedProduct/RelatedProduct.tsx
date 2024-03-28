import { View, Text } from 'react-native';
import React from 'react';
import { IProduct } from '../../types/interfaces/product.interface';
import Cart from '../card/allCart/Cart';

const RelatedProduct = ({ item }: { item: IProduct }) => {
  return <Cart item={item} />;
};

export default RelatedProduct;
