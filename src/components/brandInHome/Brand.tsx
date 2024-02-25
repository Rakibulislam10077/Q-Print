import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { brandStyle } from './BrandStyle';
import { useNavigation } from '@react-navigation/native';
import { IBrand } from '../../types/interfaces/brand.interface';

const Brand = (item: IBrand) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('BrandDetails', { ...item })}
      style={brandStyle.container}
    >
      <Image
        style={{ width: '90%', height: 40 }}
        source={{ uri: `http://5.182.33.12:5000/${item?.brandPhoto}` }}
      />
    </TouchableOpacity>
  );
};

export default Brand;
