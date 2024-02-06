import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { allBrandStyle } from './AllBrandStyle';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const AllBrand = (item: any) => {
  const navigation: any = useNavigation();
  return (
    <Animated.View
      entering={FadeInDown.delay(50).duration(500)}
      style={allBrandStyle.CartContainer}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('BrandDetails', { ...item })}
        style={allBrandStyle.cardActionLayer}
      >
        <Image style={allBrandStyle.logo} source={item?.item?.img} />
        <Text style={allBrandStyle.brandName}>Canon</Text>
        <Divider />
        <Text style={allBrandStyle.avilableProductText}>25 Product Available</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AllBrand;
