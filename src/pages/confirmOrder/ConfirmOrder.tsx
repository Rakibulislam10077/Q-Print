/**
 * ConfirmOrder Component
 *
 * This component displays the confirmation of a successful booking order,
 * including details of the transaction and an option to view the order.
 *
 * Features:
 * - Header section includes a common header component with the title "Booking Confirmation".
 * - Animated transitions for displaying the success logo and transaction details.
 * - Provides information such as total amount paid, payment method, transaction date, and transaction number.
 * - Offers a button to view the order details.
 * - Utilizes TouchableOpacity, ScrollView, and Linear Gradient for interactive elements.
 * - Integrates with navigation to navigate between screens.
 * - Utilizes Animated for animations like BounceIn and FadeInDown.
 *
 * @returns JSX.Element
 */

import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import { confirmOrderStyle } from './ConfirmOrderStyle';
import { SuccessPageLogo } from '../../constants/allSvg/AllSvg';
import { Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { BounceIn, FadeInDown } from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';

const ConfirmOrder = () => {
  return (
    <View style={confirmOrderStyle.container}>
      {/* common header component */}
      <CommonHeader title="Booking Confirmation" />

      {/* Body Section */}
      <ScrollView style={{ flex: 1, paddingBottom: 100 }}>
        <View style={confirmOrderStyle.bodyContainer}>
          {/* Success Logo and Text */}
          <Animated.View style={confirmOrderStyle.logoContainer}>
            <Animated.View entering={BounceIn.delay(100).duration(600)}>
              <SuccessPageLogo />
            </Animated.View>
            <Text style={confirmOrderStyle.orderPayment}>Order Payment Success</Text>
            <Text style={confirmOrderStyle.desc}>
              Your payment has been processed. Details of the transaction are included below.
            </Text>
          </Animated.View>

          {/* Transaction Details */}
          <View>
            {/* Total Amount Paid */}
            <Animated.View entering={FadeInDown.delay(50).duration(500)}>
              <Animated.View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>Total Amount Paid</Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>QR 700</Text>
              </Animated.View>

              {/* Divider */}
              <Divider />

              {/* Pay with */}
              <Animated.View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>Pay with</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../../../assets/image/visa-logo.png')} />
                  <Text style={[confirmOrderStyle.totalPriceAndother, { marginLeft: 10 }]}>
                    Debit/VisaCard
                  </Text>
                </View>
              </Animated.View>

              {/* Divider */}
              <Divider />

              {/* Transaction Date */}
              <Animated.View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>Transaction Date</Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>22 Nov, 2023</Text>
              </Animated.View>

              <Divider />

              {/* Transaction Number */}
              <View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>Transaction Number</Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>1574OISHD514</Text>
              </View>
            </Animated.View>
          </View>

          {/* View Order Button */}
          <TouchableOpacity style={confirmOrderStyle.viewOrderButton}>
            <Text style={confirmOrderStyle.buttonText}>View Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Okay Button */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#C83B62', '#7F35CD']}
        style={confirmOrderStyle.linearGradientStyle}
      >
        <TouchableOpacity style={confirmOrderStyle.buttonActionLayer}>
          <Text style={confirmOrderStyle.OkeyButtonText}>Okay</Text>
        </TouchableOpacity>
      </LinearGradient>
      <StatusBar style="dark" />
    </View>
  );
};

export default ConfirmOrder;
