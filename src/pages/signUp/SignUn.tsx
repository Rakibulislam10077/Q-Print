import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SignUpStyle } from './SignUpStyle';
import {
  Eye,
  EyeOf,
  ILogo,
  NLogo,
  PLogo,
  QLogo,
  RLogo,
  TLogo,
  WhiteLogo,
} from '../../../assets/allSvg/AllSvg';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Animated, { ZoomInUp } from 'react-native-reanimated';

const SignUp = () => {
  const [eye, setEye] = useState(true);
  const navigation: any = useNavigation();
  return (
    <View style={SignUpStyle.container}>
      {/* gradient image container */}
      <View style={SignUpStyle.gradientImgCon}>
        <Image
          style={SignUpStyle.gradientImg}
          source={require('../../../assets/image/LoginGradient.png')}
        />
      </View>
      {/* logo container */}
      <View style={SignUpStyle.logoCon}>
        <Animated.View entering={ZoomInUp.delay(50).duration(500).springify().damping(14)}>
          <QLogo />
        </Animated.View>
        <Animated.View entering={ZoomInUp.delay(100).duration(600).springify().damping(14)}>
          <PLogo />
        </Animated.View>
        <Animated.View
          entering={ZoomInUp.delay(200).duration(700).springify().damping(14)}
          style={logoStyle}
        >
          <RLogo />
        </Animated.View>
        <Animated.View
          entering={ZoomInUp.delay(300).duration(800).springify().damping(14)}
          style={logoStyle}
        >
          <ILogo />
        </Animated.View>
        <Animated.View
          entering={ZoomInUp.delay(400).duration(900).springify().damping(14)}
          style={logoStyle}
        >
          <NLogo />
        </Animated.View>
        <Animated.View
          entering={ZoomInUp.delay(500).duration(1000).springify().damping(14)}
          style={logoStyle}
        >
          <TLogo />
        </Animated.View>
      </View>
      {/* input container */}
      <ScrollView>
        <View style={SignUpStyle.inputContainer}>
          <Text style={SignUpStyle.signUpText}>Sign Up</Text>
          {/* number input and labe container */}
          <View style={SignUpStyle.inputAndTextCon}>
            <Text style={SignUpStyle.label}>Email Or Phone Number</Text>
            <TextInput placeholder="+012" keyboardType="numeric" style={SignUpStyle.input} />
          </View>
          {/* QID input and labe container */}
          <View style={SignUpStyle.inputAndTextCon}>
            <Text style={SignUpStyle.label}>QID</Text>
            <TextInput placeholder="Type QID" keyboardType="numeric" style={SignUpStyle.input} />
          </View>
          {/* password input and label container */}
          <View style={SignUpStyle.inputAndTextCon}>
            <Text style={SignUpStyle.label}>Password</Text>
            {/* password */}
            <View style={SignUpStyle.passwordInputCon}>
              <TextInput
                secureTextEntry={eye}
                placeholder="Enter Password"
                style={SignUpStyle.passwordInput}
              />
              <TouchableOpacity
                onPress={() => setEye(!eye)}
                activeOpacity={0.7}
                style={SignUpStyle.eye}
              >
                {eye ? <EyeOf /> : <Eye />}
              </TouchableOpacity>
            </View>
          </View>
          {/* password input and label container */}
          <View style={SignUpStyle.inputAndTextCon}>
            <Text style={SignUpStyle.label}>Confirm Password</Text>
            {/* password */}
            <View style={SignUpStyle.passwordInputCon}>
              <TextInput
                secureTextEntry={eye}
                placeholder="Enter Password"
                style={SignUpStyle.passwordInput}
              />
              <TouchableOpacity
                onPress={() => setEye(!eye)}
                activeOpacity={0.7}
                style={SignUpStyle.eye}
              >
                {eye ? <EyeOf /> : <Eye />}
              </TouchableOpacity>
            </View>
          </View>
          {/* sign up button  */}
          <LinearGradient
            colors={['#C83B62', '#7F35CD']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={SignUpStyle.signUpButton}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('OTP')}
              style={SignUpStyle.actionLayer}
            >
              <Text style={SignUpStyle.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const logoStyle = { marginBottom: 5, marginLeft: 2 };
