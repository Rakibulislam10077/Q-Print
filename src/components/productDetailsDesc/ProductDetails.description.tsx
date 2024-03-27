import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Color, Font, shadows } from '../../constants/GlobalStyle';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { InActiveIndicator } from '../../../assets/allSvg/AllSvg';
import { LinearGradient } from 'expo-linear-gradient';
import Counter from '../quantityCounter/Counter';
import ProgressBar from '../progressbar/ProgressBar';

const ProductDetailsDesc = ({
  data,
  selectedVariant,
  setSelectedVariant,
  quantity,
  setQuantity,
}: {
  data: any;
  selectedVariant: { variantId?: string; variantName: string };
  setSelectedVariant: Function;
  quantity: number;
  setQuantity: Function;
}) => {
  const handleColor = (variant: string) => {
    setSelectedVariant(variant);
  };

  return (
    <View style={styles.description}>
      <Animated.View entering={FadeInDown.delay(50).duration(500)} style={styles.ratingContainer}>
        {data?.defaultVariant?.inStock > 0 ? (
          <View style={styles.inStockContainer}>
            <Text style={[styles.inStockText, { color: Color.C_red }]}>stoke out</Text>
          </View>
        ) : (
          <View style={styles.inStockContainer}>
            <InActiveIndicator />
            <Text style={[styles.inStockText]}>In stock</Text>
          </View>
        )}
        <Text style={styles.verticalDivider}>|</Text>
        <Text style={styles.ratingText}>
          ⭐<Text style={styles.ratingNumber}>(4.5)</Text>
        </Text>
        {data?.variants?.discountPercentage && (
          <>
            <Text style={styles.verticalDivider}>|</Text>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['rgba(200, 59, 98, 0.15)', 'rgba(127, 53, 205, 0.15)']}
              style={styles.discountTextCon}
            >
              <Text style={styles.discountPercent}>
                {data?.variants[0]?.discountPercentage}% off
              </Text>
            </LinearGradient>
          </>
        )}
      </Animated.View>
      <Animated.Text
        entering={FadeInDown.delay(50).duration(500)}
        numberOfLines={2}
        style={styles.title}
      >
        {data?.productName}
      </Animated.Text>
      <Animated.View entering={FadeInDown.delay(50).duration(500)} style={styles.productIdandDisc}>
        <View style={styles.brandLogoContainer}>
          <Image
            style={styles.brandLogo}
            source={{ uri: `http://192.168.0.103:5000/${data?.brand?.brandPhoto}` }}
          />
        </View>
        <Text style={styles.brandName}>{data?.brand?.brandName}</Text>
      </Animated.View>

      <View style={styles.colorIndicatorCon}>
        {data?.variants?.map((variant: any, index: any) => {
          return (
            <TouchableOpacity
              onPress={() => handleColor(variant)}
              key={index.toString()}
              style={[
                styles.colorIndicator,
                {
                  backgroundColor: variant?.variantName?.toLowerCase(),

                  borderColor: variant?.isDefault ? 'lightgray' : 'white',
                },
              ]}
            />
          );
        })}
      </View>

      <Animated.View entering={FadeInDown.delay(50).duration(500)} style={styles.priceContainer}>
        {/* Display the selling price */}
        <Text style={styles.currentPrice}>
          {data?.variants?.find((variant: any) => variant.isDefault)?.discountedPrice}{' '}
          <Text style={styles.currency}>QAR</Text>
        </Text>

        {/* Display the discounted price */}
        <Text style={styles.discountedPrice}>
          {data?.variants?.find((variant: any) => variant.isDefault)?.sellingPrice}{' '}
          <Text style={styles.discountedCurrency}>QAR</Text>
        </Text>

        {/* quantity Container */}
        {/* =============================================================================================== */}
        <Counter quantity={quantity} setQuantity={setQuantity} />
      </Animated.View>

      {/* progress bar  */}
      <ProgressBar />
    </View>
  );
};

export default ProductDetailsDesc;

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20,
    paddingVertical: 20,
    borderBottomColor: Color.C_border,
    borderBottomWidth: 1,
    marginBottom: 20,
    backgroundColor: Color.C_white,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  inStockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inStockText: {
    fontSize: Font.Font_M,
    color: '#009420',
    marginRight: 10,
    marginLeft: 5,
  },
  verticalDivider: {
    fontSize: Font.Font_M,
    fontWeight: '700',
    color: Color.C_border,
    marginHorizontal: 10,
  },
  ratingText: {
    marginRight: 5,
  },
  ratingNumber: {
    color: Color.C_H_black,
  },
  discountTextCon: {
    height: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  discountPercent: {
    color: Color.C_main,
    fontSize: Font.Font_S,
  },
  title: {
    fontSize: Font.Font_L,
    marginBottom: 10,
    lineHeight: 25,
  },
  productIdandDisc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  brandLogoContainer: {
    width: 24,
    height: 24,
    backgroundColor: Color.C_white,
    borderRadius: 4,
    shadowColor: shadows.shadow_color,
    elevation: shadows.elevation_1,
    shadowOffset: {
      width: shadows.offsetWidth_1,
      height: shadows.offsetHeight_1,
    },
    shadowRadius: shadows.radius_1,
    shadowOpacity: shadows.opacity_1,
    padding: 4,
    marginRight: 5,
  },
  brandLogo: {
    width: '100%',
    height: '100%',
    borderRadius: 3,
  },
  brandName: {
    fontSize: Font.Font_M,
    color: 'rgba(0,0,0,0.6)',
  },
  colorIndicatorCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  colorIndicator: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentPrice: {
    fontSize: Font.Font_XL,
    marginRight: 10,
  },
  productPrice: {
    fontSize: Font.Font_XL,
    fontWeight: '700',
    color: Color.C_main,
  },
  discountedPrice: {
    fontSize: Font.Font_L,
    color: Color.C_H_black,
    textDecorationLine: 'line-through',
  },
  currency: {
    fontSize: Font.Font_X,
    fontWeight: '500',
  },
  discountedCurrency: {
    fontSize: Font.Font_M,
  },
});
