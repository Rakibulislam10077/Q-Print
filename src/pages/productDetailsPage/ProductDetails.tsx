import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  CartBag,
  CartIcon,
  FavIcon,
  Goback,
  InActiveIndicator,
} from "../../constants/allSvg/AllSvg";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { productDetailsStyle } from "./ProductDetailsStyle";
// import SkeletonInProductDetails from "../../components/allSkeleton/SkeletonInProductDetails";
import ProductSpec from "../../components/productSpec/ProductSpec";
import ProductDesc from "../../components/productDesc/ProductDesc";
import ProductReviews from "../../components/productReviews/ProductReviews";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../../constants/GlobalStyle";

const HEADER_HEIGHT = 200;
const ProductDetails = (props: any) => {
  const item: any = props?.route?.params;
  const navigation: any = useNavigation();
  const [index, setIndex] = useState<number>(0);
  const [isViewMore, setIsViewMore] = useState<boolean>(true);
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false);
    }, 1000);
  }, []);

  const highLightedInfo = [1, 2, 3, 4];

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
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
      // style={{ flex: 1 }}
      // ref={scrollViewRef}
      // onScroll={handleScroll}
      // scrollEventThrottle={16}
      >
        <Animated.View style={productDetailsStyle.imageAndNavContainer}>
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
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={productDetailsStyle.navAndFav}
                >
                  <FavIcon />
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
          {/* <Animated.View style={}>
                <Image
                  source={require("../../../assets/image/smartlock.jpeg")}
                  style={{ flex: 1, resizeMode: "cover" }}
                />
              </Animated.View> */}
          <Animated.View>
            <Animated.Image
              sharedTransitionTag={`img${item?.id}`}
              source={item?.item?.img}
              style={[
                {
                  width: "90%",
                  height: 280,
                  alignSelf: "center",
                  // position: "absolute",
                  // top: 0,
                  // left: 0,
                },
                // animatedImageStyle,
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
            <View style={productDetailsStyle.inStockContainer}>
              <InActiveIndicator />
              <Text style={productDetailsStyle.inStockText}>In stock</Text>
            </View>
            <Text style={productDetailsStyle.verticalDivider}>|</Text>
            <Text style={productDetailsStyle.ratingText}>
              ⭐<Text style={productDetailsStyle.ratingNumber}>(4.5)</Text>
            </Text>
            <Text style={productDetailsStyle.verticalDivider}>|</Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["rgba(200, 59, 98, 0.15)", "rgba(127, 53, 205, 0.15)"]}
              style={productDetailsStyle.discountTextCon}
            >
              <Text style={productDetailsStyle.discountPercent}>30% OFF</Text>
            </LinearGradient>
          </Animated.View>
          <Animated.Text
            entering={FadeInDown.delay(50).duration(500)}
            numberOfLines={2}
            style={productDetailsStyle.title}
          >
            {item?.title} Brother HL-L3270CDW Single Function Color Laser
            Printer
          </Animated.Text>
          <Animated.View
            entering={FadeInDown.delay(50).duration(500)}
            style={productDetailsStyle.productIdandDisc}
          >
            <View style={productDetailsStyle.brandLogoContainer}>
              <Image
                style={productDetailsStyle.brandLogo}
                source={require("../../../assets/image/adidas.png")}
              />
            </View>
            <Text style={productDetailsStyle.brandName}>Brother</Text>
          </Animated.View>
          {/*
            =================================
            =================================
                available color container
            =================================
            =================================
             */}
          <View style={productDetailsStyle.colorIndicatorCon}>
            <TouchableOpacity
              style={productDetailsStyle.colorIndicator}
            ></TouchableOpacity>
            <TouchableOpacity
              style={productDetailsStyle.colorIndicator}
            ></TouchableOpacity>
            <TouchableOpacity
              style={productDetailsStyle.colorIndicator}
            ></TouchableOpacity>
            <TouchableOpacity
              style={productDetailsStyle.colorIndicator}
            ></TouchableOpacity>
          </View>
          <Animated.View
            entering={FadeInDown.delay(50).duration(500)}
            style={productDetailsStyle.priceContainer}
          >
            <Text style={productDetailsStyle.currentPrice}>
              {item?.price}
              <Text style={productDetailsStyle.productPrice}>
                594439 <Text style={productDetailsStyle.currency}>QAR</Text>
              </Text>
            </Text>
            {/* offer QAR */}
            <Text style={productDetailsStyle.discountedPrice}>
              1560{" "}
              <Text style={productDetailsStyle.discountedCurrency}>QAR</Text>
            </Text>
            {/* quantity Container */}
            <View style={productDetailsStyle.quantityCon}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["rgba(200, 59, 98, 0.15)", "rgba(127, 53, 205, 0.15)"]}
                style={productDetailsStyle.increaseDecreaseButton}
              >
                <TouchableOpacity
                  onPress={() => decrease()}
                  style={productDetailsStyle.inDecActionLayer}
                >
                  <Text style={productDetailsStyle.minusPlusText}>-</Text>
                </TouchableOpacity>
              </LinearGradient>
              <Text style={productDetailsStyle.quantity}>{quantity}</Text>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["rgba(200, 59, 98, 0.15)", "rgba(127, 53, 205, 0.15)"]}
                style={productDetailsStyle.increaseDecreaseButton}
              >
                <TouchableOpacity
                  onPress={() => increase()}
                  style={productDetailsStyle.inDecActionLayer}
                >
                  <Text style={productDetailsStyle.minusPlusText}>+</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </Animated.View>
        </View>
        {/* view more information container */}
        <View style={productDetailsStyle.highLightedInfo}>
          {/* ========================= */}
          {highLightedInfo.map((i) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={productDetailsStyle.highLightedInfoItem}
              >
                <View style={productDetailsStyle.highLightedInfoItemLogoCon}>
                  <Image
                    style={productDetailsStyle.highLightedInfoItemLogo}
                    source={require("../../../assets/image/lock.jpeg")}
                  />
                </View>
                <View style={{ backgroundColor: "white" }}>
                  <Text style={productDetailsStyle.highLightedInfoItemName}>
                    Processor
                  </Text>
                  <Text style={productDetailsStyle.highLightedInfoItemSpec}>
                    800MHz
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ marginBottom: 200, flex: 1 }}>
          {isViewMore && (
            <Animated.View entering={FadeInRight.delay(100).duration(500)}>
              <View style={productDetailsStyle.navigationContainer}>
                <TouchableOpacity
                  style={[
                    index === 0
                      ? productDetailsStyle.activeNavigation
                      : productDetailsStyle.defaultNavigation,
                  ]}
                  onPress={() => setIndex(0)}
                >
                  <Text
                    style={[
                      index === 0
                        ? { color: Color.C_main }
                        : { color: Color.C_H_black },
                    ]}
                  >
                    Specification
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    index === 1
                      ? productDetailsStyle.activeNavigation
                      : productDetailsStyle.defaultNavigation,
                  ]}
                  onPress={() => setIndex(1)}
                >
                  <Text
                    style={[
                      index === 1
                        ? { color: Color.C_main }
                        : { color: Color.C_H_black },
                    ]}
                  >
                    Description
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    index === 2
                      ? productDetailsStyle.activeNavigation
                      : productDetailsStyle.defaultNavigation,
                  ]}
                  onPress={() => setIndex(2)}
                >
                  <Text
                    style={[
                      index === 2
                        ? { color: Color.C_main }
                        : { color: Color.C_H_black },
                    ]}
                  >{`Reviews ${index === 2 ? "" : "(0)"}`}</Text>
                </TouchableOpacity>
              </View>
              {index === 0 ? (
                <ProductSpec />
              ) : index === 1 ? (
                <ProductDesc />
              ) : (
                index === 2 && <ProductReviews />
              )}
            </Animated.View>
            // <TopTab />
          )}
        </View>
        {/* fixed buy now button and price */}
      </ScrollView>
      <View style={productDetailsStyle.BuyNowButtonAndPriceContainer}>
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
            colors={["rgba(200, 59, 98, 0.80)", "rgba(127, 53, 205, 0.80)"]}
            style={productDetailsStyle.linearButton}
          >
            <TouchableOpacity style={productDetailsStyle.buyButton}>
              <Text style={productDetailsStyle.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("MyCart")}
            style={productDetailsStyle.cartButton}
          >
            <CartBag />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
  },
});
