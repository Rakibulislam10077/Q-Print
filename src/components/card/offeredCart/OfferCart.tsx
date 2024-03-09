import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Cart from './Cart';
import { Color, Font } from '../../../constants/GlobalStyle';
import HomePageProductCateTitle from '../../common/homePageProductCategory/HomePageProductCateTitle';
import Animated, { FadeInLeft, FadingTransition } from 'react-native-reanimated';
const logodata = [
  {
    id: 1,
    img: require('../../../../assets/image/adidas.png'),
  },
  {
    id: 2,
    img: require('../../../../assets/image/adidas.png'),
  },
  {
    id: 3,
    img: require('../../../../assets/image/adidas.png'),
  },
  {
    id: 4,
    img: require('../../../../assets/image/adidas.png'),
  },
  {
    id: 5,
    img: require('../../../../assets/image/adidas.png'),
  },
];
const OfferCart = () => {
  return (
    <View>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
        <HomePageProductCateTitle title="Sepecial for you" subTitle="see all" />
      </View>
      <Animated.FlatList
        entering={FadeInLeft.delay(50).duration(300)}
        contentContainerStyle={{ paddingRight: 20 }}
        data={logodata}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Cart item={item} />;
        }}
      />
    </View>
  );
};

export default OfferCart;
