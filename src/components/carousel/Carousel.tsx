/**
 * Carousel Component
 *
 * This component renders a horizontal carousel of logos with pagination.
 *
 * Features:
 * - Renders a FlatList to display logos horizontally.
 * - Utilizes SliderItem component to render each logo item.
 * - Utilizes Pagination component to display pagination dots.
 * - Tracks the current scroll position using useRef and Animated.
 * - Updates the current index of the carousel based on the visible item.
 *
 * @returns JSX.Element
 */

import { View, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import SliderItem from './SliderItem';
import Pagination from './Pagination';

// Sample logo data
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
];

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState<number>(0);

  // Handles scroll event
  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  // Handles viewable items change event
  const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  return (
    <View style={{ width: '100%', marginTop: 10 }}>
      {/* FlatList to render logos */}
      <Animated.FlatList
        data={logodata}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SliderItem item={item} />}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
      />
      {/* Pagination dots */}
      <Pagination data={logodata} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Carousel;
