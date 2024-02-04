import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { productsStyle } from "./ProductsStyle";
import {
  BackArrow,
  CartBag,
  CartIcon,
  Magnify,
  ThreeLine,
} from "../../constants/allSvg/AllSvg";
import { TopTab } from "../../routes/material_Tab/TopTab";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import ModalContent from "../../pages/homePage/modalComponents/ModalContent";
import { StatusBar } from "expo-status-bar";
const Products = () => {
  const navigation: any = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <View style={productsStyle.container}>
      <View style={productsStyle.headerContainer}>
        <View style={productsStyle.navigationAndCard}>
          <View style={productsStyle.navigationAndTitle}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <BackArrow />
            </TouchableOpacity>
            <Text style={productsStyle.title}>All Products</Text>
          </View>
          <TouchableOpacity style={productsStyle.cartBag}>
            <CartBag />
          </TouchableOpacity>
        </View>
        <View style={productsStyle.inputAndThreelineCon}>
          <View style={productsStyle.magnifyAndInputCon}>
            <Magnify />
            <TextInput
              style={productsStyle.input}
              placeholder="Search Product"
            />
          </View>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={productsStyle.threeline}
          >
            <ThreeLine />
          </TouchableOpacity>
        </View>
      </View>
      {/* body container */}

      <View style={productsStyle.bodyContainer}>
        <TopTab />
      </View>
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
      <StatusBar style="dark" />
    </View>
  );
};

export default Products;
