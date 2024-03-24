/**
 * MyCart Component Comment:
 *
 * This component serves as the shopping cart screen in the application. It displays a list of items added to the cart,
 * the total price, a progress bar indicating the amount spent towards free shipping, and a button to proceed to checkout.
 * Additionally, it includes an animated congratulatory message upon reaching the target amount for free shipping.
 *
 * State:
 * - subTatal: Represents the current total amount in the cart.
 * - targetAmount: Represents the target amount for free shipping.
 * - percentageProgress: Calculates the percentage progress towards the target amount.
 * - animatedProgress: Shared value for animated progress bar.
 *
 * Navigation:
 * - navigation: React Navigation hook used for navigation between screens.
 *
 * Usage Example:
 * ```jsx
 * import MyCart from './MyCart';
 * <MyCart />
 * ```
 */

import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AddToCart from '../../components/addToCart/AddToCart';
import { BackArrow } from '../../../assets/allSvg/AllSvg';
import { myCartStyle } from './MyCartStyle';
import { useNavigation } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { commonHeaderStyle } from '../../components/common/commonHeader/CommonHeaderStyle';
import { Color } from '../../constants/GlobalStyle';
import LottieView from 'lottie-react-native';
import { useAppSelector } from '../../redux/hook';

const MyCart = () => {
  const navigation: any = useNavigation();
  const [isLottie, setIsLottie] = useState<boolean>(true);
  const [shouldPlayLottie, setShouldPlayLottie] = useState<boolean>(true);

  const { products } = useAppSelector((state) => state.cart);
  console.log(JSON.stringify(products, null, 2));

  const subTotal = products?.reduce((total: number, product: any) => {
    return total + product?.variants[0]?.sellingPrice * product?.quantity;
  }, 0);

  const animation = useRef<any>(null);
  // State variables to track current and target amounts
  const targetAmount = 1000;
  // Calculate the percentage progress towards the target amount
  const percentageProgress = subTotal === 0 ? 0 : Math.round((subTotal / targetAmount) * 100);
  // Shared value for animated progress
  const animatedProgress = useSharedValue(0);
  // Effect to initialize progress animation when subTatal changes
  useEffect(() => {
    const percentage = Math.min(100, Math.round((subTotal / targetAmount) * 100));
    animatedProgress.value = withTiming(percentage / 100, { duration: 1000 });
  }, [subTotal, targetAmount]);
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

  useEffect(() => {
    // This effect runs when the component mounts.
    // It plays the Lottie animation once after a delay of 500 milliseconds.
    if (shouldPlayLottie) {
      setTimeout(() => {
        animation.current?.play();
        setShouldPlayLottie(false);
      }, 200);
    }
  }, [shouldPlayLottie]);

  useEffect(() => {
    setTimeout(() => {
      setIsLottie(false);
    }, 2500);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Common Header Container */}
      <View style={commonHeaderStyle.container}>
        <View style={commonHeaderStyle.titleCon}>
          <TouchableOpacity
            style={commonHeaderStyle.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <BackArrow />
          </TouchableOpacity>
          <Text style={commonHeaderStyle.title}>My Cart</Text>
        </View>
      </View>

      {/* FlatList to render cart items */}
      <Animated.FlatList
        data={products}
        renderItem={({ item }: any) => {
          return <AddToCart item={item} />;
        }}
      />

      {/* Total price, progress bar, free shipping information, and proceed to checkout button */}
      <View style={myCartStyle.totalPriceAndProgressCon}>
        {/* Display the grand total */}
        <View style={myCartStyle.grandTotalCon}>
          <Text>Grand Total</Text>
          <Text>
            {subTotal} <Text>QAR</Text>
          </Text>
        </View>

        {/* Display the progress bar */}
        <View style={{ position: 'relative' }}>
          <View style={myCartStyle.customProgressBG}>
            <Animated.View style={progressStyle}>
              <View style={myCartStyle.percentageValueCon}>
                {subTotal >= targetAmount ? (
                  <Text style={{ fontSize: 12 }}>100</Text>
                ) : (
                  <Text style={{ fontSize: 12 }}>{percentageProgress}</Text>
                )}
              </View>
            </Animated.View>
          </View>
        </View>

        {/* Display information about free shipping */}
        <Text style={myCartStyle.freeShippingText}>
          Spend <Text style={{ color: '#C83B62', fontWeight: '600' }}>{targetAmount}</Text> more to
          reach <Text style={{ color: '#000' }}>FREE SHIPPING!</Text>
        </Text>

        {/* Display the button to proceed to checkout */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['#C83B62', '#7F35CD']}
          style={myCartStyle.linearContainer}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Summery')}
            style={myCartStyle.proceedButton}
          >
            <Text style={myCartStyle.proceedText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Display the congratulation lottie */}
      {subTotal >= targetAmount && (
        <View style={myCartStyle.lottieConStyle}>
          {isLottie && (
            <LottieView
              loop={false}
              ref={animation}
              source={require('../../../assets/image/cong3.json')}
              style={myCartStyle.lottieStyle}
            />
          )}
        </View>
      )}
      <StatusBar style="dark" />
    </View>
  );
};

export default MyCart;
