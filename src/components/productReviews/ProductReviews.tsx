import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { productReviewsStyle } from "./ProductReviewsStyle";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInRight, SlideInRight } from "react-native-reanimated";

const ProductReviews = () => {
  return (
    <Animated.View entering={FadeInRight.delay(50).duration(300)}>
      <View style={productReviewsStyle.ratingViewBox}>
        <View style={productReviewsStyle.averageRatingPoinTBox}>
          <View style={productReviewsStyle.ratingNumberBox}>
            <Text style={productReviewsStyle.averageTating}>4.4</Text>
            <Text>⭐</Text>
          </View>
          <Text style={productReviewsStyle.ratingText}>
            923 Ratings & 04 Reviews
          </Text>
        </View>
        <View style={productReviewsStyle.ratingProgressBox}></View>
      </View>
      <View style={productReviewsStyle.ratingAndReviewsCon}>
        <Text style={productReviewsStyle.ratingAndReviewsText}>
          Ratings & Reviews
        </Text>
        <View style={productReviewsStyle.reviewerCon}>
          <Image
            style={productReviewsStyle.reviewerImg}
            source={require("../../../assets/image/homepod.jpeg")}
          />
          <View style={productReviewsStyle.reviewerNameAndDate}>
            <Text style={productReviewsStyle.reviewerName}>Rakibul islam</Text>
            <Text style={productReviewsStyle.reviewDate}>1st Jan 2020</Text>
          </View>
        </View>
        <View style={productReviewsStyle.seeReviewAndArrowCon}>
          <Text>View All 15 Reviews</Text>
          <Text>{`${">"}`}</Text>
        </View>
      </View>
      <View style={productReviewsStyle.yourReviewCon}>
        <Text style={productReviewsStyle.yourReviewText}>Your Review</Text>
        {/* empty tag container */}
        <View></View>
        {/* input Container for reviews */}
        <View>
          <TextInput
            style={productReviewsStyle.nameTextInput}
            placeholder="Name"
          />
          <TextInput
            style={productReviewsStyle.reviewTextInput}
            placeholder="Wite a Review"
            multiline={true}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default ProductReviews;
