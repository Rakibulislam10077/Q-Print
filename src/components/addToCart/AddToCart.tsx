import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { addToCartStyle } from './AddToCartStyle';
import { Close } from '../../../assets/allSvg/AllSvg';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { addToCart, removeFromCart, removeOneFromCart } from '../../redux/features/cartSlice';
import { useAppDispatch } from '../../redux/hook';

let dynamicColor = 'red';
const AddToCart = ({ item }: { item: any }) => {
  const totalPrice = item?.defaultVariant?.discountedPrice * item?.quantity;

  const dispatch = useAppDispatch();
  return (
    <Animated.View
      entering={FadeInDown.delay(100).duration(500)}
      style={addToCartStyle.cartContainer}
    >
      <View style={addToCartStyle.imgCon}>
        <Image
          style={addToCartStyle.img}
          source={{ uri: `http://192.168.0.183:5000/${item?.productPhotos[0]}` }}
        />
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
          <TouchableOpacity
            onPress={() => dispatch(removeFromCart(item))}
            style={addToCartStyle.close}
          >
            <Close />
          </TouchableOpacity>
        </View>
        <View style={addToCartStyle.storeNameAndColorIndicator}>
          <Text style={addToCartStyle.storeName}>{item?.brand?.brandName}</Text>
          <View
            style={[
              addToCartStyle.colorIndicator,
              // { backgroundColor: item?.variant?.variantName.toLowerCase() },
            ]}
          />
        </View>
        <View style={addToCartStyle.currencyCon}>
          <Text style={addToCartStyle.priceAndCurrency}>{totalPrice}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                dispatch(removeOneFromCart(item));
              }}
              style={addToCartStyle.plusAndMinus}
            >
              <AntDesign name="minus" size={16} color="black" />
            </TouchableOpacity>
            <Text style={addToCartStyle.quantity}>{item?.quantity}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(item));
              }}
              style={addToCartStyle.plusAndMinus}
            >
              <AntDesign name="plus" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default AddToCart;
