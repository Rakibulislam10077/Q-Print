import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { confirmOrderStyle } from "./ConfirmOrderStyle";
import { SuccessPageLogo } from "../../constants/allSvg/AllSvg";
import { Divider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  BounceIn,
  FadeInDown,
  RotateInDownLeft,
  RotateInDownRight,
  RotateInUpLeft,
  RotateOutDownLeft,
  SlideInUp,
} from "react-native-reanimated";

const ConfirmOrder = () => {
  return (
    <View style={confirmOrderStyle.container}>
      <CommonHeader title="Booking Confirmation" />
      <ScrollView style={{ flex: 1, paddingBottom: 100 }}>
        <View style={confirmOrderStyle.bodyContainer}>
          <Animated.View style={confirmOrderStyle.logoContainer}>
            <Animated.View entering={BounceIn.delay(100).duration(600)}>
              <SuccessPageLogo />
            </Animated.View>
            <Text style={confirmOrderStyle.orderPayment}>
              Order Payment Success
            </Text>
            <Text style={confirmOrderStyle.desc}>
              Your payment has been processed? Details of transaction are
              included below
            </Text>
          </Animated.View>
          {/* ==================== */}
          <View>
            <Animated.View entering={FadeInDown.delay(50).duration(500)}>
              <Animated.View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>
                  Total Amount Paid
                </Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>QR 700</Text>
              </Animated.View>
              {/* ============================ */}
              <Divider />
              <Animated.View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>
                  Pay with
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../../../assets/image/visa-logo.png")}
                  />
                  <Text
                    style={[
                      confirmOrderStyle.totalPriceAndother,
                      { marginLeft: 10 },
                    ]}
                  >
                    Debit/VisaCard
                  </Text>
                </View>
              </Animated.View>
              {/* ================================ */}
              <Divider />
              <Animated.View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>
                  Transaction Date
                </Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>
                  22 Nov, 2023
                </Text>
              </Animated.View>
              <Divider />
              <View style={confirmOrderStyle.informationCon}>
                <Text style={confirmOrderStyle.amountTextAndother}>
                  Trnsaction Number
                </Text>
                <Text style={confirmOrderStyle.totalPriceAndother}>
                  1574OISHD514
                </Text>
              </View>
            </Animated.View>
          </View>
          <TouchableOpacity style={confirmOrderStyle.viewOrderButton}>
            <Text style={confirmOrderStyle.buttonText}>View Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#C83B62", "#7F35CD"]}
        style={{
          width: "90%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25,
          // position: "absolute",
          // bottom: 30,
          marginBottom: 10,
          backgroundColor: "transparent",
          height: 50,
        }}
      >
        <TouchableOpacity style={confirmOrderStyle.buttonActionLayer}>
          <Text style={confirmOrderStyle.OkeyButtonText}>Okay</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ConfirmOrder;
