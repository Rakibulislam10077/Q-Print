import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { newPassStyle } from "./NewPassStyle";
import CommonHeader from "../../../components/common/commonHeader/CommonHeader";
import { BackArrow, Eye, EyeOf } from "../../../constants/allSvg/AllSvg";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const NewPass = () => {
  const navigation: any = useNavigation();
  const [newPassView, setNewPassView] = useState(false);
  const [conPass, setConPass] = useState(false);

  return (
    <View style={newPassStyle.container}>
      {/* header container */}
      <View style={newPassStyle.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={newPassStyle.title}>Forgot Password</Text>
      </View>
      {/* body container */}
      <View style={newPassStyle.bodyCon}>
        <Text style={newPassStyle.text1}>Type New password</Text>
        <Text style={newPassStyle.text2}>
          Set the password for your account so you can access all the features.
        </Text>
        {/* password input and label container */}
        <View style={newPassStyle.labelAndInputCon}>
          <Text style={newPassStyle.label}>New Password</Text>
          <View style={newPassStyle.inputCon}>
            <TextInput
              secureTextEntry={newPassView}
              style={newPassStyle.input}
              placeholder="new password"
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setNewPassView(!newPassView)}
            >
              {newPassView ? <Eye /> : <EyeOf />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={newPassStyle.labelAndInputCon}>
          <Text style={newPassStyle.label}>Confirm Password</Text>
          <View style={newPassStyle.inputCon}>
            <TextInput
              secureTextEntry={conPass}
              style={newPassStyle.input}
              placeholder="confirm password"
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setConPass(!conPass)}
            >
              {conPass ? <Eye /> : <EyeOf />}
            </TouchableOpacity>
          </View>
        </View>
        {/* save password button */}
        <LinearGradient
          colors={["#C83B62", "#7F35CD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={newPassStyle.saveButton}
        >
          <TouchableOpacity style={newPassStyle.actionLayer}>
            <Text style={newPassStyle.buttonText}>Save new password</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default NewPass;
