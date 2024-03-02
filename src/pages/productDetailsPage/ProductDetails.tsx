import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { CartBag, FavIcon, Goback, InActiveIndicator } from '../../../assets/allSvg/AllSvg';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

import { productDetailsStyle } from './ProductDetailsStyle';
// import SkeletonInProductDetails from "../../components/allSkeleton/SkeletonInProductDetails";
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '../../constants/GlobalStyle';
import ProductDetailsTopTab from '../../routes/material_Tab/ProductDetailsTopTab';
import { connect } from 'react-redux'; // Import connect from react-redux
import { IProduct } from '../../types/interfaces/product.interface';
import { FlatList } from 'react-native-gesture-handler';
import ProductDetailSkeleton from '../../components/skeleton/ProductDetails.skeleton';
import { useGetProductQuery } from '../../redux/api/apiSlice';
import * as ImageManipulator from 'expo-image-manipulator';
import { myCartStyle } from '../myCart/MyCartStyle';

const ProductDetails = (props: IProduct) => {
  const data: IProduct = props?.route?.params;
  const navigation: any = useNavigation();
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(0);
  const { height } = Dimensions.get('screen');
  const { isLoading } = useGetProductQuery(undefined);
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

  // useEffect(() => {
  //   const compressImage = async () => {
  //     try {
  //       const response = await fetch('');
  //       const blob = await response.blob();

  //       const compressedImage = await ImageManipulator.manipulateAsync(
  //         blob,
  //         [{ resize: { width: 200 } }], // Adjust dimensions as needed
  //         { compress: 0.2, format: 'jpeg' } // Adjust compression and format as needed
  //       );

  //       setCompressedImageURI(compressedImage.uri);
  //     } catch (error) {
  //       console.error('Error compressing image:', error);
  //     }
  //   };

  //   compressImage();
  // }, []);

  const [currentAmount, setCurrentAmount] = useState(20000);

  const animation = useRef<any>(null);
  // State variables to track current and target amounts
  const targetAmount = 30000;

  // Calculate the percentage progress towards the target amount
  const percentageProgress =
    currentAmount === 0 ? 0 : Math.round((currentAmount / targetAmount) * 100);

  // Shared value for animated progress
  const animatedProgress = useSharedValue(0);

  // Effect to initialize progress animation when currentAmount changes
  useEffect(() => {
    const percentage = Math.min(100, Math.round((currentAmount / targetAmount) * 100));
    animatedProgress.value = withTiming(percentage / 100, { duration: 1000 });
  }, [currentAmount, targetAmount]);

  // Animated style for the progress bar
  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedProgress.value * 100}%`,
      height: 5,
      backgroundColor: Color.C_main,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      position: 'relative',
    };
  });

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
            {isLoading ? (
              <ProductDetailSkeleton />
            ) : (
              <FlatList
                horizontal={true}
                contentContainerStyle={productDetailsStyle.contentContainerStyle}
                pagingEnabled={true}
                data={data?.productPhotos}
                // keyExtractor={(index) => {}}
                renderItem={({ item: img }) => {
                  return (
                    <Animated.Image
                      source={{ uri: `http://5.182.33.12:5000/${img}` }}
                      style={{
                        width: '100%',
                        height: 280,
                        alignSelf: 'center',
                      }}
                      // Add any other styles or animations as needed
                    />
                  );
                }}
              />
            )}
          </Animated.View>
        </Animated.View>
        {/* price and quantity container */}
        <View style={productDetailsStyle.description}>
          <Animated.View
            entering={FadeInDown.delay(50).duration(500)}
            style={productDetailsStyle.ratingContainer}
          >
            {data?.defaultVariant?.inStock > 0 ? (
              <View style={productDetailsStyle.inStockContainer}>
                <InActiveIndicator />
                <Text style={productDetailsStyle.inStockText}>In stock</Text>
              </View>
            ) : (
              <View style={productDetailsStyle.inStockContainer}>
                <InActiveIndicator />
                <Text style={[productDetailsStyle.inStockText, { color: Color.C_red }]}>
                  In stock
                </Text>
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
              {data?.defaultVariant?.discountPercentage && (
                <Text style={productDetailsStyle.discountPercent}>
                  {data?.defaultVariant.discountPercentage}% off
                </Text>
              )}
            </LinearGradient>
          </Animated.View>
          <Animated.Text
            entering={FadeInDown.delay(50).duration(500)}
            numberOfLines={2}
            style={productDetailsStyle.title}
          >
            {data?.productName}
          </Animated.Text>
          <Animated.View
            entering={FadeInDown.delay(50).duration(500)}
            style={productDetailsStyle.productIdandDisc}
          >
            <View style={productDetailsStyle.brandLogoContainer}>
              <Image
                style={productDetailsStyle.brandLogo}
                source={{ uri: `http://5.182.33.12:5000/${data?.brand?.brandPhoto}` }}
              />
            </View>
            <Text style={productDetailsStyle.brandName}>{data?.brand?.brandName}</Text>
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
                {data?.defaultVariant?.discountedPrice}{' '}
                <Text style={productDetailsStyle.currency}>QAR</Text>
              </Text>
            </Text>
            {/* offer QAR */}
            <Text style={productDetailsStyle.discountedPrice}>
              {data?.defaultVariant?.sellingPrice}{' '}
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
          <View style={{ position: 'relative' }}>
            <View style={productDetailsStyle.customProgressBG}>
              <Animated.View style={progressStyle}>
                <View style={productDetailsStyle.percentageValueCon}>
                  {currentAmount >= targetAmount ? (
                    <Text style={{ fontSize: 12 }}>100</Text>
                  ) : (
                    <Text style={{ fontSize: 12 }}>{percentageProgress}</Text>
                  )}
                </View>
              </Animated.View>
            </View>
          </View>
        </View>
        {/* view more information container */}
        <View style={{ height: height - 100 }}>
          {/* hey chatgpt this is my material top tab component
          please solve my problem
          */}

          <ProductDetailsTopTab item={data} />
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
