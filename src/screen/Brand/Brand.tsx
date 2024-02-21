/**
 * Brand Component
 *
 * This component renders a list of top brands and all brands in a scrollable view.
 *
 * Features:
 * - Utilizes a CommonHeader component to display the title "Brand" at the top.
 * - Displays a list of top brands horizontally using FlatList and TopBrand component.
 * - Renders all brands vertically using FlatList and AllBrand component.
 * - Integrates animations such as FadeInDown, FadeInLeft, and FadeInRight for visual effects.
 * - Implements SafeAreaView and StatusBar for better layout and status bar configuration.
 *
 * @returns JSX.Element
 */

import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { brandStyle } from './BrandStyle';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import TopBrand from './topBrand/TopBrand';
import AllBrand from './allBrand/AllBrand';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

const logodata = [
  {
    id: 1,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 2,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 3,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 4,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 5,
    img: require('../../../assets/image/adidas.png'),
  },
];

const Brand = () => {
  return (
    <View style={brandStyle.container}>
      {/* Custom Header */}
      <CommonHeader title="Brand" />

      {/* Body Container */}
      <ScrollView>
        <View style={brandStyle.bodyContainer}>
          <Text style={brandStyle.topBrandText}>Top Brand</Text>

          {/* Top Brand Section */}
          <Animated.FlatList
            entering={FadeInRight.delay(50).duration(500)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
            data={logodata}
            renderItem={({ item }) => <TopBrand item={item} />}
          />

          {/* All Brand Container */}
          <View style={brandStyle.allBrandContainer}>
            <Text style={brandStyle.allBrandText}>All Brand</Text>
            <Animated.View style={brandStyle.allCartContainer}>
              {/* Render All Brands */}
              {logodata?.map((item) => {
                return <AllBrand key={item?.id} item={item} />; // all brand cart
              })}
            </Animated.View>
          </View>
        </View>
      </ScrollView>

      {/* StatusBar Configuration */}
      <StatusBar style="dark" />
    </View>
  );
};

export default Brand;
