import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
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
} from "../../constants/allSvg/AllSvg";
import { LinearGradient } from "expo-linear-gradient";
import { profileStyle } from "./ProfileStyle";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Badge, Divider } from "react-native-paper";
import Modal from "react-native-modal";
import RatingComponents from "../../components/modalComponents/ratingCom/RatingComponents";
import { logFunc } from "../../utils/log";
import LogoutComponents from "../../components/modalComponents/logoCom/LogoutComponents";
import * as ImagePicker from "expo-image-picker";
const Profile = () => {
  const navigation: any = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [image, setImage] = useState<any>();
  const [isCameraModalOpen, setIsCameraModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  // =========== rating modal ==============
  const RatingModal = () => {
    setModalIndex(0);
    setIsModalVisible(true);
  };
  // =========== shareModal ============
  const ShareModal = () => {
    setModalIndex(1);
    setIsModalVisible(true);
  };
  //  ========= logout modal ==========
  const LogoutModal = () => {
    setModalIndex(2);
    setIsModalVisible(true);
  };

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
          <Text style={profileStyle.headerTitle}>My Profile</Text>
        </View>
        {/* profile section */}
        <View style={profileStyle.profileCon}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <EditIcon />
          </TouchableOpacity>
          <View style={profileStyle.userImg}>
            <Image style={profileStyle.img} source={{ uri: image }} />
          </View>
          <TouchableOpacity
            onPress={() => {
              setIsCameraModalOpen(true);
            }}
            activeOpacity={0.7}
          >
            <CameraIcon />
          </TouchableOpacity>
        </View>
        <Text style={profileStyle.userName}>Mohammad Shahin</Text>
        {/* body section */}
        <View style={profileStyle.bodyCon}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate("OrderAndPrinterDesignPage")}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <PrivacyIcon />
                <Text style={profileStyle.title}>
                  Order for Printing design
                </Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ================ end here ================== */}
            <TouchableOpacity
              onPress={() => navigation.navigate("OrderHistory")}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <History />
                <Text style={profileStyle.title}>My Order History</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Review")}
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
            {/* ============ end here =========== */}
            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationPage")}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <NotificationBell />
                <Text style={profileStyle.title}>Notifications</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Favorite")}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <FavIcon />
                <Text style={profileStyle.title}>Favorite</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            <Divider />
            {/* ============ end here =========== */}
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
            {/* ============ end here =========== */}
            <TouchableOpacity
              onPress={() => ShareModal()}
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
            {/* ============ end here =========== */}
            <TouchableOpacity
              onPress={() => navigation.navigate("TermsAndCond")}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <TermsAndConditionIcon />
                <Text style={profileStyle.title}>Terms & Conditions</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              onPress={() => navigation.navigate("PrivacyPolicy")}
              activeOpacity={0.7}
              style={profileStyle.routeItemCon}
            >
              <View style={profileStyle.iconAndTitleCon}>
                <PrivacyIcon />
                <Text style={profileStyle.title}>Privacy Policy</Text>
              </View>
              <GoArrow />
            </TouchableOpacity>
            {/* ============ end here =========== */}
            <TouchableOpacity
              onPress={() => navigation.navigate("FAQ")}
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
            {/* ============ end here =========== */}
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
        </View>
      </LinearGradient>
      <StatusBar style="light" />
      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        onBackButtonPress={() => setIsModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={100}
        animationOutTiming={100}
        isVisible={isModalVisible}
        style={{ justifyContent: "flex-end", margin: 0 }}
        backdropTransitionInTiming={100}
        backdropTransitionOutTiming={100}
      >
        <View style={profileStyle.modal}>
          {modalIndex === 0 ? (
            <RatingComponents />
          ) : modalIndex === 1 ? (
            <View style={{ backgroundColor: "#fff", height: 400 }}>
              <Text>logout</Text>
            </View>
          ) : (
            <LogoutComponents />
          )}
        </View>
      </Modal>

      <Modal
        onBackdropPress={() => setIsCameraModalOpen(false)}
        onBackButtonPress={() => setIsCameraModalOpen(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
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

export default Profile;
