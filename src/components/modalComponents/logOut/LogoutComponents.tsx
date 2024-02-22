import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { logoutComStyle } from "./LogoutComSTyle";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../../../constants/GlobalStyle";

const LogoutComponents = () => {
  return (
    <View style={logoutComStyle.container}>
      <Image
        style={logoutComStyle.logo}
        source={require("../../../../assets/image/logoutLogo.png")}
      />
      <Text style={logoutComStyle.logoutText}>Log out?</Text>
      <Text style={logoutComStyle.qText}>Are you sure you want to Logout?</Text>
      <View style={logoutComStyle.buttonCon}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[logoutComStyle.button, { backgroundColor: "#DBDBDB" }]}
        >
          <Text style={logoutComStyle.buttonText}>No</Text>
        </TouchableOpacity>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["#C83B62", "#7F35CD"]}
          style={logoutComStyle.button}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={logoutComStyle.buttonActionLayer}
          >
            <Text style={[logoutComStyle.buttonText, { color: Color.C_white }]}>
              Yes
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default LogoutComponents;
