import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { reviewStyle } from '../../ReviewStyle';
import ReviewCart from '../../../../components/toReviewCom/reviewCart/ReviewCart';
import { useGetProductReviewQuery } from '../../../../redux/api/reviewSlice';

const ToReview = () => {
  const { data } = useGetProductReviewQuery(undefined);
  // console.log('review data', data?.data);

  return (
    <View style={reviewStyle.container}>
      <FlatList
        data={data?.data}
        // keyExtractor={() => {}}
        renderItem={({ item }) => {
          return <ReviewCart item={item} />;
        }}
        keyExtractor={(item) => item?._id}
      />
    </View>
  );
};

export default ToReview;
