/**
 * Profile Component
 *
 * This component represents the user's profile page, displaying various options and settings.
 *
 * Features:
 * - Allows users to view and edit their profile information.
 * - Provides options for users to upload a profile picture from the camera or gallery.
 * - Displays a list of profile-related options and settings, such as order history, notifications, favorites, etc.
 * - Includes modal components for rating, sharing, and logging out.
 * - Utilizes reanimated animations for smoother transitions and interactions.
 * - Utilizes LinearGradient for gradient background styling.
 * - Utilizes StatusBar for configuring the status bar style.
 *
 * @returns JSX.Element
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, ScrollView, Image } from 'react-native';
import {
  CameraIcon,
  EditIcon,
  FAQIcon,
  FavIcon,
  GalleryIcon,
  GoArrow,
  History,
  LogoutIcon,
  ModalCameraIcon,
  NotificationBell,
  PrivacyIcon,
  ReviewIcon,
  ShareIcon,
  StartIcon,
  TermsAndConditionIcon,
  WhiteBackArrow,
} from '../../../assets/allSvg/AllSvg';
import { LinearGradient } from 'expo-linear-gradient';
import { profileStyle } from './ProfileStyle';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Badge, Divider } from 'react-native-paper';
import Modal from 'react-native-modal';
import RatingComponents from '../../components/modalComponents/rating/RatingComponents';
import { logFunc } from '../../utils/log';
import LogoutComponents from '../../components/modalComponents/logOut/LogoutComponents';
import * as ImagePicker from 'expo-image-picker';
import Animated, { FadeInDown } from 'react-native-reanimated';
import * as Sharing from 'expo-sharing';
import ContactUs from '../../components/modalComponents/contactUs/ContactUs';

const Profile: React.FC = () => {
  const navigation: any = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [image, setImage] = useState<any>();
  const [isCameraModalOpen, setIsCameraModalOpen] = useState<boolean>(false);

  // Toggles the visibility of the modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Opens the rating modal
  const RatingModal = () => {
    setModalIndex(0);
    setIsModalVisible(true);
  };

  // Opens the share modal
  const ShareModal = () => {
    setModalIndex(1);
    setIsModalVisible(true);
  };

  // Opens the logout modal
  const LogoutModal = () => {
    setModalIndex(2);
    setIsModalVisible(true);
  };
  // Opens the logout modal
  const ContactModal = () => {
    setModalIndex(3);
    setIsModalVisible(true);
  };

  // Uploads an image from the camera
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

  // Uploads an image from the gallery
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

  // Saves the uploaded image
  const saveImage = async (image: any) => {
    try {
      // update displayed image
      setImage(image);
      setIsCameraModalOpen(false);
    } catch (error) {
      throw error;
    }
  };

  const apk: any = '/Users/rakibulislam/Downloads/Q-Print';
  return (
    <View style={{ flex: 1 }}>
      {/* Linear gradient background */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#C83B62', '#7F35CD']}
        style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 30 : 30 }}
      >
        {/* Header section */}
        <View style={profileStyle.headerContainer}>
          {/* Back button */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteBackArrow />
          </TouchableOpacity>
          <Text style={profileStyle.headerTitle}>My Profile</Text>
        </View>

        {/* Profile section */}
        <View style={profileStyle.profileCon}>
          {/* Edit profile button */}
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('EditProfile')}>
            <EditIcon />
          </TouchableOpacity>
          {/* User image */}
          <View style={profileStyle.userImg}>
            <Image style={profileStyle.img} source={{ uri: image }} />
          </View>
          {/* Camera button */}
          <TouchableOpacity
            onPress={() => {
              setIsCameraModalOpen(true);
            }}
            activeOpacity={0.7}
          >
            <CameraIcon />
          </TouchableOpacity>
        </View>
        {/* User name */}
        <Text style={profileStyle.userName}>Mohammad Shahin</Text>

        {/* Body section */}
        <Animated.View entering={FadeInDown.delay(50).duration(250)} style={profileStyle.bodyCon}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Order for printing design */}
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderAndPrinterDesignPage')}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <PrivacyIcon />
                <Text style={profileStyle.title}>Order for Printing design</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* My order history */}
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderHistory')}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <History />
                <Text style={profileStyle.title}>My Order History</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* Review */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Review')}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <ReviewIcon />
                <Text style={profileStyle.title}>Review</Text>
                <Badge style={profileStyle.reviewBaseStyle}>5</Badge>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* Notifications */}
            <TouchableOpacity
              onPress={() => navigation.navigate('NotificationPage')}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <NotificationBell />
                <Text style={profileStyle.title}>Notifications</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* Favorite */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Favorite')}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <FavIcon />
                <Text style={profileStyle.title}>Favorite</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* contact us */}
            <TouchableOpacity
              onPress={() => ContactModal()}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <FavIcon />
                <Text style={profileStyle.title}>Contact us</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            <Divider />
            {/* Rate */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
              onPress={() => RatingModal()}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <StartIcon />
                <Text style={profileStyle.title}>Rate</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* Share */}
            <TouchableOpacity
              onPress={() => {
                Sharing.shareAsync(apk.file);
                // ShareModal();
              }}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <ShareIcon />
                <Text style={profileStyle.title}>Share</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            <Divider />
            {/* Terms & Conditions */}
            <TouchableOpacity
              onPress={() => navigation.navigate('TermsAndCond')}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <TermsAndConditionIcon />
                <Text style={profileStyle.title}>Terms & Conditions</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* Privacy Policy */}
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyPolicy')}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <PrivacyIcon />
                <Text style={profileStyle.title}>Privacy Policy</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* FAQ */}
            <TouchableOpacity
              onPress={() => navigation.navigate('FAQ')}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <FAQIcon />
                <Text style={profileStyle.title}>FAQ</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            <Divider />
            {/* Logout */}
            <TouchableOpacity
              onPress={() => LogoutModal()}
              activeOpacity={0.7}
              style={[profileStyle.routeItemCon, { marginTop: 10 }]}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <LogoutIcon />
                <Text style={profileStyle.title}>Logout</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </LinearGradient>
      {/* StatusBar */}
      <StatusBar style="light" />
      {/* Modal for various actions */}
      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
        isVisible={isModalVisible}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={profileStyle.modal}>
          {/* Rating, Share, and Logout components */}
          {modalIndex === 0 ? (
            <RatingComponents />
          ) : modalIndex === 1 ? (
            <View style={{ backgroundColor: '#fff', height: 400 }}>
              <Text>logout</Text>
            </View>
          ) : modalIndex === 2 ? (
            <LogoutComponents />
          ) : (
            <ContactUs />
          )}
        </View>
      </Modal>
      {/* Modal for selecting image source */}
      <Modal
        onBackdropPress={() => setIsCameraModalOpen(false)}
        onBackButtonPress={() => setIsCameraModalOpen(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
        isVisible={isCameraModalOpen}
        style={{ margin: 0, justifyContent: 'flex-end' }}
      >
        <View style={profileStyle.cameraModal}>
          <View style={profileStyle.cameraModalIndicator} />
          <Text style={profileStyle.ProfileModalTitle}>Profile Photo</Text>
          <View style={profileStyle.cameraModalContentCon}>
            {/* Option to select from gallery */}
            <View>
              <TouchableOpacity
                onPress={() => uploadImageFromGallery()}
                style={profileStyle.iconCon}
              >
                <GalleryIcon />
                <Text style={profileStyle.profileModalLabel}>Gallery</Text>
              </TouchableOpacity>
            </View>
            {/* Option to take a photo */}
            <View>
              <TouchableOpacity onPress={() => uploadImage()} style={profileStyle.iconCon}>
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

export default Profile;
