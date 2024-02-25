import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AllCartStyle } from './CartStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { allCartStyle } from './AllCartStyle';
import { IProduct, IProductPhotos } from '../../../types/interfaces/product.interface';
import { Color } from '../../../constants/GlobalStyle';

const Cart = ({ item }: IProduct) => {
  const navigation: any = useNavigation();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // console.log(
  //   JSON.stringify(item, null, 2),
  //   'sdflkas;lkdjf;lkajsdfl;jals;kdjflkajsd;lkfjl;askdjfl;kjasdl;kfj;laksjdf;ljasdkl;jf'
  // );

  // console.log(JSON.stringify(PRODUCT, null, 2));

  return (
    <Animated.View style={AllCartStyle.container} entering={FadeInDown.delay(50).duration(500)}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ProductDeatils', { ...item })}
        // style={[AllCartStyle.container]}
      >
        <View style={AllCartStyle.imgCon}>
          <FlatList
            data={item?.productPhotos}
            horizontal
            onScroll={(e) => {
              setCurrentIndex(
                (e.nativeEvent.contentOffset.x / Dimensions.get('window').width).toFixed(0)
              );
            }}
            pagingEnabled
            contentContainerStyle={AllCartStyle.contentContainerStyle}
            renderItem={({ item: img }) => {
              return (
                <TouchableOpacity
                  style={AllCartStyle.productImgCon}
                  onPress={() => navigation.navigate('ProductDeatils', { ...item })}
                  activeOpacity={1}
                >
                  <Image
                    style={AllCartStyle.productImg}
                    source={{ uri: `http://5.182.33.12:5000/${img}` }}
                  />
                </TouchableOpacity>
              );
            }}
          />

          <View style={AllCartStyle.paginationCon}>
            {item?.productPhotos?.map((i: IProductPhotos, index: number) => {
              return (
                <View
                  key={index.toString()}
                  style={[
                    AllCartStyle.paginationDot,
                    {
                      width: currentIndex == index ? 10 : 5,
                      backgroundColor: currentIndex == index ? Color.C_H_black : '#7F35CD',
                    },
                  ]}
                />
              );
            })}
          </View>
        </View>
        <View style={AllCartStyle.discountCon}>
          <Text style={AllCartStyle.discountText}>{item?.defaultVariant?.discountPercentage}%</Text>
        </View>
        <View style={AllCartStyle.descCon}>
          <Text style={AllCartStyle.title} numberOfLines={2}>
            {item?.productName}
          </Text>
          <Text style={AllCartStyle.startRating}>
            ⭐️ <Text style={AllCartStyle.rating}>(4.5)</Text>
          </Text>
          <View style={AllCartStyle.priceCon}>
            <Text style={AllCartStyle.currentPrice}>
              250 <Text style={AllCartStyle.currency}>QAR</Text>
            </Text>
            <Text style={AllCartStyle.discountedPrice}>1589 QAR</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Cart;
