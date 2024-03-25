import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-paper';
import { historyStyle } from './HistoryCartStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { RatingStar } from '../../../../assets/allSvg/AllSvg';
import Modal from 'react-native-modal';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { IReview } from '../../../types/interfaces/review.interface';
import { AntDesign } from '@expo/vector-icons';
const HistoryCart = ({ item }: { item: IReview }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const maxRating = 5;
  const filledStars = Math.round(item?.rating);
  const emptyStars = maxRating - filledStars;

  return (
    <Animated.View entering={FadeInDown.delay(50).duration(500)} style={historyStyle.container}>
      <Text style={historyStyle.processDate}>Purchased on 12 Jul 2023</Text>
      <Divider style={historyStyle.dividerStyle} />
      <View style={historyStyle.imgAndTitleCon}>
        <View style={historyStyle.imgCon}>
          <Image source={{}} />
        </View>
        <View style={historyStyle.titleAndStoreCon}>
          <Text style={historyStyle.title}>{item?.product?.productName}</Text>
          <View style={historyStyle.brandAndReviewCon}>
            <View style={historyStyle.brandAndBrandNameCon}>
              <View style={historyStyle.brandCon}>
                <Image source={{}} />
              </View>
              <Text>{item?.product?.brandName}</Text>
            </View>
          </View>
        </View>
      </View>
      <Divider style={historyStyle.dividerStyle} />
      <View>
        <View style={historyStyle.ratingAndEditButtonCon}>
          <View style={historyStyle.ratingCon}>
            {[...Array(filledStars)].map((_, index) => (
              <AntDesign
                key={index?.toString()}
                style={{ marginRight: 5 }}
                name="star"
                size={24}
                color="#F16A26"
              />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
              <AntDesign
                key={index?.toString()}
                style={{ marginRight: 5 }}
                name="star"
                size={24}
                color="#e9e9e9"
              />
            ))}
          </View>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            activeOpacity={0.7}
            style={historyStyle.editButton}
          >
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={historyStyle.PevComment}>{item?.comment}</Text>
      </View>
      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
        isVisible={isModalVisible}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={historyStyle.modalContainer}>
          <View style={historyStyle.modalIndicator}></View>
          <View>
            <Text style={historyStyle.questionText}>What is your Rate?</Text>
            <View style={historyStyle.ratingCon}>
              <RatingStar />
            </View>
            <Text style={historyStyle.dummyText}>
              Please share your opinion about {'\n'} the product
            </Text>

            <View style={historyStyle.textInputCon}>
              <TextInput multiline placeholder="Write your review here..." />
            </View>
            <Text style={historyStyle.textQuantity}>0/200</Text>
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#C83B62', '#7F35CD']}
            style={historyStyle.modalLinear}
          >
            <TouchableOpacity activeOpacity={0.7} style={historyStyle.linearActionLayer}>
              <Text style={historyStyle.ModalButtonText}>Submit Review</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </Animated.View>
  );
};

export default HistoryCart;
