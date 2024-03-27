import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { orderPlaceCartStyle } from './OrderPlaceCartStyle';
import { Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { IOrder, IOrderStatus } from '../../../../types/interfaces/orderHistory.interface';

interface orderPlaceProps {
  orderPlace: IOrder;
}

const OrderPlaceCart: React.FC<orderPlaceProps> = ({ orderPlace }) => {
  const navigation: any = useNavigation();

  return (
    <Animated.View
      entering={FadeInDown.delay(50).duration(500)}
      style={orderPlaceCartStyle.container}
    >
      {/* top section */}
      <View style={orderPlaceCartStyle.topSectionCon}>
        <View>
          <Text style={orderPlaceCartStyle.orderID}>Order ID : {orderPlace?._id}</Text>
          <Text style={orderPlaceCartStyle.date}>01/jan/24</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={orderPlaceCartStyle.orderPlacedButton}>
          <Text style={orderPlaceCartStyle.orderButtonText}>{orderPlace?.orderStatus?.status}</Text>
        </TouchableOpacity>
      </View>
      {/* ================== */}
      <Divider />
      {/* middle section */}
      {orderPlace?.orderItems?.map((item) => {
        return (
          <View style={orderPlaceCartStyle.middleSectionCon}>
            <View style={orderPlaceCartStyle.imgCon}>
              <Image source={{}} />
            </View>
            <View style={orderPlaceCartStyle.textCon}>
              <Text key={item?._id} style={orderPlaceCartStyle.title}>
                {item?.productName}
              </Text>

              <View style={orderPlaceCartStyle.crrencyCon}>
                <Text style={orderPlaceCartStyle.price}>
                  {item?.variant?.discountedPrice * item?.orderQuantity}
                  <Text style={orderPlaceCartStyle.currency}>QAR</Text>
                </Text>

                <Text style={orderPlaceCartStyle.verticalDivider}>|</Text>
                <Text style={orderPlaceCartStyle.quantity}>X {item?.orderQuantity}</Text>
              </View>
            </View>
          </View>
        );
      })}
      {/* ==================== */}
      <Divider />
      {/* last section */}
      <View style={orderPlaceCartStyle.lastContainer}>
        <View>
          <Text style={orderPlaceCartStyle.itemAndTotalText}>
            {orderPlace?.totalQuantity} Items, Total:
          </Text>
          <Text style={orderPlaceCartStyle.totalPrice}>
            {orderPlace?.totalPrice} <Text style={orderPlaceCartStyle.totalPriceQRA}>QAR</Text>
          </Text>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#C83B62', '#7F35CD']}
          style={orderPlaceCartStyle.trackButtonLinear}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackedOrderDetails', { ...orderPlace })}
            activeOpacity={0.7}
            style={orderPlaceCartStyle.trackButtonActionLayer}
          >
            <Text style={orderPlaceCartStyle.trackButtonText}>Track Order</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Animated.View>
  );
};

export default OrderPlaceCart;
