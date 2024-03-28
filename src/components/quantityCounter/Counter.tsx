import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../../constants/GlobalStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { useAppDispatch } from '../../redux/hook';
import { addToCart, removeOneFromCart } from '../../redux/features/cartSlice';
const Counter = ({ quantity, setQuantity }: { quantity: number; setQuantity: Function }) => {
  // Function to increment the counter
  const incrementCounter = () => {
    setQuantity(quantity + 1);
  };
  // Function to decrement the counter
  const decrementCounter = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.quantityCon}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['rgba(200, 59, 98, 0.15)', 'rgba(127, 53, 205, 0.15)']}
        style={styles.increaseDecreaseButton}
      >
        <TouchableOpacity onPress={() => decrementCounter()} style={styles.inDecActionLayer}>
          <AntDesign name="minus" size={20} color="black" />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.quantityBox}>
        <Text>{quantity}</Text>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['rgba(200, 59, 98, 0.15)', 'rgba(127, 53, 205, 0.15)']}
        style={styles.increaseDecreaseButton}
      >
        <TouchableOpacity onPress={() => incrementCounter()} style={styles.inDecActionLayer}>
          <AntDesign name="plus" size={20} color="black" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  quantityCon: {
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    height: 40,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  increaseDecreaseButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inDecActionLayer: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityBox: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
