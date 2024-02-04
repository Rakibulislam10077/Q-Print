import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { summeryStyle } from "../summery/SummeryStyle";
import { useNavigation } from "@react-navigation/native";
import { Checkmark, Goback, UpArrow } from "../../constants/allSvg/AllSvg";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { paymentMethodStyle } from "./PaymentMethodStyle";
import { Color } from "../../constants/GlobalStyle";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  FadeInUp,
  LightSpeedInRight,
  RotateInDownLeft,
  SlideInDown,
  SlideInUp,
} from "react-native-reanimated";

const PaymentMethod = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: Color.C_white }}>
      <CommonHeader title="Checkout" />
      {/* =========== body ============== */}
      <ScrollView>
        <View style={paymentMethodStyle.bodyContainer}>
          <Text style={paymentMethodStyle.PaymentMethodText}>
            Payment Methods
          </Text>

          <Animated.View
            entering={FadeInUp.delay(50).duration(500)}
            style={paymentMethodStyle.PaymentCartContainer}
          >
            <View style={paymentMethodStyle.dabidCartTextAndArrowCon}>
              <View style={paymentMethodStyle.cartImgAndTextCon}>
                <Image
                  style={paymentMethodStyle.cardImg}
                  source={require("../../../assets/image/cashOn.png")}
                />
                <Text style={paymentMethodStyle.dabidText}>Debit Card</Text>
              </View>
              <View style={paymentMethodStyle.radio} />
            </View>
          </Animated.View>
          {/* ============================= */}
          <Animated.View
            entering={FadeInUp.delay(50).duration(500)}
            style={paymentMethodStyle.PaymentCartContainer}
          >
            <View style={paymentMethodStyle.dabidCartTextAndArrowCon}>
              <View style={paymentMethodStyle.cartImgAndTextCon}>
                <Image
                  style={paymentMethodStyle.cardImg}
                  source={require("../../../assets/image/visa.png")}
                />
                <Text style={paymentMethodStyle.dabidText}>Debit Card</Text>
              </View>
              <View style={paymentMethodStyle.radio}></View>
            </View>
            <View style={paymentMethodStyle.cardTitleAndInputCon}>
              <Text style={paymentMethodStyle.cardNumberTitle}>
                Card Number
              </Text>
              <View style={paymentMethodStyle.inputContainer}>
                <TextInput
                  style={paymentMethodStyle.input}
                  placeholder="0000 0000 0000 0000"
                />
                <Image
                  source={require("../../../assets/image/visa-logo.png")}
                />
              </View>
            </View>
            <View style={paymentMethodStyle.expirDateAndCVVCon}>
              <View style={paymentMethodStyle.inputCon}>
                <Text style={paymentMethodStyle.exDateAndCVVText}>
                  Expiry date
                </Text>
                <TextInput
                  placeholder="05/27"
                  style={[
                    paymentMethodStyle.input,
                    paymentMethodStyle.exCVVInput,
                  ]}
                />
              </View>
              <View style={paymentMethodStyle.inputCon}>
                <Text style={paymentMethodStyle.exDateAndCVVText}>CVV</Text>
                <TextInput
                  placeholder="523"
                  style={[
                    paymentMethodStyle.input,
                    paymentMethodStyle.exCVVInput,
                  ]}
                />
              </View>
            </View>
            <View style={paymentMethodStyle.cardTitleAndInputCon}>
              <Text style={paymentMethodStyle.cardNumberTitle}>
                Name on Card
              </Text>
              <View style={paymentMethodStyle.inputContainer}>
                <TextInput
                  style={paymentMethodStyle.input}
                  placeholder="Name on Card"
                />
              </View>
            </View>
            <View style={paymentMethodStyle.secureTextCon}>
              <View style={paymentMethodStyle.checkmarkCon}>
                <Checkmark />
              </View>
              <Text style={paymentMethodStyle.checkmarkText}>
                Securly save card and details
              </Text>
            </View>
          </Animated.View>
          <View style={paymentMethodStyle.PaymentCartContainer}>
            <View style={paymentMethodStyle.dabidCartTextAndArrowCon}>
              <View style={paymentMethodStyle.cartImgAndTextCon}>
                <Image
                  style={paymentMethodStyle.cardImg}
                  source={require("../../../assets/image/cashOn.png")}
                />
                <Text style={paymentMethodStyle.dabidText}>Debit Card</Text>
              </View>
              <View style={paymentMethodStyle.radio}></View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={paymentMethodStyle.ammountCon}>
        <View>
          <Text style={paymentMethodStyle.totalAmount}>Total Amount</Text>
          <Text style={paymentMethodStyle.currency}>QR 4545.00</Text>
        </View>
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={["#C83B62", "#7F35CD"]}
            style={{
              width: 150,
              alignSelf: "flex-end",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
              height: 50,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={paymentMethodStyle.buttonActionLayer}
              onPress={() => navigation.navigate("confirmorder")}
            >
              <Text style={paymentMethodStyle.buttonText}>Pay Now</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;

{
  /* <View style={paymentMethodStyle.PaymentCartContainer}>
            <View style={paymentMethodStyle.dabidCartTextAndArrowCon}>
              <View style={paymentMethodStyle.cartImgAndTextCon}>
                <Image
                  style={paymentMethodStyle.cardImg}
                  source={require("../../../assets/image/cart.png")}
                />
                <Text style={paymentMethodStyle.dabidText}>Debit Card</Text>
              </View>
              <UpArrow />
            </View>
            <View>
              <FlatList
                horizontal
                data={[1, 1, 1, 1, 1, 1]}
                renderItem={({ i }: any) => {
                  return (
                    <TouchableOpacity activeOpacity={0.7}>
                      <Image
                        source={require("../../../assets/image/VisaCart.png")}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
              <View>
                <Image
                  style={paymentMethodStyle.card}
                  source={{ uri: "https://pngimg.com/d/credit_card_PNG23.png" }}
                />
              </View>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={paymentMethodStyle.addNewDebid}>
                + Add new debid card
              </Text>
            </TouchableOpacity>
          </View>
          <View style={paymentMethodStyle.PaymentCartContainer}>
          <View style={paymentMethodStyle.dabidCartTextAndArrowCon}>
              <View style={paymentMethodStyle.cartImgAndTextCon}>
                <Image
                  style={paymentMethodStyle.cardImg}
                  source={require("../../../assets/image/cart.png")}
                />
                <Text style={paymentMethodStyle.dabidText}>Debit Card</Text>
              </View>
              <UpArrow />
            </View>
          </View>
          <View style={paymentMethodStyle.PaymentCartContainer}>
          <View style={paymentMethodStyle.dabidCartTextAndArrowCon}>
              <View style={paymentMethodStyle.cartImgAndTextCon}>
                <Image
                  style={paymentMethodStyle.cardImg}
                  source={require("../../../assets/image/cart.png")}
                />
                <Text style={paymentMethodStyle.dabidText}>Debit Card</Text>
              </View>
              <View style={paymentMethodStyle.radio}></View>
            </View>
          </View> */
}
