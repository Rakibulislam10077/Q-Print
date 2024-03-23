/**
 * Summery Component:
 * This component represents the summary page of the checkout process, where users can view their order summary,
 * shipping details, and proceed to payment.
 *
 * State:
 * - isDown: Tracks whether the shipping address box is expanded or collapsed.
 * - defaultLocation: Tracks whether to save the current location as the default shipping address.
 * - height: Shared value for controlling the height of the shipping address box animation.
 *
 * Navigation:
 * - navigation: React Navigation hook used for navigation between screens.
 *
 * Usage Example:
 * ```jsx
 * import Summery from './Summery';
 * <Summery />
 * ```
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import { Dropdown, UpArrow } from '../../../assets/allSvg/AllSvg';
import { useNavigation } from '@react-navigation/native';
import { summeryStyle } from './SummeryStyle';
import { Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import { Color } from '../../constants/GlobalStyle';
import Animated, {
  Easing,
  FadeInDown,
  FadeInLeft,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { AddressFormState } from '../../types/interfaces/signUpAndLogin.interface';
import { useAddAddressMutation } from '../../redux/api/addressSlice';

const Summery: React.FC = (props) => {
  const item = props?.route?.params;

  const navigation: any = useNavigation();
  const [isDown, setIsDown] = useState<boolean>(false);
  const [defaultLocation, setDefaultLocation] = useState<boolean>(false);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [formData, setFormData] = useState<AddressFormState>({
    firstName: '',
    lastName: '',
    streetAddress: '',
    state: '',
    // companyName: '',
    phoneNumber: '',
    zipCode: 0,
    country: 'Qatar',
    isDefault: true,
  });
  const [addAddress, { data, isSuccess, isError }] = useAddAddressMutation();
  const height = useSharedValue(100);

  const handleInputChange = (fieldName: any, value: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await addAddress({
        formData,
      });
    } catch (error) {}
  };

  const openBox = () => {
    height.value = withTiming(isDown ? 100 : 370 && !isDropdown ? 470 : 100, {
      duration: 450,
      easing: Easing.inOut(Easing.ease),
    });
    setIsDown(!isDown);
  };
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* CommonHeader Component: Renders a common header with the title "Checkout" */}
      <CommonHeader title="Checkout" />

      {/* ScrollView Component: Provides a scrollable view for the content */}
      <ScrollView>
        {/* Animated.View: Container for animated elements */}
        <Animated.View style={{ paddingTop: 20, paddingBottom: 100 }}>
          {/* Order Summary Box */}
          <Animated.View
            style={summeryStyle.topSummeryBox}
            entering={FadeInLeft.delay(50).duration(500)}
          >
            {/* Title for the Order Summary */}
            <Text style={summeryStyle.summeryTitle}>Order Summary</Text>

            {/* Subtotal Item */}
            <View style={summeryStyle.summeryItemBox}>
              <Text style={summeryStyle.summeryItemNormalText}>
                Subtotal
                <Text style={summeryStyle.summeryItemSmallText}>(3 item)</Text>
              </Text>
              <Text style={summeryStyle.summeryItemCurrency}>QR 3530.00</Text>
            </View>

            {/* Delivery Fee Item */}
            <View style={summeryStyle.summeryItemBox}>
              <Text style={summeryStyle.summeryItemNormalText}>Delivery Fee</Text>
              <Text style={summeryStyle.summeryItemCurrency}>QR 10.00</Text>
            </View>

            {/* Discount Item */}
            <View
              style={[
                summeryStyle.summeryItemBox,
                summeryStyle.borderBottomStyle,
                { paddingBottom: 20 },
              ]}
            >
              <Text style={summeryStyle.summeryItemNormalText}>
                Discount
                <Text style={summeryStyle.summeryItemSmallText}> (15%)</Text>
              </Text>
              <Text style={summeryStyle.summeryItemCurrency}>- QR 5.00</Text>
            </View>

            {/* Grand Total Item */}
            <View style={summeryStyle.grandTotalCon}>
              <Text style={summeryStyle.summeryItemNormalText}>Grand Total</Text>
              <Text style={summeryStyle.summeryCurrency}>QR 4545.00</Text>
            </View>
          </Animated.View>

          {/* Shipping Address Box */}
          <Animated.View
            style={summeryStyle.shiptoBox}
            entering={FadeInDown.delay(50).duration(500)}
          >
            {/* Title for the Shipping Address */}
            <Text style={summeryStyle.shipToText}>Ship to</Text>

            {/* Default Shipping Address */}
            <View
              style={[
                summeryStyle.shipToItem,
                { borderBottomColor: Color.C_H_black, borderBottomWidth: 1 },
              ]}
            >
              <Image source={require('../../../assets/image/location.png')} />
              <Text style={summeryStyle.shipToItemText}>Qatar Al Khor and Al Thakhira, 3830</Text>
            </View>

            {/* Button to use a different shipping address */}
            <TouchableOpacity style={summeryStyle.shipToItem} onPress={() => openBox()}>
              {!isDown ? (
                <View style={summeryStyle.emptyRadio}></View>
              ) : (
                <Image resizeMode="contain" source={require('../../../assets/image/Radio.png')} />
              )}
              <Text style={summeryStyle.shipToItemText}>Use a different shipping address</Text>
            </TouchableOpacity>

            {/* Additional Fields for a Different Shipping Address */}
            {isDown && (
              <Animated.View style={[{ marginTop: 20 }, animatedStyle]}>
                <Animated.View
                  entering={FadeInUp.delay(50).duration(500)}
                  style={summeryStyle.nameInputContainer}
                >
                  <TextInput
                    style={summeryStyle.nameInput}
                    onChangeText={(text) => handleInputChange('firstName', text)}
                    placeholder="First Name"
                  />
                  <TextInput
                    style={summeryStyle.nameInput}
                    onChangeText={(text) => handleInputChange('lastName', text)}
                    placeholder="Last Name"
                  />
                </Animated.View>
                <Animated.View entering={FadeInUp.delay(50).duration(510)}>
                  <TouchableOpacity activeOpacity={0.7} style={summeryStyle.inputBox}>
                    <Text style={summeryStyle.inputText}>Qatar</Text>
                    <Dropdown />
                  </TouchableOpacity>
                </Animated.View>
                {/* Other Address Input Fields */}
                <Animated.View
                  style={[
                    isDropdown
                      ? [summeryStyle.districtBox, { height: 140 }]
                      : summeryStyle.districtBox,
                  ]}
                  entering={FadeInUp.delay(50).duration(520)}
                >
                  <TouchableOpacity
                    onPress={() => setIsDropdown(!isDropdown)}
                    activeOpacity={0.7}
                    style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Text style={summeryStyle.inputText}>
                      {formData?.state ? formData?.state : 'state'}
                    </Text>
                    {isDropdown ? <UpArrow /> : <Dropdown />}
                  </TouchableOpacity>
                  {isDropdown && (
                    <>
                      <TouchableOpacity
                        onPress={() => {
                          handleInputChange('state', 'Doha'), setIsDropdown(false);
                        }}
                        style={summeryStyle.dropdownItem}
                      >
                        <Text>Doha</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          handleInputChange('state', 'other');
                          setIsDropdown(false);
                        }}
                        style={summeryStyle.dropdownItem}
                      >
                        <Text>Other</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </Animated.View>

                <Animated.View entering={FadeInUp.delay(50).duration(530)}>
                  <TextInput
                    style={[summeryStyle.inputBox]}
                    onChangeText={(text) => handleInputChange('streetAddress', text)}
                    placeholder="street address"
                  />
                </Animated.View>
                {/* <Animated.View entering={FadeInUp.delay(50).duration(540)}>
                  <TextInput placeholder="" />
                </Animated.View> */}
                <Animated.View
                  entering={FadeInUp.delay(50).duration(550)}
                  style={summeryStyle.nameInputContainer}
                >
                  <TextInput
                    style={summeryStyle.nameInput}
                    onChangeText={(text) => handleInputChange('companyName', text)}
                    placeholder="company name"
                  />
                  <TextInput
                    style={summeryStyle.nameInput}
                    onChangeText={(text) => handleInputChange('zipCode', text)}
                    placeholder="Zip Code"
                  />
                </Animated.View>
                <Animated.View entering={FadeInUp.delay(50).duration(560)}>
                  <TextInput
                    style={summeryStyle.numberInput}
                    onChangeText={(text) => handleInputChange('phoneNumber', text)}
                    placeholder="+880"
                  />
                </Animated.View>
                {/* Save as Default Address Option */}
                <Animated.View entering={FadeInUp.delay(50).duration(570)}>
                  <TouchableOpacity
                    style={[summeryStyle.shipToItem, { marginTop: 20 }]}
                    onPress={() => setDefaultLocation(!defaultLocation)}
                  >
                    {!defaultLocation ? (
                      <View style={summeryStyle.emptyRadio}></View>
                    ) : (
                      <Image
                        resizeMode="contain"
                        source={require('../../../assets/image/Radio.png')}
                      />
                    )}
                    <Text style={[summeryStyle.shipToItemText]}>Save as default address</Text>
                  </TouchableOpacity>
                </Animated.View>
              </Animated.View>
            )}
          </Animated.View>
        </Animated.View>
      </ScrollView>

      {/* Next Button */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#C83B62', '#7F35CD']}
        style={summeryStyle.nextButton}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            handleSubmit();
          }}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={summeryStyle.buttonText}>Next</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Summery;
