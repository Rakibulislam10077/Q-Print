import { View, Text } from 'react-native';
import React from 'react';
import { useGetHistoryQuery } from '../../../redux/api/onlineOrder';
import { FlatList } from 'react-native-gesture-handler';
import { orderPlacedStyle } from '../order_placed/Order_placedStyle';
import OrderPlaceCart from '../order_placed/orderPlaceCart/OrderPlaceCart';

const Shipping = () => {
  const { data, isLoading } = useGetHistoryQuery('orderStatus.status=Shipping');
  return (
    <View style={orderPlacedStyle.container}>
      <FlatList
        data={data?.data}
        keyExtractor={(item) => item?._id}
        renderItem={({ item }) => {
          return <OrderPlaceCart orderPlace={item} />;
        }}
      />
    </View>
  );
};

export default Shipping;
