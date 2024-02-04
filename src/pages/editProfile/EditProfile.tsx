import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { profileStyle } from "../../screen/profile/ProfileStyle";
import {
  CameraIcon,
  ColoredCameraIcon,
  GalleryIcon,
  ModalCameraIcon,
  WhiteBackArrow,
} from "../../constants/allSvg/AllSvg";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { editProfileStyle } from "./EditProfileStyle";
import { Divider } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";
import { StatusBar } from "expo-status-bar";

const EditProfile = () => {
  const navigation: any = useNavigation();
  const [image, setImage] = useState<any>();
  const [isCameraModalOpen, setIsCameraModalOpen] = useState<boolean>(false);

  // upload image from camera
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
      alert("Error Uploading image" + error.message);
    }
  };

  // upload image from gallery
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
      alert("Error Uploading image" + error.message);
    }
  };

  const saveImage = async (image: any) => {
    try {
      // update displayed image
      setImage(image);
      setIsCameraModalOpen(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#C83B62", "#7F35CD"]}
        style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 30 : 30 }}
      >
        {/* header section */}
        <View style={profileStyle.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WhiteBackArrow />
          </TouchableOpacity>
          <Text style={profileStyle.headerTitle}>Edit Profile</Text>
        </View>
        {/* profile section */}
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
        {/* body container */}
        <View style={editProfileStyle.bodyContainer}>
          <View>
            <Text style={editProfileStyle.label}>Full Name</Text>
            <TextInput
              style={editProfileStyle.input}
              placeholder="Mohammad Shahin"
            />
          </View>
          <Divider style={editProfileStyle.dividerStyle} />
          <View>
            <Text style={editProfileStyle.label}>Full Name</Text>
            <TextInput
              style={editProfileStyle.input}
              placeholder="hello@expersquad.net"
            />
          </View>
          <Divider style={editProfileStyle.dividerStyle} />
          <View>
            <Text style={editProfileStyle.label}>Full Name</Text>
            <TextInput
              style={editProfileStyle.input}
              placeholder="01601113299"
            />
          </View>
          <Divider style={editProfileStyle.dividerStyle} />
          <View>
            <Text style={editProfileStyle.label}>Full Name</Text>
            <TextInput
              style={editProfileStyle.input}
              placeholder="Rakibulislam118"
            />
          </View>

          {/* update button */}
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#C83B62", "#7F35CD"]}
            style={editProfileStyle.updateButton}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={editProfileStyle.updateButtonTouchAction}
            >
              <Text style={editProfileStyle.buttonText}>Update</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>

      <Modal
        onBackdropPress={() => setIsCameraModalOpen(false)}
        onBackButtonPress={() => setIsCameraModalOpen(false)}
        swipeDirection="down"
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={100}
        animationOutTiming={100}
        isVisible={isCameraModalOpen}
        style={{ justifyContent: "center", margin: 0, alignItems: "center" }}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
      >
        <View style={profileStyle.cameraModal}>
          <Text style={profileStyle.ProfileModalTitle}>Profile Photo</Text>
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
      <StatusBar style="light" />
    </View>
  );
};

export default EditProfile;
