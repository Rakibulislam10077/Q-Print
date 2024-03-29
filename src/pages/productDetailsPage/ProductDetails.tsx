import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActiveFavIcon,
  CartBag,
  FavIcon,
  Goback,
  InActiveIndicator,
} from '../../../assets/allSvg/AllSvg';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { productDetailsStyle } from './ProductDetailsStyle';
// import SkeletonInProductDetails from "../../components/allSkeleton/SkeletonInProductDetails";
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '../../constants/GlobalStyle';
import ProductDetailsTopTab from '../../routes/material_Tab/ProductDetailsTopTab'; // Import connect from react-redux

import { FlatList } from 'react-native-gesture-handler';
import ProductDetailSkeleton from '../../components/skeleton/ProductDetails.skeleton';
import { useGetProductQuery } from '../../redux/api/apiSlice';
import { addToCart } from '../../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addAndRemoveFavorite, removeFromFavorite } from '../../redux/features/addFavourite';
import ProgressBar from '../../components/progressbar/ProgressBar';
import Counter from '../../components/quantityCounter/Counter';
import ProductDetailsDesc from '../../components/productDetailsDesc/ProductDetails.description';
import { Badge } from 'react-native-paper';
import { IProduct } from '../../types/interfaces/product.interface';
import { useGetProductByIdQuery, useGetQueryProductQuery } from '../../redux/api/productSlice';
import Cart from '../../components/card/allCart/Cart';

const ProductDetails: React.FC<IProduct> = (props) => {
  //@ts-ignore
  const productId = props?.route?.params;
  const { data } = useGetProductByIdQuery(productId?.productId);
  const productData = data?.data;
  console.log('product data get by id', JSON.stringify(productData?.brand?.brandName, null, 2));

  const { data: relatedProduct } = useGetQueryProductQuery(
    `brand.brandName=${productData?.brand?.brandName}`
  );
  const navigation: any = useNavigation();
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  const [addFavorite, setAddFavorite] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);

  const { height } = Dimensions.get('screen');
  const { isLoading } = useGetProductQuery(undefined);
  const animatedY = useSharedValue(0);
  const animatedX = useSharedValue(0);
  const scale = useSharedValue(0);
  const scale2 = useSharedValue(0);

  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.products);
  // const { favorites } = useAppSelector((state) => state.favorite);

  const addCart = (product: IProduct) => {
    dispatch(addToCart({ ...product, variant: selectedVariant }));
  };

  const addRemoveFavorite = async (data: any) => {
    dispatch(addAndRemoveFavorite(data));
    setAddFavorite(false);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: animatedX.value },
        { translateY: animatedY.value },
        { scale: scale.value },
      ],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale2.value }],
    };
  });

  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false);
    }, 1000);
  }, []);

  const increase = () => {
    if (animatedX.value === 0) {
      scale.value = 1;
      animatedY.value = withTiming(-770, { duration: 500 });
      animatedX.value = withTiming(-30, { duration: 500 });
      setTimeout(() => {
        scale.value = 0;
        // setQuantity(products?.length + 1);
        scale2.value = withSpring(1.5);
        animatedY.value = withTiming(0, { duration: 500 });
        animatedX.value = withTiming(0, { duration: 500 });
        setTimeout(() => {
          scale2.value = withSpring(1);
        }, 150);
      }, 500);
    }
  };

  const decrease = () => {
    const value = products?.length - 1;
    setQuantity(value);
  };

  let totalPrice: number | undefined;

  if (selectedVariant && selectedVariant.discountedPrice !== undefined) {
    totalPrice = selectedVariant.discountedPrice * quantity;
  } else {
    const defaultVariant = productData?.variants?.find((variant: any) => variant.isDefault);
    if (defaultVariant && defaultVariant.discountedPrice !== undefined) {
      totalPrice = defaultVariant.discountedPrice * quantity;
    } else {
      totalPrice = undefined;
    }
  }

  const filterRelatedData = relatedProduct?.data?.filter(
    (product: any) => product?._id !== productData?._id
  );

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
                <TouchableOpacity onPress={() => navigation.navigate('MyCart')} activeOpacity={0.7}>
                  <CartBag />
                  <Badge style={{ position: 'absolute', top: -12, right: -5 }}>
                    {products?.length}
                  </Badge>
                  <Animated.View style={[productDetailsStyle.badge, animatedStyle2]}>
                    {products?.length ? (
                      <Text style={productDetailsStyle.badgeText}>{products?.length}</Text>
                    ) : (
                      <Text>0</Text>
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View entering={FadeInRight.duration(500).delay(50)}>
                <TouchableOpacity
                  onPress={() => {
                    addRemoveFavorite(productData);
                  }}
                  activeOpacity={0.7}
                  style={productDetailsStyle.navAndFav}
                >
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
                //@ts-ignore
                data={productData?.productPhotos}
                // keyExtractor={(index) => {}}
                renderItem={({ item: img }) => {
                  return (
                    <Animated.Image
                      source={{ uri: `http://192.168.0.183:5000/${img}` }}
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
        {/* product details container here*/}
        {/* ================================================ */}
        {/* ================================================ */}
        <ProductDetailsDesc
          data={productData}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        {/* view more information container */}
        <View style={{ height: height - 200 }}>
          <ProductDetailsTopTab item={productData} />
        </View>

        <View style={{ marginBottom: 100 }}>
          <FlatList
            data={filterRelatedData}
            horizontal
            contentContainerStyle={{ paddingRight: 20 }}
            renderItem={({ item }) => {
              return <Cart item={item} />;
            }}
          />
        </View>
      </Animated.ScrollView>
      {/*
      related products
      ==================
      */}

      {/* 
related product ends here
========================
*/}
      {/* fixed buy now button and price */}
      <View style={productDetailsStyle.BuyNowButtonAndPriceContainer}>
        <View style={productDetailsStyle.totalPriceConInfixedButtonBox}>
          <Text style={productDetailsStyle.totalPrice}>Total price</Text>
          <Text style={productDetailsStyle.productPrice}>
            <Text style={{}}>{totalPrice}</Text> QAR
          </Text>
        </View>
        <View style={productDetailsStyle.buyButtonAndCartCon}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['rgba(200, 59, 98, 0.90)', 'rgba(127, 53, 205, 0.80)']}
            style={productDetailsStyle.linearButton}
          >
            <TouchableOpacity
              onPress={() => {
                let selectedVar;
                if (selectedVariant) {
                  selectedVar = selectedVariant;
                } else {
                  selectedVar = productData?.variants?.find(
                    (variant: any) => variant?.isDefault === true
                  );
                }

                navigation.navigate('Summery', {
                  ...productData,
                  variant: selectedVar,
                  quantity,
                });
              }}
              style={productDetailsStyle.buyButton}
            >
              <Text style={productDetailsStyle.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              addCart(productData);
              increase();
            }}
            style={productDetailsStyle.cartButton}
          >
            <CartBag />
          </TouchableOpacity>
          <Animated.View style={[productDetailsStyle.quantityAnimCon, animatedStyle]}>
            <Text style={productDetailsStyle.badgeText}>{'+1'}</Text>
          </Animated.View>
        </View>
      </View>
      <StatusBar style="dark" backgroundColor="#F8F3FB" />
    </View>
  );
};

export default ProductDetails;
