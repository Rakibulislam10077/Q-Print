import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { homePageStyle } from './HomePageHeaderStyle';
import { CartBag } from '../../../assets/allSvg/AllSvg';
import { Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../redux/hook';

const HomePageTopCon = () => {
  const navigation: any = useNavigation();
  // const { products } = useAppSelector((state) => state.cart);
  return (
    <View style={homePageStyle.container}>
      <View>
        <Image source={require('../../../assets/image/logo.png')} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyCart')}
        activeOpacity={0.7}
        style={homePageStyle.cart}
      >
        <CartBag />
        {/* <Badge style={homePageStyle.badge}>{products?.length}</Badge> */}
      </TouchableOpacity>
    </View>
  );
};

export default HomePageTopCon;
