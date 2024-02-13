import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { productSpecStyle } from './ProductSpecStyle';
import Animated, { FadeInRight, SlideInRight } from 'react-native-reanimated';

const ProductSpec = () => {
  return (
    <Animated.View entering={FadeInRight} style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={productSpecStyle.specBox}>
          <Text style={productSpecStyle.specTitle}>General</Text>
        </View>
        <View style={productSpecStyle.specBox}>
          <Text style={productSpecStyle.specTitle}>Print</Text>
        </View>
        <View style={productSpecStyle.specBox}>
          <Text style={productSpecStyle.specTitle}>Paper Information</Text>
        </View>
        <View style={productSpecStyle.specBox}>
          <Text style={productSpecStyle.specTitle}>Technical Specs</Text>
        </View>
        <View style={productSpecStyle.specBox}>
          <Text style={productSpecStyle.specTitle}>Physical Specs</Text>
        </View>
        <View style={productSpecStyle.specBox}>
          <Text style={productSpecStyle.specTitle}>Support</Text>
        </View>
        <View style={productSpecStyle.specBox}>
          <Text style={productSpecStyle.specTitle}>Special Features</Text>
        </View>
        <View style={productSpecStyle.specBox}>
          <Text style={productSpecStyle.specTitle}>Warranty Information</Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
};

export default ProductSpec;
