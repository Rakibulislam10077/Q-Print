import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { favoriteCartStyle } from './FavoriteCartStyle';
import { CartBag, CartIcon, RedClose } from '../../../assets/allSvg/AllSvg';
import Animated, { FadeInDown } from 'react-native-reanimated';

const FavoriteCart = (item: any) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(50).duration(500)}
      style={favoriteCartStyle.container}
    >
      <View style={favoriteCartStyle.itemCon}>
        <View style={favoriteCartStyle.imgCon}>
          <Image style={favoriteCartStyle.img} source={item?.item?.img} />
          <TouchableOpacity style={favoriteCartStyle.close}>
            <RedClose />
          </TouchableOpacity>
        </View>
        <View style={favoriteCartStyle.allText}>
          <View>
            <Text style={favoriteCartStyle.brandSpecTitle}>
              Brother HL-L3270CDW Single Function color Laser Printer
            </Text>
            <Text style={favoriteCartStyle.ratingText}>(5.0)</Text>
          </View>
          <View style={favoriteCartStyle.currencyAndButtonCon}>
            <Text style={favoriteCartStyle.currency}>110 QAR</Text>
            <TouchableOpacity activeOpacity={0.7} style={favoriteCartStyle.addToCartButton}>
              <CartBag />
              <Text style={favoriteCartStyle.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default FavoriteCart;
