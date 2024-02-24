/**
 * AllCart Component
 *
 * This component renders a collection of items in a cart format.
 *
 * Features:
 * - Displays a title and subtitle for the category of products.
 * - Renders multiple Cart components based on the provided data.
 *
 * @returns JSX.Element
 */

import { View } from 'react-native';
import React from 'react';
import Cart from './Cart';
import { allCartStyle } from './AllCartStyle';
import HomePageProductCateTitle from '../../common/homePageProductCategory/HomePageProductCateTitle';
import { useGetProductQuery } from '../../../redux/api/apiSlice';
import { IProduct } from '../../../types/interfaces/product.interface';

// Sample data for cart items
// const data = [
//   {
//     id: 1,
//     img: require('../../../../assets/image/adidas.png'),
//   },
//   {
//     id: 2,
//     img: require('../../../../assets/image/adidas.png'),
//   },
//   {
//     id: 3,
//     img: require('../../../../assets/image/adidas.png'),
//   },
//   {
//     id: 4,
//     img: require('../../../../assets/image/adidas.png'),
//   },
//   {
//     id: 5,
//     img: require('../../../../assets/image/adidas.png'),
//   },
// ];

const AllCart = () => {
  const { data, isLoading } = useGetProductQuery(undefined);

  console.log(data);

  return (
    <View style={allCartStyle.container}>
      {/* Renders the title and subtitle */}
      <HomePageProductCateTitle title="Printers, Cartridge, Ink" subTitle="see all" />
      {/* Maps over the data and renders individual Cart components */}
      {data?.data?.map((item: IProduct) => {
        return <Cart key={item?._id} item={item} />;
      })}
    </View>
  );
};

export default AllCart;
