import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
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
import CustomAnimatedLogo from '../../components/customLogo/CustomAnimatedLogo';
import { SingUpFormState } from '../../types/interfaces/signUpAndLogin.interface';
import { useUserRegistrationMutation } from '../../redux/api/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '../../constants/storageKey';

const SignUp = () => {
  const [eye, setEye] = useState(true);
  const navigation: any = useNavigation();

  const [userRegistration] = useUserRegistrationMutation();

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignUp = async () => {
    const formData = new FormData();

    const userData = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    console.log(userData);

    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);

    console.log(formData);

    try {
      const result = await userRegistration(formData);
      //@ts-ignore
      await AsyncStorage.setItem(STORAGE_KEY, result?.data?.data);
    } catch (error) {}
  };

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
      <CustomAnimatedLogo />
      {/* input container */}
      <ScrollView>
        <View style={SignUpStyle.inputContainer}>
          <Text style={SignUpStyle.signUpText}>Sign Up</Text>
          {/* number input and labe container */}
          <View style={SignUpStyle.inputAndTextCon}>
            <Text style={SignUpStyle.label}>Full Name</Text>
            <TextInput
              onChangeText={(text) => setFullName(text)}
              placeholder="Full Name"
              keyboardType="default"
              style={SignUpStyle.input}
            />
          </View>
          {/* QID input and labe container */}
          <View style={SignUpStyle.inputAndTextCon}>
            <Text style={SignUpStyle.label}>Email</Text>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              keyboardType="default"
              style={SignUpStyle.input}
            />
          </View>
          {/* password input and label container */}
          <View style={SignUpStyle.inputAndTextCon}>
            <Text style={SignUpStyle.label}>Password</Text>
            {/* password */}
            <View style={SignUpStyle.passwordInputCon}>
              <TextInput
                onChangeText={(text) => setPassword(text)}
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
                onChangeText={(text) => setConfirmPassword(text)}
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
              onPress={() => {
                handleSignUp();
                // navigation.navigate('OTP')
              }}
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
