import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AllCartStyle } from './CartStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { allCartStyle } from './AllCartStyle';

const Cart = (item: any) => {
  const navigation: any = useNavigation();
  return (
    <Animated.View style={AllCartStyle.container} entering={FadeInDown.delay(50).duration(500)}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ProductDeatils')}
        // style={[AllCartStyle.container]}
      >
        <View style={AllCartStyle.imgCon}>
          <Image style={AllCartStyle.img} source={item?.item?.img} />
        </View>
        <View style={AllCartStyle.discountCon}>
          <Text style={AllCartStyle.discountText}>20%</Text>
        </View>
        <View style={AllCartStyle.descCon}>
          <Text style={AllCartStyle.title} numberOfLines={2}>
            Apple Watch lk link pons papfdsi por sno iwlksdljf
          </Text>
          <Text style={AllCartStyle.startRating}>
            ⭐️ <Text style={AllCartStyle.rating}>(4.5)</Text>
          </Text>
          <View style={AllCartStyle.priceCon}>
            <Text style={AllCartStyle.currentPrice}>
              250 <Text style={AllCartStyle.currency}>QAR</Text>
            </Text>
            <Text style={AllCartStyle.discountedPrice}>1589 QAR</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Cart;
