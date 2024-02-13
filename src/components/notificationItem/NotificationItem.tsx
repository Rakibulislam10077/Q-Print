import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { notificationItemStyle } from './NotificationItemStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const NotificationItem = (item: any) => {
  const navigation: any = useNavigation();
  return (
    <Animated.View entering={FadeInDown.delay(50).duration(50).damping(10).springify()}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TrackedOrderDetails')}
        activeOpacity={0.7}
        style={notificationItemStyle.container}
      >
        <View style={notificationItemStyle.logoContainer}>
          <Image style={notificationItemStyle.logo} source={item?.item?.img} />
        </View>
        <View style={notificationItemStyle.specCon}>
          <Text numberOfLines={2} style={notificationItemStyle.title}>
            Order collection date confirmend.
          </Text>
          <Text numberOfLines={2} style={notificationItemStyle.subTitle}>
            sdlkf;alksdfjafasdlkflasdfkjdflsdfkasldkjf;laskdjflaksfjdksdf;laksdfl;aksdf;lj Your
            order ID #4584937437 has confirmed
          </Text>
          <View style={notificationItemStyle.currencyAndDayCon}>
            <Text style={notificationItemStyle.currency}>QR 788</Text>
            <Text style={notificationItemStyle.days}>1d age</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default NotificationItem;
