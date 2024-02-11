import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { brandStyle } from './BrandStyle';
import { useNavigation } from '@react-navigation/native';

const Brand = (item: any) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('BrandDetails', { ...item })}
      style={brandStyle.container}
    >
      <Image source={item?.item?.img} />
    </TouchableOpacity>
  );
};

export default Brand;
