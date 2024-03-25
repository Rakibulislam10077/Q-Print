import { View, Text, FlatList } from 'react-native';
import React from 'react';
import HistoryCart from '../../../../components/toReviewCom/history/HistoryCart';
import { useGetReviewQuery } from '../../../../redux/api/reviewSlice';

const History = () => {
  const { data } = useGetReviewQuery(undefined);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={data?.data}
        renderItem={({ item }) => {
          return <HistoryCart item={item} />;
        }}
      />
    </View>
  );
};

export default History;
