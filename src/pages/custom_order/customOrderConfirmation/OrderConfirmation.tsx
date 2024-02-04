import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import CommonHeader from "../../../components/common/commonHeader/CommonHeader";
import { customOrderConfirmationStyle } from "./OrderConfimationStyle";
import { Messenger, Whatsapp } from "../../../constants/allSvg/AllSvg";
import { Divider } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const OrderConfirmation = () => {
  return (
    <View style={customOrderConfirmationStyle.container}>
      <CommonHeader title="Booking Confirmation" />
      <ScrollView>
        {/* top logo and other text container */}
        <View style={customOrderConfirmationStyle.logoCon}>
          <Image
            style={customOrderConfirmationStyle.logo}
            source={require("../../../../assets/image/confirmationLogo.png")}
          />
          <Text style={customOrderConfirmationStyle.thanksText}>Thank you</Text>
          <Text style={customOrderConfirmationStyle.dummyText1}>
            Our agent will you contact you soon
          </Text>
          <Text style={customOrderConfirmationStyle.dummyText2}>
            You have requested for printing a custom paper size, Very soon we
            will contact you
          </Text>
        </View>
        {/* social button container */}
        <View style={customOrderConfirmationStyle.socialButtonCon}>
          <TouchableOpacity
            style={[
              customOrderConfirmationStyle.socialButton,
              { backgroundColor: "#097DFF" },
            ]}
          >
            <Messenger />
            <Text style={customOrderConfirmationStyle.buttonText}>
              Messenger
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              customOrderConfirmationStyle.socialButton,
              { backgroundColor: "#25D366" },
            ]}
          >
            <Whatsapp />
            <Text style={customOrderConfirmationStyle.buttonText}>
              Messenger
            </Text>
          </TouchableOpacity>
        </View>

        {/* order details container */}
        <View>
          <Text style={customOrderConfirmationStyle.orderDetailsText}>
            Order details
          </Text>
          {/* order date and code container */}
          <View
            style={[
              customOrderConfirmationStyle.orderCodeAndDateCon,
              { paddingHorizontal: 15 },
            ]}
          >
            <View style={[customOrderConfirmationStyle.itemCon]}>
              <Text style={customOrderConfirmationStyle.Text}>Order Code</Text>
              <Text>#958489357</Text>
            </View>
            <Divider />
            <View style={customOrderConfirmationStyle.itemCon}>
              <Text style={customOrderConfirmationStyle.Text}>Date</Text>
              <Text>October 19, 2023</Text>
            </View>
          </View>
          {/* name and phone and address container */}
          <View style={customOrderConfirmationStyle.orderCodeAndDateCon}>
            <View
              style={[
                customOrderConfirmationStyle.itemCon,
                { paddingHorizontal: 15 },
              ]}
            >
              <Text style={customOrderConfirmationStyle.Text}>
                Name: <Text style={{ color: "#475156" }}>Rakibul islam</Text>
              </Text>
            </View>
            <Divider />
            <View
              style={[
                customOrderConfirmationStyle.itemCon,
                { paddingHorizontal: 15 },
              ]}
            >
              <Text style={customOrderConfirmationStyle.Text}>
                Phone: <Text style={{ color: "#475156" }}>01601113299</Text>
              </Text>
            </View>
            <Divider />
            <View
              style={[
                customOrderConfirmationStyle.itemCon,
                { paddingHorizontal: 15 },
              ]}
            >
              <Text style={customOrderConfirmationStyle.Text}>
                Address:{" "}
                <Text style={{ color: "#475156" }}>
                  Noakhali Chaprashirhat Road No. 13/x, House no. 1320/C, Flat
                  No. 5D
                </Text>
              </Text>
            </View>
          </View>
        </View>
        {/* button container */}
        <View style={customOrderConfirmationStyle.buttonCont}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={customOrderConfirmationStyle.viewButton}
          >
            <Text style={customOrderConfirmationStyle.viewButtonText}>
              View Order
            </Text>
          </TouchableOpacity>
          <LinearGradient
            colors={["#C83B62", "#7F35CD"]}
            start={{ x: 0, y: 1 }}
            style={customOrderConfirmationStyle.linearButton}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              style={customOrderConfirmationStyle.actionLayer}
            >
              <Text style={customOrderConfirmationStyle.linearButtonText}>
                Okay
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderConfirmation;
