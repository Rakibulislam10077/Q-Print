import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-paper";
import { historyStyle } from "./HistoryCartStyle";
import { LinearGradient } from "expo-linear-gradient";
import { RatingStar } from "../../../constants/allSvg/AllSvg";
import Modal from "react-native-modal";
import Animated, { FadeInDown } from "react-native-reanimated";
const HistoryCart = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(50).duration(500)}
      style={historyStyle.container}
    >
      <Text style={historyStyle.processDate}>Purchased on 12 Jul 2023</Text>
      <Divider style={historyStyle.dividerStyle} />
      <View style={historyStyle.imgAndTitleCon}>
        <View style={historyStyle.imgCon}>
          <Image source={{}} />
        </View>
        <View style={historyStyle.titleAndStoreCon}>
          <Text style={historyStyle.title}>
            HP DeskJet Ink Advantage 4175 All-in-One Printer
          </Text>
          <View style={historyStyle.brandAndReviewCon}>
            <View style={historyStyle.brandAndBrandNameCon}>
              <View style={historyStyle.brandCon}>
                <Image source={{}} />
              </View>
              <Text>Brother</Text>
            </View>
          </View>
        </View>
      </View>
      <Divider style={historyStyle.dividerStyle} />
      <View>
        <View style={historyStyle.ratingAndEditButtonCon}>
          <View>
            <RatingStar />
          </View>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            activeOpacity={0.7}
            style={historyStyle.editButton}
          >
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={historyStyle.PevComment}>
          This Product Is awesome Shahin Development Sundor Kori Korbi
        </Text>
      </View>
      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={100}
        animationOutTiming={100}
        isVisible={isModalVisible}
        style={{ justifyContent: "flex-end", margin: 0 }}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
      >
        <View style={historyStyle.modalContainer}>
          <View style={historyStyle.modalIndicator}></View>
          <View>
            <Text style={historyStyle.questionText}>What is your Rate?</Text>
            <View style={historyStyle.ratingCon}>
              <RatingStar />
            </View>
            <Text style={historyStyle.dummyText}>
              Please share your opinion about {"\n"} the product
            </Text>

            <View style={historyStyle.textInputCon}>
              <TextInput multiline placeholder="Write your review here..." />
            </View>
            <Text style={historyStyle.textQuantity}>0/200</Text>
          </View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#C83B62", "#7F35CD"]}
            style={historyStyle.modalLinear}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={historyStyle.linearActionLayer}
            >
              <Text style={historyStyle.ModalButtonText}>Submit Review</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </Animated.View>
  );
};

export default HistoryCart;
