import { View, Text, Image } from "react-native";
import React from "react";
import { notificationItemStyle } from "./NotificationItemStyle";
import Animated, { FadeInDown } from "react-native-reanimated";

const NotificationItem = (item: any) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(50).duration(50).damping(10).springify()}
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
          sdlkf;alksdfjafasdlkflasdfkjdflsdfkasldkjf;laskdjflaksfjdksdf;laksdfl;aksdf;lj
          Your order ID #4584937437 has confirmed
        </Text>
        <View style={notificationItemStyle.currencyAndDayCon}>
          <Text style={notificationItemStyle.currency}>QR 788</Text>
          <Text style={notificationItemStyle.days}>1d age</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default NotificationItem;
