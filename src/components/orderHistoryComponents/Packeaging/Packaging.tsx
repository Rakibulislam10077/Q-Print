import { FlatList, Text, View } from 'react-native';
import Animated, { SlideInRight } from 'react-native-reanimated';
import { orderPlacedStyle } from '../order_placed/Order_placedStyle';
import { useGetHistoryQuery } from '../../../redux/api/onlineOrder';
import OrderPlaceCart from '../order_placed/orderPlaceCart/OrderPlaceCart';

const Packaging = () => {
  const { data, isLoading } = useGetHistoryQuery('orderStatus.status=Packaging');
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

export default Packaging;
