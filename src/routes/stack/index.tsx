import { View, Text, Image, Platform, Dimensions, Animated } from 'react-native';
import React, { useRef } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screen/home/Home';
import Products from '../../screen/products/Products';
import Brand from '../../screen/Brand/Brand';
import Notification from '../../screen/notification/Notification';
import Profile from '../../screen/profile/Profile';
import ProductDetails from '../../pages/productDetailsPage/ProductDetails';
import Search from '../../pages/search/Search';
import MyCart from '../../pages/myCart/MyCart';
import Summery from '../../pages/summery/Summery';
import PaymentMethod from '../../pages/paymentMethod/PaymentMethod';
import ConfirmOrder from '../../pages/confirmOrder/ConfirmOrder';
import BrandDetails from '../../pages/brandDetails/BrandDetails';
import EditProfile from '../../pages/editProfile/EditProfile';
import Favorite from '../../pages/favorite/Favorite';
import TermsAndCondition from '../../pages/termsAndCondition/TermsAndCondition';
import FAQ from '../../pages/FAQ/FAQ';
import Review from '../../pages/review/Review';
import OrderHistory from '../../pages/orderHistory/OrderHistory';
import TrackedOrderDetails from '../../pages/trackedOrderDtails/TrackedOrderDetails';
import { Color } from '../../constants/GlobalStyle';
import OrderAndPrinterDesignPage from '../../pages/custom_order/CustomOrder';
import Login from '../../pages/logIn/Login';
import SignUp from '../../pages/signUp/SignUn';
import OTP from '../../pages/OTP/OTP';
import NewPass from '../../pages/forgotPass/newPass/NewPass';
import { forgotPass } from '../../pages/forgotPass/ForgotPassStyle';
import ForgotPass from '../../pages/forgotPass/ForgotPass';
import OptionalSignIn from '../../pages/signUp/optionalSignUpPage/OptionalSignIn';
import Onboarding from '../../pages/onboardingScreen/Onboarding';
import OrderConfirmation from '../../pages/custom_order/customOrderConfirmation/OrderConfirmation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProduct } from '../../types/interfaces/product.interface';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window');
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          shadowColor: '#000',
          elevation: 13,
          borderTopColor: '#fff',
          paddingBottom: 10,
          shadowOffset: {
            width: 2,
            height: 1,
          },
          // shadowOpacity: 0.2,
          shadowRadius: 3,
          height: Platform.OS === 'ios' ? 80 : 70,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {focused ? (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/ActiveHome.png')}
                  />
                ) : (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/defaultHome.png')}
                  />
                )}
                <Text
                  style={{
                    color: focused ? Color.C_main : Color.C_H_black,
                    fontWeight: focused ? '600' : '400',
                    fontSize: width <= 380 ? 10 : 12,
                  }}
                >
                  Home
                </Text>
              </View>
            );
          },
          headerShown: false,
          headerStyle: { height: 100 },
          headerTitleStyle: { marginTop: 30 },
        }}
        name="Home"
        component={Home}
      ></Tab.Screen>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {focused ? (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/activeProduct.png')}
                  />
                ) : (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/defaultProduct.png')}
                  />
                )}
                <Text
                  style={{
                    color: focused ? Color.C_main : Color.C_H_black,
                    fontWeight: focused ? '600' : '400',
                    fontSize: width <= 380 ? 10 : 12,
                  }}
                >
                  Products
                </Text>
              </View>
            );
          },
          headerStyle: { height: 100 },
          headerTitleStyle: { marginTop: 30 },
        }}
        name="Products"
        component={Products}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {focused ? (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/activeBrand.png')}
                  />
                ) : (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/defaulBrand.png')}
                  />
                )}
                <Text
                  style={{
                    color: focused ? Color.C_main : Color.C_H_black,
                    fontWeight: focused ? '600' : '400',
                    fontSize: width <= 380 ? 10 : 12,
                  }}
                >
                  Brand
                </Text>
              </View>
            );
          },
        }}
        name="Brand"
        component={Brand}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {focused ? (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/defaultNt.png')}
                  />
                ) : (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/defaultNt.png')}
                  />
                )}
                <Text
                  style={{
                    color: focused ? Color.C_main : Color.C_H_black,
                    fontWeight: focused ? '600' : '400',
                    fontSize: width <= 380 ? 10 : 12,
                  }}
                >
                  Notifications
                </Text>
              </View>
            );
          },
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {focused ? (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/activeUser.png')}
                  />
                ) : (
                  <Image
                    style={{ width: 23, height: 23 }}
                    source={require('../../../assets/image/defaultUser.png')}
                  />
                )}
                <Text
                  style={{
                    color: focused ? Color.C_main : Color.C_H_black,
                    fontWeight: focused ? '600' : '400',
                    fontSize: width <= 380 ? 10 : 12,
                  }}
                >
                  Profile
                </Text>
              </View>
            );
          },
        }}
        name="Profile "
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const Index = () => {
  // const accessToken = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   if (token) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen options={{ headerShown: false }} name="onboarding" component={Onboarding} />
      <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
      <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTab} />
      <Stack.Screen options={{ headerShown: false }} name="Search" component={Search} />
      <Stack.Screen options={{ headerShown: false }} name="ProductDeatils">
        {(props: any) => <ProductDetails {...props} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerShown: false }} name="MyCart" component={MyCart} />
      <Stack.Screen options={{ headerShown: false }} name="Summery" component={Summery} />
      <Stack.Screen options={{ headerShown: false }} name="Payment" component={PaymentMethod} />
      <Stack.Screen options={{ headerShown: false }} name="confirmorder" component={ConfirmOrder} />
      <Stack.Screen options={{ headerShown: false }} name="BrandDetails">
        {(props: any) => <BrandDetails {...props} />}
      </Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="NotificationPage"
        component={Notification}
      />
      <Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfile} />
      <Stack.Screen options={{ headerShown: false }} name="Favorite" component={Favorite} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TermsAndCond"
        component={TermsAndCondition}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PrivacyPolicy"
        component={TermsAndCondition}
      />
      <Stack.Screen options={{ headerShown: false }} name="FAQ" component={FAQ} />
      <Stack.Screen options={{ headerShown: false }} name="Review" component={Review} />
      <Stack.Screen options={{ headerShown: false }} name="OrderHistory" component={OrderHistory} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TrackedOrderDetails"
        component={TrackedOrderDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="OrderAndPrinterDesignPage"
        component={OrderAndPrinterDesignPage}
      />
      <Stack.Screen options={{ headerShown: false }} name="OTP" component={OTP} />
      <Stack.Screen options={{ headerShown: false }} name="forgotPass" component={ForgotPass} />
      <Stack.Screen options={{ headerShown: false }} name="NewPass" component={NewPass} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="optionalSignIn"
        component={OptionalSignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="customOrderConfirmation"
        component={OrderConfirmation}
      />
    </Stack.Navigator>
  );
};

export default Index;
