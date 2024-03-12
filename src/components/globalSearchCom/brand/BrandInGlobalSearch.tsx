import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { globalBrandStyle } from './BrandInGlobalStyle';
import { useNavigation } from '@react-navigation/native';

const BrandInGlobalSearch = ({ item }: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BrandDetails', { ...item })}
      style={globalBrandStyle.container}
    >
      <Image
        style={globalBrandStyle.img}
        source={{ uri: `http://192.168.0.103:5000/${item?.brand?.brandPhoto}` }}
      />
    </TouchableOpacity>
  );
};

export default BrandInGlobalSearch;
