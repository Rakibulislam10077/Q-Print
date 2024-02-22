import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../../constants/GlobalStyle';
import HomePageTopCon from '../../components/homePageTopCon/HomePageHeader';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { homePageStyle } from './HomePageStyle';
import { Magnify } from '../../../assets/allSvg/AllSvg';
import BrandInHome from '../../components/brandInHome/BrandInHome';
import Carousel from '../../components/carousel/Carousel';
import OfferCart from '../../components/card/offeredCart/OfferCart';
import AllCart from '../../components/card/allCart/AllCart';
import ModalContent from '../../pages/homePage/modalComponents/ModalContent';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Modal from 'react-native-modal';

const Home = () => {
  const navigation: any = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
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
          </Animated.View>

          {/* Brand Logo Container */}
          <BrandInHome />
          {/* Brand_Skeleton */}
          {/* <Brand_Skeleton /> */}
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
    </View>
  );
};

export default Home;
