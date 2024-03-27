import { View, Text, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { productDescStyle } from './ProductDescStyle';
import Animated, { FadeInRight, SlideInRight } from 'react-native-reanimated';
import { Video, ResizeMode } from 'expo-av';
import { IDescription, IProduct } from '../../types/interfaces/product.interface';

const ProductDesc = ({ item }: { item: IDescription[] }) => {
  const [textShown, setTextShown] = useState<boolean>(true);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxim eligendi ratione soluta quo labore placeat, consectetur eius perspiciatis vel itaque, quod animi? Nemo optio maiores, fugiat earum minus fuga cumque assumenda perspiciatis doloremque culpa eos deserunt doloribus. Recusandae doloribus iure dolor rerum consequatur. Quia magni illum nobis animi consequuntur numquam cum, vitae ab, id eos sed illo reiciendis repudiandae repellat? Aperiam inventore corporis voluptatibus et nulla quia consequuntur voluptas dicta. Vero dignissimos perspiciatis sequi, incidunt dolor, iusto vel cum enim adipisci commodi praesentium fugit rerum sunt. Eum repudiandae nisi quos dolorem optio. Et beatae neque pariatur quisquam dicta';
  const sortText = description?.length > 400 ? description.slice(0, 400) + '...' : description;

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  return (
    <Animated.View entering={FadeInRight.delay(50).duration(300)}>
      <View style={productDescStyle.descBox}>
        <Text style={productDescStyle.title}>Brother HL-L3270CDW Color Wireless LED Printer</Text>
        <Text style={productDescStyle.descDetails}>
          {/* {textShown === true ? description : sortText} */}
          {item?.map((i) => {
            return <Text style={productDescStyle.productDesc}>{i?.data?.title}</Text>;
          })}
          {/* {description?.length > 400 &&
            (textShown === true ? (
              <Text
                onPress={() => toggleTextShown()}
                style={{ color: '#000', fontSize: 14, fontWeight: '700' }}
              >
                ... less text
              </Text>
            ) : (
              <Text
                onPress={() => {
                  toggleTextShown();
                }}
                style={{ color: '#000', fontSize: 14, fontWeight: '700' }}
              >
                {' '}
                See More
              </Text>
            ))} */}
        </Text>
      </View>
      <View>
        <Video
          ref={video}
          style={{ width: '90%', height: 200, alignSelf: 'center' }}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>
    </Animated.View>
  );
};

export default ProductDesc;
