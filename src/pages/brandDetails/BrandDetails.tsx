import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { FavIcon } from "../../constants/allSvg/AllSvg";
import { SafeAreaView } from "react-native-safe-area-context";
import { brandDetailsStyle } from "./BrandDetailsStyle";
import CommonHeader from "../../components/common/commonHeader/CommonHeader";
import { TopTab } from "../../routes/material_Tab/TopTab";
import { StatusBar } from "expo-status-bar";

const BrandDetails = (props: any) => {
  const item = props?.route?.params;
  return (
    <View style={brandDetailsStyle.container}>
      <CommonHeader title="Brand Details" />
      {/* body section */}
      <View style={brandDetailsStyle.brandSpecCon}>
        <View style={brandDetailsStyle.brandLogoAndNameCon}>
          <View style={brandDetailsStyle.logoCon}>
            <Image style={brandDetailsStyle.logo} source={item?.item?.img} />
          </View>
          <View>
            <Text style={brandDetailsStyle.brandName}>Canon</Text>
            <Text style={brandDetailsStyle.availableText}>
              25 Product Availalbe
            </Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={brandDetailsStyle.favCon}>
          <FavIcon />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <TopTab />
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default BrandDetails;
