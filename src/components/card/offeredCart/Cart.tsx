import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { cartStyle } from './CartStyle';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

const Cart = (item: any) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('ProductDeatils', { ...item })}
      style={cartStyle.container}
    >
      <View style={cartStyle.imgCon}>
        <Animated.Image
          sharedTransitionTag="image"
          style={cartStyle.img}
          source={item?.item?.img}
        />
      </View>
      <View style={cartStyle.discountCon}>
        <Text style={cartStyle.discountText}>20%</Text>
      </View>
      <View style={cartStyle.descCon}>
        <Text style={cartStyle.title} numberOfLines={2}>
          Apple Watch lk link pons papfdsi por sno iwlksdljf
        </Text>
        <Text style={cartStyle.startRating}>
          ⭐️ <Text style={cartStyle.rating}>(4.5)</Text>
        </Text>
        <View style={cartStyle.priceCon}>
          <Text style={cartStyle.currentPrice}>
            250 <Text style={cartStyle.currency}>QAR</Text>
          </Text>
          <Text style={cartStyle.discountedPrice}>1589 QAR</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cart;
