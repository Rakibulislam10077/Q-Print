import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Color } from '../../constants/GlobalStyle';
import HomePageTopCon from '../../components/homePageTopCon/HomePageHeader';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { homePageStyle } from './HomePageStyle';
import { Magnify } from '../../../assets/allSvg/AllSvg';
import Carousel from '../../components/carousel/Carousel';
import OfferCart from '../../components/card/offeredCart/OfferCart';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Brand from '../../components/brandInHome/Brand';
import HomePageProductCateTitle from '../../components/common/homePageProductCategory/HomePageProductCateTitle';
import { IProduct } from '../../types/interfaces/product.interface';
import Cart from '../../components/card/allCart/Cart';
import Brand_Skeleton from '../../components/skeleton/Home.Brand_Skeleton';
import Carousel_Skeleton from '../../components/skeleton/Carousel_Skeleton';
import { getuserInfo } from '../../services/auth.service';
import { useGetProductsQuery } from '../../redux/api/prductSlice';
import { useGetBrandQuery } from '../../redux/api/brandSlice';

type HomeProps = {
  handleScroll: (event: any) => void;
};

const Home = () => {
  const navigation: any = useNavigation();
  const { data: brandData, isLoading: isBrandLoading } = useGetBrandQuery(undefined);
  const { data: productData, isLoading: loadingProduct } = useGetProductsQuery(undefined);

  // const test = async () => {
  //   console.log('from home page', await getuserInfo());
  // };
  // test();

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
          <Animated.FlatList
            entering={FadeInRight.delay(50).duration(245)}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
            data={brandData?.data}
            renderItem={({ item }) => {
              return <Brand item={item} />;
            }}
          />
          {/* Brand_Skeleton */}
          {isBrandLoading && <Brand_Skeleton />}
          {/* Custom Carousel */}
          {!isBrandLoading ? <Carousel /> : <Carousel_Skeleton />}
          {/* Offer Cart Section */}
          <OfferCart />
          {/* Cart_Skeleton */}

          {/* All Cart Section */}
          <View style={homePageStyle.cordContainer}>
            {/* Renders the title and subtitle */}
            <HomePageProductCateTitle title="Printers, Cartridge, Ink" subTitle="see all" />
            {/* Maps over the data and renders individual Cart components */}
            {productData?.data?.map((item: IProduct, index: number) => {
              return <Cart key={item?._id} item={item} />;
            })}
          </View>
          {/* Cart_Skeleton */}
        </ScrollView>
        {/* StatusBar */}
        <StatusBar style="dark" />
      </View>
    </View>
  );
};

export default Home;
