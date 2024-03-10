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
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { productsStyle } from './ProductsStyle';
import { BackArrow, CartBag, Magnify, ThreeLine } from '../../../assets/allSvg/AllSvg';
import { TopTab } from '../../routes/material_Tab/TopTab';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  ZoomIn,
  ZoomOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
const Products = ({ itemId }: { itemId: string }) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [isClickedSearch, setIsClickedSearch] = useState(false);
  const DimentionsWidth = Dimensions.get('window').width;

  const CustomTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  console.log(searchText);
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 1
          ? withTiming(DimentionsWidth - 40, { duration: 500 })
          : withTiming(0, { duration: 1000 }),
      borderWidth: animation.value == 1 ? withTiming(1, { duration: 250 }) : 0,
    };
  });

  return (
    <View style={productsStyle.container}>
      {/* Header Section */}
      <View style={productsStyle.headerContainer}>
        {/* Navigation Controls */}
        <View style={productsStyle.navigationAndCard}>
          {!isClickedSearch === true && (
            <View style={productsStyle.navigationAndTitle}>
              {/* Back Button */}
              <CustomTouchable
                entering={FadeInLeft}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
              >
                <BackArrow />
              </CustomTouchable>
              {/* Title */}
              <Animated.Text entering={FadeInLeft.delay(250)} style={productsStyle.title}>
                All Products
              </Animated.Text>
            </View>
          )}
          {/* Cart Icon */}
          {/* Search Input and Three Line Icon */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Animated.View style={[productsStyle.inputAndThreelineCon]}>
              {/* Search Input */}
              <Animated.View
                exiting={ZoomOut.delay(250)}
                style={[productsStyle.magnifyAndInputCon, animatedStyle]}
              >
                {isClickedSearch && (
                  <TextInput
                    onChangeText={(text) => setSearchText(text)}
                    style={productsStyle.input}
                    placeholder="Search products"
                    value={searchText}
                    onSubmitEditing={() => {
                      console.log(searchText);
                    }}
                  />
                )}

                <CustomTouchable
                  entering={ZoomIn.delay(50)}
                  onPress={() => {
                    setIsClickedSearch(!isClickedSearch);
                    if (animation.value == 1) {
                      animation.value = 0;
                    } else {
                      animation.value = 1;
                    }
                  }}
                  style={productsStyle.magnify}
                >
                  {isClickedSearch ? (
                    <AntDesign name="close" size={20} color="gray" />
                  ) : (
                    <Magnify />
                  )}
                </CustomTouchable>
              </Animated.View>
            </Animated.View>
            {!isClickedSearch === true && (
              <CustomTouchable entering={ZoomIn.delay(50)} style={productsStyle.cartBag}>
                <CartBag />
              </CustomTouchable>
            )}
          </View>
        </View>
      </View>
      {/* Body Section */}
      <View style={productsStyle.bodyContainer}>
        {/* material top tab  */}
        <TopTab searchText={searchText} itemId={itemId} />
      </View>
      {/* Status Bar */}
      <StatusBar style="dark" />
    </View>
  );
};

export default Products;
