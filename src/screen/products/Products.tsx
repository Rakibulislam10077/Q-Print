/**
 * Products Component:
 * This component renders a screen displaying all available products.
 * It includes a header section with navigation controls, a search input, and icons.
 * The body section displays product categories using a material top tab.
 *
 * Props:
 * None
 *
 * Navigation:
 * - The back arrow button navigates back to the previous screen.
 *
 * Usage Example:
 * ```jsx
 * import Products from './Products';
 * <Products />
 * ```
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { productsStyle } from './ProductsStyle';
import { BackArrow, CartBag, Magnify, ThreeLine } from '../../../assets/allSvg/AllSvg';
import { TopTab } from '../../routes/material_Tab/TopTab';

const Products = ({ itemId }: { itemId: string }) => {
  const navigation = useNavigation();

  return (
    <View style={productsStyle.container}>
      {/* Header Section */}
      <View style={productsStyle.headerContainer}>
        {/* Navigation Controls */}
        <View style={productsStyle.navigationAndCard}>
          <View style={productsStyle.navigationAndTitle}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
              <BackArrow />
            </TouchableOpacity>
            {/* Title */}
            <Text style={productsStyle.title}>All Products</Text>
          </View>
          {/* Cart Icon */}
          <TouchableOpacity style={productsStyle.cartBag}>
            <CartBag />
          </TouchableOpacity>
        </View>
        {/* Search Input and Three Line Icon */}
        <View style={productsStyle.inputAndThreelineCon}>
          {/* Search Input */}
          <View style={productsStyle.magnifyAndInputCon}>
            <Magnify />
            <TextInput style={productsStyle.input} placeholder="Search Product" />
          </View>
        </View>
      </View>
      {/* Body Section */}
      <View style={productsStyle.bodyContainer}>
        {/* material top tab  */}
        <TopTab itemId={itemId} />
      </View>
      {/* Status Bar */}
      <StatusBar style="dark" />
    </View>
  );
};

export default Products;
