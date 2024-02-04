import { View, Text, FlatList } from "react-native";
import React from "react";
import HistoryCart from "../../../../components/toReviewCom/history/HistoryCart";

const History = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={[1, 1, 1, 1, 1, 1]}
        renderItem={({}) => {
          return <HistoryCart />;
        }}
      />
    </View>
  );
};

export default History;
