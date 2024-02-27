import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { loginStyle } from './LoginStyle';
import { Eye, EyeOf, WhiteLogo } from '../../../assets/allSvg/AllSvg';
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '../../constants/GlobalStyle';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { useLoginUserMutation } from '../../redux/api/apiSlice';

const Login = () => {
  const navigation: any = useNavigation();
  const [eye, setEye] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [emailOrPhone, setEmailOrPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [loginUser, { data, isLoading, isError, isSuccess }] = useLoginUserMutation();
  const [loginUser, { data, isLoading, isError, isSuccess }] = useLoginUserMutation();
  const handleSubmit = async () => {
    if (emailOrPhone && password) {
      await loginUser({ emailOrPhone, password });
    } else {
      return Alert.alert('sorry!');
    }
    console.log(emailOrPhone, password);
    setEmailOrPhone('');
    setPassword('');
  };

  // console.log(isLoading, 'loading');
  // console.log(isError, 'error');
  // console.log(isSuccess, 'success');
  // console.log(EmailOrPhone, 'email');
  // console.log(password, 'password');
  useEffect(() => {
    if (isSuccess) {
      Alert.alert('success');
      () => navigation.navigate('Home');
    }
  }, [isSuccess]);

  return (
    <View style={loginStyle.container}>
      {/* gradient background image container */}
      <View style={loginStyle.gradientContainer}>
        <Image
          style={loginStyle.gradientImg}
          source={require('../../../assets/image/LoginGradient.png')}
        />
      </View>
      {/* company logo container */}
      <View style={loginStyle.LogoContainer}>
        <WhiteLogo />
      </View>
      {/* input container */}
      <View style={loginStyle.inputContainer}>
        <Text style={loginStyle.login}>Login</Text>
        <Text style={loginStyle.dummy}>Please login to continue</Text>
        {/* input and label container */}
        <View style={loginStyle.inputAndLabelCon}>
          <Text style={loginStyle.label}>Email or Phone</Text>
          <TextInput
            placeholder="Type here"
            style={loginStyle.input}
            value={emailOrPhone}
            onChangeText={(Text) => setEmailOrPhone(Text)}
          />
        </View>
        {/* input and label container */}
        <View style={loginStyle.inputAndLabelCon}>
          <Text style={loginStyle.label}>Password</Text>
          <View style={[loginStyle.inputPasswordCon]}>
            <TextInput
              style={loginStyle.inputPassword}
              secureTextEntry={eye}
              placeholder="Enter password"
              value={password}
              onChangeText={(Text) => setPassword(Text)}
            />
            <TouchableOpacity onPress={() => setEye(!eye)} style={loginStyle.eye}>
              {eye ? <EyeOf /> : <Eye />}
            </TouchableOpacity>
          </View>
        </View>
        {/* remember and forgot password text container */}
        <View style={loginStyle.rememberAndForgotTextCon}>
          <TouchableOpacity activeOpacity={0.7} style={loginStyle.checkMarkAndRememberText}>
            <Image source={require('../../../assets/image/checkIcon.png')} />
            <Text style={loginStyle.rememberText}>Remember me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsModalVisible(true)} activeOpacity={0.7}>
            <Text style={loginStyle.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        {/* login button */}
        <LinearGradient
          colors={['#C83B62', '#7F35CD']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={loginStyle.loginButtonCon}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={loginStyle.actionLayer}
            onPress={() => handleSubmit()}
          >
            <Text style={loginStyle.buttonText}>Log in</Text>
          </TouchableOpacity>
        </LinearGradient>
        {/* sign up button and text con */}
        <View>
          <Text style={loginStyle.signupText}>
            Don't have an account?{'  '}
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={{ color: Color.C_main, fontWeight: '600' }}
            >
              Sing Up
            </Text>
          </Text>
        </View>
      </View>
      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => setIsModalVisible(!isModalVisible)}
        isVisible={isModalVisible}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        backdropTransitionInTiming={50}
        backdropTransitionOutTiming={50}
      >
        {/* modal content */}
        <View style={loginStyle.modalContent}>
          <View style={loginStyle.modalIndicator} />
          <Text style={loginStyle.forgotTextInModal}>Forgot Password</Text>
          <Text style={loginStyle.dummyText}>
            Enter your email for the verification proccess we will send 4 degits code to your email
          </Text>
          {/* input and input labe */}
          <View style={loginStyle.inputAndLabeCon}>
            <Text style={loginStyle.label}>Email or Phone Number</Text>
            <TextInput style={loginStyle.input} placeholder="Enter Email" />
          </View>
          <LinearGradient
            colors={['#C83B62', '#7F35CD']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={loginStyle.continueButton}
          >
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
                navigation.navigate('forgotPass');
              }}
              activeOpacity={0.7}
              style={loginStyle.actionLayer}
            >
              <Text style={loginStyle.buttonText}>Continue</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
};

export default Login;
