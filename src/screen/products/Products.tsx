/**
 * Products Component:
 * This component represents a screen for displaying all products.
 * It consists of a header section with navigation controls, search input,
 * and a modal for additional options. The body section displays product tabs.
 *
 * Props:
 * None
 *
 * State:
 * - isModalVisible: boolean state to manage the visibility of the modal.
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
import Modal from 'react-native-modal';
import { productsStyle } from './ProductsStyle';
import { BackArrow, CartBag, Magnify, ThreeLine } from '../../../assets/allSvg/AllSvg';
import { TopTab } from '../../routes/material_Tab/TopTab';
import ModalContent from '../../pages/homePage/modalComponents/ModalContent';

const Products = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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
        <TopTab />
      </View>
      {/* Status Bar */}
      <StatusBar style="dark" />
    </View>
  );
};

export default Products;
