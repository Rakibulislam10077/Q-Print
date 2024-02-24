import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { productSpecStyle } from './ProductSpecStyle';
import Animated, { FadeInRight, SlideInRight } from 'react-native-reanimated';
import { useGetProductQuery } from '../../redux/api/apiSlice';
import { Color } from '../../constants/GlobalStyle';
import { ISpecification } from '../../types/interfaces/product.interface';
const ProductSpec = ({ items }: { items: ISpecification[] }) => {
  // console.log(JSON.stringify(items, null, 2), '+++++++++++++++++++++++++++++++++');
  // const item = items?.specifications?.map((i) => i.sectionName);
  const item = items;
  console.log(item);

  return (
    <Animated.View entering={FadeInRight} style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {items?.map((item, index: number) => {
          console.log(item);

          return (
            <View>
              <View key={index.toString()} style={productSpecStyle.specBox}>
                <Text style={productSpecStyle.specTitle}>{item?.sectionName}</Text>
              </View>
              {item?.blocks?.map((i) => {
                return (
                  <View style={[productSpecStyle.specBox, { backgroundColor: Color.C_white }]}>
                    <Text style={productSpecStyle.specDescTitle}>{i?.title}</Text>
                    <Text style={productSpecStyle.specDestText}>{i?.description}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default ProductSpec;
