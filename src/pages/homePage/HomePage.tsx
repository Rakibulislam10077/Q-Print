import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import HomePageTopCon from "../../components/homePageTopCon/HomePageTopCon";
import { homePageStyle } from "./HomePageStyle";
import { Magnify, ThreeLine } from "../../constants/allSvg/AllSvg";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInLeft } from "react-native-reanimated";
import BrandInHome from "../../components/brandInHome/BrandInHome";
import Carousel from "../../components/carousel/Carousel";
import OfferCart from "../../components/card/offeredCart/OfferCart";
import AllCart from "../../components/card/allCart/AllCart";
import { StatusBar } from "expo-status-bar";
import Modal from "react-native-modal";
import ModalContent from "./modalComponents/ModalContent";
import Brand_Skeleton from "../../components/allSkeleton/Home_page_brand_Skeleton/Brand_Skeleton";
import Carousel_Skeleton from "../../components/allSkeleton/carousel_Skeleton/Carousel_Skeleton";
import Cart_Skeleton from "../../components/allSkeleton/cart_Skeleton/Cart_Skeleton";
import { Color } from "../../constants/GlobalStyle";
const HomePage = () => {
  const navigation: any = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <View style={{ flex: 1, backgroundColor: Color.C_white }}>
      <HomePageTopCon />
      {/* Body container */}
      <ScrollView style={{ flex: 1 }}>
        <Animated.View
          entering={FadeInLeft.delay(50).duration(140)}
          style={homePageStyle.searchAndthreelineCon}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            activeOpacity={0.7}
            style={homePageStyle.searchContainer}
          >
            <Magnify />
            <Text style={homePageStyle.searchText}>Search Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            activeOpacity={0.7}
            style={homePageStyle.threeLine}
          >
            <ThreeLine />
          </TouchableOpacity>
        </Animated.View>
        {/* brand logo container */}
        <BrandInHome />
        {/* <Brand_Skeleton /> */}
        {/* custom carousel  */}
        <Carousel />
        {/* <Carousel_Skeleton /> */}
        {/* offer cart section */}
        <OfferCart />
        {/* <Cart_Skeleton /> */}
        {/* all cart*/}
        <AllCart />
        {/* <Cart_Skeleton /> */}
      </ScrollView>
      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setIsModalVisible(!isModalVisible)}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={100}
        animationOutTiming={100}
        isVisible={isModalVisible}
        style={{ justifyContent: "flex-end", margin: 0 }}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
      >
        <ModalContent />
      </Modal>
      <StatusBar style="light" backgroundColor="#000" />
    </View>
  );
};

export default HomePage;
