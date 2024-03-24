import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { orderPlacedStyle } from '../order_placed/Order_placedStyle';
import OrderPlaceCart from '../order_placed/orderPlaceCart/OrderPlaceCart';
import { useGetHistoryQuery } from '../../../redux/api/onlineOrder';

const OrderRecieve = () => {
  const { data, isLoading } = useGetHistoryQuery('orderStatus.status=Delivered');
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

export default OrderRecieve;
