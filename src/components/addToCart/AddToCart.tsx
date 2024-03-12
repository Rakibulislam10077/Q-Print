import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { addToCartStyle } from './AddToCartStyle';
import { Close } from '../../../assets/allSvg/AllSvg';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

let dynamicColor = 'red';
const AddToCart = ({ item }: { item: any }) => {
  console.log(JSON.stringify(item, null, 2));

  return (
    <Animated.View
      entering={FadeInDown.delay(100).duration(500)}
      style={addToCartStyle.cartContainer}
    >
      <View style={addToCartStyle.imgCon}>
        <Image style={addToCartStyle.img} source={require('../../../assets/image/homepod.jpeg')} />
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <View style={addToCartStyle.titleCon}>
            <Text numberOfLines={2} style={addToCartStyle.title}>
              {item.productName}
            </Text>
          </View>
          <TouchableOpacity style={addToCartStyle.close}>
            <Close />
          </TouchableOpacity>
        </View>
        <View style={addToCartStyle.storeNameAndColorIndicator}>
          <Text style={addToCartStyle.storeName}>{item?.brand?.brandName}</Text>
          <View style={[addToCartStyle.colorIndicator, { backgroundColor: dynamicColor }]} />
        </View>
        <View style={addToCartStyle.currencyCon}>
          <Text style={addToCartStyle.priceAndCurrency}>1100 QAR</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity style={addToCartStyle.plusAndMinus}>
              <AntDesign name="minus" size={16} color="black" />
            </TouchableOpacity>
            <Text style={addToCartStyle.quantity}>1</Text>
            <TouchableOpacity style={addToCartStyle.plusAndMinus}>
              <AntDesign name="plus" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default AddToCart;
