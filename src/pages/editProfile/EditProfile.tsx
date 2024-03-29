/**
 * Edit Profile Component
 *
 * This component allows users to edit their profile information including name, email, phone number, and profile picture.
 *
 * Features:
 * - Displays a header with the title "Edit Profile".
 * - Allows users to upload or capture a new profile picture using the camera or gallery.
 * - Provides input fields for editing name, email, phone number, and username.
 * - Includes a button to update the profile information.
 * - Utilizes LinearGradient for gradient background styling.
 * - Utilizes StatusBar for configuring the status bar style.
 * - Utilizes Modal for displaying options to upload a profile picture.
 *
 * @returns JSX.Element
 */

import { View, Text, TouchableOpacity, Platform, Image } from 'react-native';
import React, { useState } from 'react';
import { profileStyle } from '../../screen/profile/ProfileStyle';
import {
  ColoredCameraIcon,
  GalleryIcon,
  ModalCameraIcon,
  WhiteBackArrow,
} from '../../../assets/allSvg/AllSvg';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { editProfileStyle } from './EditProfileStyle';
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import EditProfileTopTab from '../../routes/material_Tab/EditProfileTopTab';
import { Color } from '../../constants/GlobalStyle';

const EditProfile = () => {
  const navigation: any = useNavigation();
  const [image, setImage] = useState<any>();
  const [isCameraModalOpen, setIsCameraModalOpen] = useState<boolean>(false);

  // Upload image from camera
  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        await saveImage(result.assets[0].uri);
      }
    } catch (error: any) {
      alert('Error Uploading image' + error.message);
    }
  };

  // Upload image from gallery
  const uploadImageFromGallery = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        await saveImage(result.assets[0].uri);
      }
    } catch (error: any) {
      alert('Error Uploading image' + error.message);
    }
  };

  // Save the uploaded image
  const saveImage = async (image: any) => {
    try {
      // Update displayed image
      setImage(image);
      setIsCameraModalOpen(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Background gradient */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#C83B62', '#7F35CD']}
        style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 30 : 30 }}
      >
        {/* Header section */}
        <View style={profileStyle.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteBackArrow />
          </TouchableOpacity>
          <Text style={profileStyle.headerTitle}>Edit Profile</Text>
        </View>
        {/* Profile section */}
        <View style={editProfileStyle.userImgCon}>
          <Image style={editProfileStyle.img} source={{ uri: image }} />
          <TouchableOpacity
            onPress={() => {
              setIsCameraModalOpen(true);
            }}
            style={editProfileStyle.cameraIcon}
          >
            <ColoredCameraIcon />
          </TouchableOpacity>
        </View>
        {/* Body container */}
        <View style={editProfileStyle.bodyCon}>
          <EditProfileTopTab />
        </View>
      </LinearGradient>

      {/* Camera Modal */}
      <Modal
        onBackdropPress={() => setIsCameraModalOpen(false)}
        onBackButtonPress={() => setIsCameraModalOpen(false)}
        swipeDirection="down"
        isVisible={isCameraModalOpen}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={profileStyle.cameraModal}>
          <View style={profileStyle.cameraModalIndicator} />
          <Text style={profileStyle.ProfileModalTitle}>Change Profile Picture</Text>
          <View style={profileStyle.cameraModalContentCon}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  uploadImageFromGallery();
                }}
                style={profileStyle.iconCon}
              >
                <GalleryIcon />
                <Text style={profileStyle.profileModalLabel}>Gallery</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  uploadImage();
                  setIsCameraModalOpen(false);
                }}
                style={profileStyle.iconCon}
              >
                <ModalCameraIcon />
                <Text style={profileStyle.profileModalLabel}>Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* StatusBar */}
      <StatusBar style="dark" />
    </View>
  );
};

export default EditProfile;
