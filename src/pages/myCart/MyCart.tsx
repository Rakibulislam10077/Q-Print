import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import AddToCart from "../../components/addToCart/AddToCart";
import { BackArrow } from "../../constants/allSvg/AllSvg";
import { myCartStyle } from "./MyCartStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { MD3Colors, ProgressBar } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { commonHeaderStyle } from "../../components/common/commonHeader/CommonHeaderStyle";

const progress = 0.1;
const width = 200;
const MyCart = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* cart container */}
      <View style={commonHeaderStyle.container}>
        <View style={commonHeaderStyle.titleCon}>
          <TouchableOpacity
            style={commonHeaderStyle.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <BackArrow />
          </TouchableOpacity>
          <Text style={commonHeaderStyle.title}>My Cart</Text>
        </View>
        {/* =========================== */}
      </View>
      <FlatList
        data={[1, 1, 1, 1, 1, 1, 1]}
        renderItem={({ i }: any) => {
          return <AddToCart />;
        }}
      />
      <View style={myCartStyle.totalPriceAndProgressCon}>
        <View style={myCartStyle.grandTotalCon}>
          <Text>Grand Total</Text>
          <Text>
            1855 <Text>QAR</Text>
          </Text>
        </View>
        <View>
          <ProgressBar
            style={{ height: 20, borderRadius: 10 }}
            progress={progress}
            color={MD3Colors.error50}
          />
        </View>
        <Text style={myCartStyle.freeShippingText}>
          Spend{" "}
          <Text style={{ color: "#C83B62", fontWeight: "600" }}> 3000 </Text>
          more to reach <Text style={{ color: "#000" }}>FREE SHIPPING!</Text>
        </Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#C83B62", "#7F35CD"]}
          style={myCartStyle.linearContainer}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Summery")}
            style={myCartStyle.proceedButton}
          >
            <Text style={myCartStyle.proceedText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default MyCart;
