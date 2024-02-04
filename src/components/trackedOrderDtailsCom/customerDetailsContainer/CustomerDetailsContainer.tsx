import { View, Text, Image } from "react-native";
import React from "react";
import { customerContainerStyle } from "./CustomerDetailsContainerStyle";
import {
  CallIcon,
  LocationIcon,
  MessageBox,
  ShiftCar,
} from "../../../constants/allSvg/AllSvg";
import { Divider } from "react-native-paper";

const CustomerDetailsContainer = () => {
  return (
    <View style={customerContainerStyle.container}>
      <View>
        <Text style={customerContainerStyle.orderID}>
          Order ID: <Text style={customerContainerStyle.ID}>3354654654526</Text>
        </Text>
        <View style={customerContainerStyle.deliveryDateAndCarCon}>
          <ShiftCar />
          <Text style={customerContainerStyle.deliveryDate}>
            Estimated delivery: Dec 20, 2023
          </Text>
        </View>
      </View>
      <Divider style={customerContainerStyle.dividerStyle} />
      {/* ================================ */}
      <View>
        <Text style={customerContainerStyle.shipToText}>Ship & bill to</Text>
        <View style={customerContainerStyle.infoCon}>
          <View style={customerContainerStyle.imgCon}>
            <Image source={{}} />
          </View>
          <Text style={customerContainerStyle.name}>Rakibul islam</Text>
        </View>
        {/* ========= */}
        <View style={customerContainerStyle.infoCon}>
          <MessageBox />
          <Text style={customerContainerStyle.infoText}>
            hello@expertSquad.net
          </Text>
        </View>
        {/* ========= */}
        <View style={customerContainerStyle.infoCon}>
          <CallIcon />
          <Text style={customerContainerStyle.infoText}>+974 129822</Text>
        </View>
        {/* ========= */}
        <View style={customerContainerStyle.infoCon}>
          <LocationIcon />
          <Text style={customerContainerStyle.infoText}>
            Qatar Al Khor and Al Thakhira, 3830
          </Text>
        </View>
      </View>
      <Divider style={customerContainerStyle.dividerStyle} />
      {/* ==================== */}
      <View>
        <Text style={customerContainerStyle.paidBy}>Paid by</Text>
        <View style={customerContainerStyle.infoCon}>
          <Image source={require("../../../../assets/image/visa-logo.png")} />
          <Text style={customerContainerStyle.cardText}>Debit/VisaCard</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomerDetailsContainer;
