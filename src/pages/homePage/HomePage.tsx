/**
 * HomePage Component:
 * This component represents the main screen of the application, showcasing various sections
 * including the search bar, brand logos, custom carousel, offer cart section, and all cart section.
 * Users can also access a modal with additional options.
 *
 * State:
 * - isModalVisible: A boolean state to manage the visibility of the modal.
 *
 * Navigation:
 * - navigation: React Navigation hook used for navigation between screens.
 *
 * Usage Example:
 * ```jsx
 * import HomePage from './HomePage';
 * <HomePage />
 * ```
 */

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import HomePageTopCon from '../../components/homePageTopCon/HomePageTopCon';
import { homePageStyle } from './HomePageStyle';
import { Magnify, ThreeLine } from '../../constants/allSvg/AllSvg';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import BrandInHome from '../../components/brandInHome/BrandInHome';
import Carousel from '../../components/carousel/Carousel';
import OfferCart from '../../components/card/offeredCart/OfferCart';
import AllCart from '../../components/card/allCart/AllCart';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal';
import ModalContent from './modalComponents/ModalContent';
import { Color } from '../../constants/GlobalStyle';

const HomePage = () => {
  const navigation: any = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <View style={{ flex: 1, backgroundColor: Color.C_white }}>
      {/* Header Container */}
      <HomePageTopCon />

      {/* Body container */}
      <ScrollView style={{ flex: 1 }}>
        {/* Search and Three-line Container */}
        <Animated.View
          entering={FadeInLeft.delay(50).duration(150)}
          style={homePageStyle.searchAndthreelineCon}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            activeOpacity={0.7}
            style={homePageStyle.searchContainer}
          >
            <Magnify />
            <Text style={homePageStyle.searchText}>Search Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            activeOpacity={0.7}
            style={homePageStyle.threeLine}
          >
            <ThreeLine />
          </TouchableOpacity>
        </Animated.View>

        {/* Brand Logo Container */}
        <BrandInHome />
        {/* Brand_Skeleton */}

        {/* Custom Carousel */}
        <Carousel />
        {/* Carousel_Skeleton */}

        {/* Offer Cart Section */}
        <OfferCart />
        {/* Cart_Skeleton */}

        {/* All Cart Section */}
        <AllCart />
        {/* Cart_Skeleton */}
      </ScrollView>

      {/* Modal */}
      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setIsModalVisible(!isModalVisible)}
        isVisible={isModalVisible}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <ModalContent />
      </Modal>

      {/* StatusBar */}
      <StatusBar style="dark" />
    </View>
  );
};

export default HomePage;
