import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { otpStyle } from "./OTPStyle";
import { Color } from "../../constants/GlobalStyle";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const otpInput = [1, 1, 1, 1];
const OTP = ({ disable }: any) => {
  const inputRefs = useRef<Array<TextInput>>([]);
  const [focus, setFocus] = useState(false);
  const navigation: any = useNavigation();

  const handleInputChange = (text: string, index: any) => {
    setFocus(!focus);
    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }

    return inputRefs?.current[index - 1]?.focus();
  };

  return (
    <View style={otpStyle.container}>
      <ScrollView>
        {/* logo container */}
        <View style={otpStyle.logoContainer}>
          <Image
            style={otpStyle.otpLogo}
            source={require("../../../assets/image/otpScreenLogo.png")}
          />
        </View>
        <View style={otpStyle.textContainer}>
          <Text style={otpStyle.text1}>Enter 4 Digits Code</Text>
          <Text style={otpStyle.text2}>
            Enter the 4 digits code that you received on {`\n`} you email
          </Text>
          <Text style={otpStyle.email}>akrc.upwork@gmail.com</Text>
        </View>
        <View style={[otpStyle.otpInputCon]}>
          {[...new Array(otpInput.length)].map((item, index) => (
            <TouchableOpacity
              style={[
                otpStyle.otpInput,
                otpInput.length !== 0
                  ? { borderBottomColor: Color.C_border }
                  : { borderBottomColor: "red" },
              ]}
            >
              <TextInput
                ref={(ref) => {
                  if (ref && !inputRefs.current.includes(ref)) {
                    inputRefs.current = [...inputRefs.current, ref];
                  }
                }}
                key={index}
                maxLength={1}
                contextMenuHidden
                selectTextOnFocus
                editable={!disable}
                testID={`OTPInput=${index}`}
                keyboardType="numeric"
                style={{
                  width: "50%",
                  height: "100%",
                  fontSize: 24,
                  color: Color.C_main,
                }}
                focusable={focus}
                onChangeText={(text) => handleInputChange(text, index)}
              />
            </TouchableOpacity>
          ))}
        </View>
        {/* time container */}
        <View style={otpStyle.timeContainer}></View>
        {/* verify button */}
        <LinearGradient
          colors={["#C83B62", "#7F35CD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={otpStyle.verifyButton}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("optionalSignIn")}
            style={otpStyle.actionLayer}
          >
            <Text style={otpStyle.buttonText}>Verify</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default OTP;
