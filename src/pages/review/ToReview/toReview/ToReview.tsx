import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { reviewStyle } from '../../ReviewStyle';
import ReviewCart from '../../../../components/toReviewCom/reviewCart/ReviewCart';
import { useGetReviewQuery } from '../../../../redux/api/reviewSlice';

const ToReview = () => {
  const { data } = useGetReviewQuery(undefined);

  return (
    <View style={reviewStyle.container}>
      <FlatList
        data={data?.data}
        // keyExtractor={() => {}}
        renderItem={({ item }) => {
          return <ReviewCart item={item} />;
        }}
      />
    </View>
  );
};

export default ToReview;
