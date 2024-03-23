import { View, Text, FlatList, TouchableOpacity, ViewToken } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import { favoriteStyle } from './FavoriteStyle';
import FavoriteCart from '../../components/favoriteCartComponents/FavoriteCart';
import { Font } from '../../constants/GlobalStyle';
import { StatusBar } from 'expo-status-bar';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { useAppSelector } from '../../redux/hook';

const logodata = [
  {
    id: 1,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 2,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 3,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 4,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 5,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 6,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 7,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 8,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 9,
    img: require('../../../assets/image/adidas.png'),
  },
  {
    id: 10,
    img: require('../../../assets/image/adidas.png'),
  },
];

const Favorite = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  const { favorites } = useAppSelector((state) => state.favourite);

  return (
    <View style={favoriteStyle.container}>
      {/* header section */}
      <CommonHeader title="My Favorite" />
      {/* body section */}
      <View style={favoriteStyle.bodyContainer}>
        <FlatList
          data={favorites}
          onViewableItemsChanged={({ viewableItems: vItems }) => {
            viewableItems.value = vItems;
          }}
          renderItem={({ item }) => {
            return <FavoriteCart item={item} viewableItems={viewableItems} />;
          }}
          ListFooterComponent={
            <TouchableOpacity style={favoriteStyle.footerButton}>
              <Text style={favoriteStyle.footerButtonText}>
                <Text style={{ fontSize: Font.Font_XL }}>+</Text> Add More
              </Text>
            </TouchableOpacity>
          }
        />
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default Favorite;
