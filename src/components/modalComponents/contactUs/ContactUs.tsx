import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { contactUsStyle } from './ContactUsStyle';
import { MessageBox, Messenger, Whatsapp } from '../../../../assets/allSvg/AllSvg';

const ContactUs = () => {
  return (
    <View style={contactUsStyle.container}>
      <Text style={contactUsStyle.title}>Contact Us</Text>
      <Text style={contactUsStyle.subText}>Contact with us by using Messenger and whatsapp</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[contactUsStyle.buttons, { backgroundColor: '#097DFF' }]}
      >
        <Messenger />
        <Text style={contactUsStyle.buttonTexts}>Messenger</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[contactUsStyle.buttons, { backgroundColor: '#25D366' }]}
      >
        <Whatsapp />
        <Text style={contactUsStyle.buttonTexts}>Whatsapp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactUs;
