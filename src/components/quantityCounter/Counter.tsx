import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../../constants/GlobalStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
const Counter = ({ setQuantity, quantity }: { setQuantity: Function; quantity: number }) => {
  const animatedY = useSharedValue(0);
  const animatedX = useSharedValue(0);
  const scale = useSharedValue(0);
  const scale2 = useSharedValue(0);

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
    // const value = products?.length - 1;
    // setQuantity(value);
  };

  return (
    <View style={styles.quantityCon}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['rgba(200, 59, 98, 0.15)', 'rgba(127, 53, 205, 0.15)']}
        style={styles.increaseDecreaseButton}
      >
        <TouchableOpacity onPress={() => decrease()} style={styles.inDecActionLayer}>
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
        <TouchableOpacity onPress={() => increase()} style={styles.inDecActionLayer}>
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
