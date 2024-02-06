import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AddToCart from '../../components/addToCart/AddToCart';
import { BackArrow } from '../../constants/allSvg/AllSvg';
import { myCartStyle } from './MyCartStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import { commonHeaderStyle } from '../../components/common/commonHeader/CommonHeaderStyle';
// import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const MyCart = () => {
  const navigation: any = useNavigation();
  const [currentAmount, setCurrentAmount] = useState(0);
  const targetAmount = 10000;

  useEffect(() => {
    if (currentAmount === 0) {
      animatedProgress.value = withTiming(0, { duration: 1000 }); // Initialize progress to 0 when currentAmount is 0
    }
  }, [currentAmount]);

  const percentageProgress =
    currentAmount === 0 ? 0 : Math.round((currentAmount / targetAmount) * 100);

  const animatedProgress = useSharedValue(0); // Moved initialization here

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedProgress.value * 100}%`,
      height: 15,
      backgroundColor: '#6C63FF',
      borderRadius: 10,
    };
  });

  // const percentageGap = Math.round(((targetAmount - currentAmount) / targetAmount) * 100);

  // const increaseProgress = () => {
  //   if (progress < 1) {

  //   }
  // };

  useEffect(() => {
    if (currentAmount < targetAmount) {
      setCurrentAmount(currentAmount + 100); // Increase by 100 for demonstration purposes
      animatedProgress.value = withTiming((currentAmount + 100) / targetAmount, { duration: 1000 });
    }
  }, []);

  // const resetProgress = () => {
  //   setProgress(0);
  // };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* cart container */}
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
        {/* =========================== */}
      </View>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1]}
        renderItem={({ i }: any) => {
          return <AddToCart />;
        }}
      />
      <View style={myCartStyle.totalPriceAndProgressCon}>
        <View style={myCartStyle.grandTotalCon}>
          <Text>Grand Total</Text>
          <Text>
            1855 <Text>QAR</Text>
          </Text>
        </View>
        <View>
          {/* <ProgressBar
            style={{ height: 20, borderRadius: 10 }}
            progress={progress}
            color={MD3Colors.error50}
          /> */}
          <Animated.View style={progressStyle} />
          <Text>{percentageProgress}%</Text>
        </View>
        {/* <View style={{ flexDirection: 'row' }}>
          <Button title="Increase Progress" onPress={increaseProgress} />
          <Button title="Reset Progress" onPress={resetProgress} />
        </View> */}
        <Text style={myCartStyle.freeShippingText}>
          Spend <Text style={{ color: '#C83B62', fontWeight: '600' }}> 3000 </Text>
          more to reach <Text style={{ color: '#000' }}>FREE SHIPPING!</Text>
        </Text>
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
      <StatusBar style="dark" />
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
});
