import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  CartBag,
  CartIcon,
  FavIcon,
  Goback,
  InActiveIndicator,
} from '../../../assets/allSvg/AllSvg';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

import { productDetailsStyle } from './ProductDetailsStyle';
// import SkeletonInProductDetails from "../../components/allSkeleton/SkeletonInProductDetails";
import ProductSpec from '../../components/productSpec/ProductSpec';
import ProductDesc from '../../components/productDesc/ProductDesc';
import ProductReviews from '../../components/productReviews/ProductReviews';
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '../../constants/GlobalStyle';
import ProductDetailsTopTab from '../../routes/material_Tab/ProductDetailsTopTab';
import { connect } from 'react-redux'; // Import connect from react-redux
import { IProduct } from '../../types/interfaces/product.interface';

const HEADER_HEIGHT = 200;
const ProductDetails = (props: IProduct) => {
  const item: IProduct = props?.route?.params;
  const navigation: any = useNavigation();
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(0);

  const { height } = Dimensions.get('screen');

  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false);
    }, 1000);
  }, []);

  // const scrollY = useSharedValue(0);
  // const scrollViewRef = useRef(null);

  // const scrollHandler = useAnimatedScrollHandler({
  //   onScroll: (event) => {
  //     scrollY.value = event.contentOffset.y;
  //   },
  // });

  // const imagePositionX = useSharedValue(0);

  // const animatedImageStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateX: withSpring(imagePositionX.value) }],
  //   };
  // });

  // const handleScroll = (event: any) => {
  //   scrollHandler(event);
  //   const offsetY = event.nativeEvent.contentOffset.y;

  //   // Adjust these values based on your specific requirements
  //   const triggerThreshold = 100;
  //   const targetPositionX = -100;

  //   if (offsetY > triggerThreshold) {
  //     imagePositionX.value = targetPositionX;
  //   } else {
  //     imagePositionX.value = 0;
  //   }
  // };

  const increase = () => {
    const value = quantity + 1;
    setQuantity(value);
  };
  const decrease = () => {
    const value = quantity - 1;
    setQuantity(value);
  };

  // =========================================
  // =========================================

  console.log(JSON.stringify(item?.productPhotos, null, 2));

  return (
    <View style={{ height: height, backgroundColor: Color.C_white }}>
      <Animated.ScrollView scrollEventThrottle={16}>
        <Animated.View style={[productDetailsStyle.imageAndNavContainer]}>
          <View style={productDetailsStyle.navigationAndFavCon}>
            <Animated.View entering={FadeInLeft.duration(500).delay(50)}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
                style={productDetailsStyle.navAndFav}
              >
                <Goback />
              </TouchableOpacity>
            </Animated.View>
            <View style={productDetailsStyle.favAndCartCon}>
              <Animated.View entering={FadeInRight.duration(500).delay(50)}>
                <TouchableOpacity activeOpacity={0.7}>
                  <CartBag />
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInRight.duration(500).delay(50)}>
                <TouchableOpacity activeOpacity={0.7} style={productDetailsStyle.navAndFav}>
                  <FavIcon />
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
          <Animated.View>
            {/* ============================================ */}
            {/* ============================================ */}
            <Animated.Image
              sharedTransitionTag={`img${item?._id}`}
              source={{ uri: `5.182.33.12:5000${item?.productPhotos}` }}
              style={[
                {
                  width: '90%',
                  height: 280,
                  alignSelf: 'center',
                },
                // imageAnime,
              ]}
            />
          </Animated.View>
        </Animated.View>
        {/* price and quantity container */}
        <View style={productDetailsStyle.description}>
          <Animated.View
            entering={FadeInDown.delay(50).duration(500)}
            style={productDetailsStyle.ratingContainer}
          >
            {item?.defaultVariant?.inStock > 0 && (
              <View style={productDetailsStyle.inStockContainer}>
                <InActiveIndicator />
                <Text style={productDetailsStyle.inStockText}>In stock</Text>
              </View>
            )}
            <Text style={productDetailsStyle.verticalDivider}>|</Text>
            <Text style={productDetailsStyle.ratingText}>
              ⭐<Text style={productDetailsStyle.ratingNumber}>(4.5)</Text>
            </Text>
            <Text style={productDetailsStyle.verticalDivider}>|</Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['rgba(200, 59, 98, 0.15)', 'rgba(127, 53, 205, 0.15)']}
              style={productDetailsStyle.discountTextCon}
            >
              <Text style={productDetailsStyle.discountPercent}>
                {item?.defaultVariant.discountPercentage}% off
              </Text>
            </LinearGradient>
          </Animated.View>
          <Animated.Text
            entering={FadeInDown.delay(50).duration(500)}
            numberOfLines={2}
            style={productDetailsStyle.title}
          >
            {item?.productName}
          </Animated.Text>
          <Animated.View
            entering={FadeInDown.delay(50).duration(500)}
            style={productDetailsStyle.productIdandDisc}
          >
            <View style={productDetailsStyle.brandLogoContainer}>
              {item?.productPhotos.map((img) => {
                console.log(img, '=======================12==1=2=1=2=1=2=12==12=1=2=1=2=');

                return (
                  <Image
                    style={productDetailsStyle.brandLogo}
                    source={{ uri: `5.182.33.12:5000${img}` }}
                  />
                );
              })}
            </View>
            <Text style={productDetailsStyle.brandName}>{item?.brand?.brandName}</Text>
          </Animated.View>
          {/*
            =================================
            =================================
                available color container
            =================================
            =================================
             */}
          {/* <View style={productDetailsStyle.colorIndicatorCon}>
            <TouchableOpacity style={productDetailsStyle.colorIndicator}></TouchableOpacity>
            <TouchableOpacity style={productDetailsStyle.colorIndicator}></TouchableOpacity>
            <TouchableOpacity style={productDetailsStyle.colorIndicator}></TouchableOpacity>
            <TouchableOpacity style={productDetailsStyle.colorIndicator}></TouchableOpacity>
          </View> */}
          <Animated.View
            entering={FadeInDown.delay(50).duration(500)}
            style={productDetailsStyle.priceContainer}
          >
            <Text style={productDetailsStyle.currentPrice}>
              <Text style={productDetailsStyle.productPrice}>
                {item?.defaultVariant?.discountedPrice}{' '}
                <Text style={productDetailsStyle.currency}>QAR</Text>
              </Text>
            </Text>
            {/* offer QAR */}
            <Text style={productDetailsStyle.discountedPrice}>
              {item?.defaultVariant?.sellingPrice}{' '}
              <Text style={productDetailsStyle.discountedCurrency}>QAR</Text>
            </Text>
            {/* quantity Container */}
            <View style={productDetailsStyle.quantityCon}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['rgba(200, 59, 98, 0.15)', 'rgba(127, 53, 205, 0.15)']}
                style={productDetailsStyle.increaseDecreaseButton}
              >
                <TouchableOpacity
                  onPress={() => decrease()}
                  style={productDetailsStyle.inDecActionLayer}
                >
                  <AntDesign name="minus" size={20} color="black" />
                </TouchableOpacity>
              </LinearGradient>
              <View style={productDetailsStyle.quantityBox}>
                <Text>{quantity}</Text>
              </View>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['rgba(200, 59, 98, 0.15)', 'rgba(127, 53, 205, 0.15)']}
                style={productDetailsStyle.increaseDecreaseButton}
              >
                <TouchableOpacity
                  onPress={() => increase()}
                  style={productDetailsStyle.inDecActionLayer}
                >
                  <AntDesign name="plus" size={20} color="black" />
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </Animated.View>
        </View>
        {/* view more information container */}
        <View style={{ height: height - 100 }}>
          {/* hey chatgpt this is my material top tab component
          please solve my problem
          */}

          <ProductDetailsTopTab item={item} />
        </View>
      </Animated.ScrollView>
      {/* fixed buy now button and price */}
      {/* <View style={productDetailsStyle.BuyNowButtonAndPriceContainer}>
        <View style={productDetailsStyle.totalPriceConInfixedButtonBox}>
          <Text style={productDetailsStyle.totalPrice}>Total price</Text>
          <Text style={productDetailsStyle.productPrice}>
            <Text style={{}}>QAR</Text> 95748
          </Text>
        </View>
        <View style={productDetailsStyle.buyButtonAndCartCon}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['rgba(200, 59, 98, 0.80)', 'rgba(127, 53, 205, 0.80)']}
            style={productDetailsStyle.linearButton}
          >
            <TouchableOpacity style={productDetailsStyle.buyButton}>
              <Text style={productDetailsStyle.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('MyCart')}
            style={productDetailsStyle.cartButton}
          >
            <CartBag />
          </TouchableOpacity>
        </View>
      </View> */}
      <StatusBar style="dark" />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  item: state.item, // Assuming you have an item reducer that stores the item data
});

// const mapDispatchToProps = (dispatch: any) => ({
//   fetchData: () => dispatch(fetchData()), // Dispatch the action to fetch data
// });

export default connect(mapStateToProps)(ProductDetails);

// export default ProductDetails;
