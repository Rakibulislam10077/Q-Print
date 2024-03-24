import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { orderPlacedStyle } from './Order_placedStyle';
import OrderPlaceCart from './orderPlaceCart/OrderPlaceCart';
import { useGetHistoryQuery } from '../../../redux/api/onlineOrder';

const Order_placed = (index: any) => {
  const { data, isLoading } = useGetHistoryQuery('orderStatus.status=Order placed');
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

export default Order_placed;
