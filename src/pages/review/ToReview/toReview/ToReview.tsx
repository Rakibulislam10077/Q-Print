import { View, Text, FlatList } from "react-native";
import React from "react";
import { reviewStyle } from "../../ReviewStyle";
import ReviewCart from "../../../../components/toReviewCom/reviewCart/ReviewCart";

const ToReview = () => {
  return (
    <View style={reviewStyle.container}>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1]}
        renderItem={({}) => {
          return <ReviewCart />;
        }}
      />
    </View>
  );
};

export default ToReview;
