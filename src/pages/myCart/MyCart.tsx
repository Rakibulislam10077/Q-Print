/**
 * MyCart Component:
 * This component represents the shopping cart screen, displaying a list of items added to the cart,
 * the total price, a progress bar indicating the amount spent towards free shipping, and a button to proceed to checkout.
 * It also includes an animated congratulatory message upon reaching the target amount.
 *
 * State:
 * - currentAmount: Represents the current total amount in the cart.
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

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AddToCart from '../../components/addToCart/AddToCart';
import { BackArrow } from '../../constants/allSvg/AllSvg';
import { myCartStyle } from './MyCartStyle';
import { useNavigation } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { commonHeaderStyle } from '../../components/common/commonHeader/CommonHeaderStyle';
import { Color } from '../../constants/GlobalStyle';
import LottieView from 'lottie-react-native';

const MyCart = () => {
  const navigation: any = useNavigation();

  // State variables to track current and target amounts
  const [currentAmount, setCurrentAmount] = useState(9000);
  const targetAmount = 10000;

  // Effect to initialize progress animation when currentAmount changes
  useEffect(() => {
    // Ensure the progress animation starts from 0 when currentAmount is initially set to 0
    if (currentAmount === 0) {
      animatedProgress.value = withTiming(0, { duration: 1000 });
    }
  }, [currentAmount]);

  // Calculate the percentage progress towards the target amount
  const percentageProgress =
    currentAmount === 0 ? 0 : Math.round((currentAmount / targetAmount) * 100);

  // Shared value for animated progress
  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    if (currentAmount < targetAmount) {
      setCurrentAmount(currentAmount + 100); // Increase by 100 for demonstration purposes
      animatedProgress.value = withTiming((currentAmount + 100) / targetAmount, { duration: 1000 });
    }
  }, []);

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
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1]}
        renderItem={({ i }: any) => {
          return <AddToCart />;
        }}
      />

      {/* Total price, progress bar, free shipping information, and proceed to checkout button */}
      <View style={myCartStyle.totalPriceAndProgressCon}>
        {/* Display the grand total */}
        <View style={myCartStyle.grandTotalCon}>
          <Text>Grand Total</Text>
          <Text>
            1855 <Text>QAR</Text>
          </Text>
        </View>

        {/* Display the progress bar */}
        <View style={{ position: 'relative' }}>
          <View
            style={{
              width: '100%',
              height: 5,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: Color.C_border,
            }}
          >
            <Animated.View style={progressStyle}>
              <View
                style={{
                  position: 'absolute',
                  right: -22,
                  borderRadius: 15,
                  width: 24,
                  height: 24,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  top: -10,
                  borderColor: Color.C_main,
                }}
              >
                <Text style={{ fontSize: 14 }}>{percentageProgress}</Text>
              </View>
            </Animated.View>
          </View>
        </View>

        {/* Display information about free shipping */}
        <Text style={myCartStyle.freeShippingText}>
          Spend <Text style={{ color: '#C83B62', fontWeight: '600' }}>3000</Text> more to reach{' '}
          <Text style={{ color: '#000' }}>FREE SHIPPING!</Text>
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
      {currentAmount === targetAmount && (
        <View style={myCartStyle.lottieConStyle}>
          <LottieView
            autoPlay
            source={require('../../../assets/image/cong3.json')}
            style={myCartStyle.lottieStyle}
          />
        </View>
      )}
      <StatusBar style="dark" />
    </View>
  );
};

export default MyCart;
