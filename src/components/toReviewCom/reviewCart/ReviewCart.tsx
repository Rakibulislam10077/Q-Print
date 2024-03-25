import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { reviewCartStyle } from './ReviewCartStyle';
import { Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { RatingStar } from '../../../../assets/allSvg/AllSvg';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { IReview } from '../../../types/interfaces/review.interface';

const ReviewCart = ({ item }: { item: IReview }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  console.log(item);

  return (
    <Animated.View entering={FadeInDown.delay(50).duration(500)} style={reviewCartStyle.container}>
      <Text style={reviewCartStyle.processDate}>Purchased on 12 Jul 2023</Text>
      <Divider style={reviewCartStyle.dividerStyle} />
      <View style={reviewCartStyle.imgAndTitleCon}>
        <View style={reviewCartStyle.imgCon}>
          <Image source={{}} />
        </View>
        <View style={reviewCartStyle.titleAndStoreCon}>
          <Text style={reviewCartStyle.title}>{item?.product?.productName}</Text>
          <View style={reviewCartStyle.brandAndReviewCon}>
            <View style={reviewCartStyle.brandAndBrandNameCon}>
              <View style={reviewCartStyle.brandCon}>
                <Image source={{}} />
              </View>
              <Text>{item?.product?.brandName}</Text>
            </View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#C83B62', '#7F35CD']}
              style={reviewCartStyle.linearButton}
            >
              <TouchableOpacity
                onPress={() => setIsModalVisible(true)}
                style={reviewCartStyle.buttonActionLayer}
              >
                <Text style={reviewCartStyle.buttonText}>Review</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
        isVisible={isModalVisible}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={reviewCartStyle.modalContainer}>
          <View style={reviewCartStyle.modalIndicator}></View>
          <View>
            <Text style={reviewCartStyle.questionText}>What is your Rate?</Text>
            <View style={reviewCartStyle.ratingCon}>
              <RatingStar />
            </View>
            <Text style={reviewCartStyle.dummyText}>
              Please share your opinion about {'\n'} the product
            </Text>

            <View style={reviewCartStyle.textInputCon}>
              <TextInput multiline placeholder="Write your review here..." />
            </View>
            <Text style={reviewCartStyle.textQuantity}>0/200</Text>
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#C83B62', '#7F35CD']}
            style={reviewCartStyle.modalLinear}
          >
            <TouchableOpacity activeOpacity={0.7} style={reviewCartStyle.linearActionLayer}>
              <Text style={reviewCartStyle.ModalButtonText}>Submit Review</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </Animated.View>
  );
};

export default ReviewCart;
