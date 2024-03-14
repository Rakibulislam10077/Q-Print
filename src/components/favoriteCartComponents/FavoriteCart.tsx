import { View, Text, Image, TouchableOpacity, ViewToken } from 'react-native';
import React from 'react';
import { favoriteCartStyle } from './FavoriteCartStyle';
import { CartBag, RedClose } from '../../../assets/allSvg/AllSvg';
import Animated, { FadeInDown, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useAppDispatch } from '../../redux/hook';
import { removeFromFavorite } from '../../redux/features/addFavourite';
import { addToCart } from '../../redux/features/cartSlice';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: any;
};

// const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

const FavoriteCart: React.FC<ListItemProps> = ({ item, viewableItems }) => {
  const dispatch = useAppDispatch();

  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItems) => viewableItems.item.id === item.id)
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0.7),
      transform: [
        {
          scaleX: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);

  console.log(JSON.stringify(item, null, 2));

  return (
    <Animated.View
      entering={FadeInDown.delay(50).duration(500)}
      style={[favoriteCartStyle.container, rStyle]}
    >
      <View style={favoriteCartStyle.itemCon}>
        <View style={favoriteCartStyle.imgCon}>
          <Image
            style={favoriteCartStyle.img}
            source={{ uri: `http://192.168.0.183:5000/${item?.productPhotos[0]}` }}
          />
          <TouchableOpacity
            onPress={() => dispatch(removeFromFavorite(item))}
            style={favoriteCartStyle.close}
          >
            <RedClose />
          </TouchableOpacity>
        </View>
        <View style={favoriteCartStyle.allText}>
          <View>
            <Text style={favoriteCartStyle.brandSpecTitle}>{item?.productName}</Text>
            <Text style={favoriteCartStyle.ratingText}>(5.0)</Text>
          </View>
          <View style={favoriteCartStyle.currencyAndButtonCon}>
            <Text style={favoriteCartStyle.currency}>
              {item?.defaultVariant?.discountedPrice} QAR
            </Text>
            <TouchableOpacity
              onPress={() => dispatch(addToCart(item))}
              activeOpacity={0.7}
              style={favoriteCartStyle.addToCartButton}
            >
              <CartBag />
              <Text style={favoriteCartStyle.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default FavoriteCart;
