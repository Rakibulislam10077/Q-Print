import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Color, Font } from '../../constants/GlobalStyle';

const ProgressBar = () => {
  const [currentAmount, setCurrentAmount] = useState(20000);

  const animation = useRef<any>(null);
  // State variables to track current and target amounts
  const targetAmount = 30000;

  // Calculate the percentage progress towards the target amount
  const percentageProgress =
    currentAmount === 0 ? 0 : Math.round((currentAmount / targetAmount) * 100);

  // Shared value for animated progress
  const animatedProgress = useSharedValue(0);

  // Effect to initialize progress animation when currentAmount changes
  useEffect(() => {
    const percentage = Math.min(100, Math.round((currentAmount / targetAmount) * 100));
    animatedProgress.value = withTiming(percentage / 100, { duration: 1000 });
  }, [currentAmount, targetAmount]);

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
    <View style={{ position: 'relative' }}>
      <View style={styles.customProgressBG}>
        <Animated.View style={progressStyle}>
          <View style={styles.percentageValueCon}>
            {currentAmount >= targetAmount ? (
              <Text style={{ fontSize: 12 }}>100</Text>
            ) : (
              <Text style={{ fontSize: 12 }}>{percentageProgress}</Text>
            )}
          </View>
        </Animated.View>
      </View>
      <Text style={styles.text}>
        Spend <Text style={styles.spendItemText}>8</Text> item more to get off{' '}
        <Text style={styles.extraText}>15% Extra!</Text>
      </Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  customProgressBG: {
    width: '96%',
    height: 5,
    borderRadius: 10,
    backgroundColor: Color.C_border,
    marginTop: 20,
  },
  percentageValueCon: {
    position: 'absolute',
    right: -10,
    borderRadius: 15,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    top: -10,
    borderColor: Color.C_main,
    backgroundColor: Color.C_white,
  },
  text: {
    marginTop: 20,
    color: 'rgba(0,0,0,0.6)',
    fontSize: Font.Font_M,
  },
  spendItemText: {
    color: Color.C_main,
    fontWeight: '600',
  },
  extraText: {
    fontWeight: '600',
    color: '#000',
  },
});
