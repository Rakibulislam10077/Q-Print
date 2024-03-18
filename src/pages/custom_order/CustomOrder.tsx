import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { orderAndPrinterDesignStyle } from './CustomOrderStyle';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import PrintingPaperSizeComponent from '../../components/PrintingDesignComponent/paperSize/PrintingPaperSizeComponent';
import PaperTypeComponent from '../../components/PrintingDesignComponent/paperType/PaperTypeComponent';
import TotalOrderComponent from '../../components/PrintingDesignComponent/placedOrder/PlacedOrder';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { paperSizeStyle } from '../../components/PrintingDesignComponent/paperSize/PaperSizeStyle';
import { Color } from '../../constants/GlobalStyle';
import { paperTypeStyle } from '../../components/PrintingDesignComponent/paperType/PaperTypeStyle';
import { Divider } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Upload } from '../../../assets/allSvg/AllSvg';
import * as ImagePicker from 'expo-image-picker';
import { useGetPaperTypeQuery } from '../../redux/api/apiSlice';

const paperBoxSize = [
  {
    text: '14" x 14"',
  },
  {
    text: '8" x 14"',
  },
  {
    text: '24" x 14"',
  },
  {
    text: '30" x 30"',
  },
  {
    text: '30" x 30"',
  },
];

const PrintingMode = [
  {
    mode: 'RGB',
  },
  {
    mode: 'Black & White',
  },
  {
    mode: 'More Version',
  },
];
const OrderAndPrinterDesignPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [defaultCurrentIndex, setDefaultCurrentIndex] = useState<number>(0);
  const [currentIndexInPrint, setCurrentIndexInPrint] = useState<number>(0);
  const [customWidth, setCustomWidth] = useState<number>(0);
  const [image, setImage] = useState<any>();
  const { data, isLoading } = useGetPaperTypeQuery(`printingSetupType=Paper Size`);

  const formData = new FormData();

  const handleDefaultPaperType = (index: number) => {
    setDefaultCurrentIndex(index);
  };

  const handlePaperType = (index: number, id: string) => {
    setCurrentIndex(index);
  };

  const handlePrintMode = (index: number) => {
    setCurrentIndexInPrint(index);
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
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = () => {
    formData.append('printingRequestFile', image);
    // formData.append('paperSize', customWidth);
    // console.log(fdata);
    // console.log(image);
  };

  const originalHeight = 10;
  const originalWidth = 20;

  return (
    <View style={orderAndPrinterDesignStyle.container}>
      {/* header section */}
      <CommonHeader title="Order for Printing a design" />
      {/* ========================================
                body container start here
        =================================== */}
      <ScrollView>
        {/* dummy text container */}
        <Animated.View
          entering={FadeInDown.delay(50).duration(500)}
          style={orderAndPrinterDesignStyle.dummyTextContainer}
        >
          <Text style={orderAndPrinterDesignStyle.text_one}>Request for a Printing</Text>
          <Text style={orderAndPrinterDesignStyle.text_Two}>
            We will print your design and send it to your delivery address
          </Text>
        </Animated.View>
        {/* paper size container */}
        <Animated.View
          entering={FadeInDown.delay(50).duration(550)}
          style={paperSizeStyle.container}
        >
          <Text style={paperSizeStyle.title}>Printing Paper size (Free)</Text>
          {/* paper size container */}
          <View style={paperSizeStyle.paperSizeCon}>
            {paperBoxSize.map((i, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleDefaultPaperType(index)}
                  activeOpacity={0.7}
                  key={index.toString()}
                  style={[
                    paperSizeStyle.sizeBox1,
                    { width: 70, height: 50 },
                    // { flex: index === 0 ? 1 : index === 1 ? 0.7 : 1.3 },
                    {
                      borderColor: defaultCurrentIndex === index ? Color.C_main : Color.C_border,
                    },
                  ]}
                >
                  <Text style={paperSizeStyle.sizeText}>{i.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {/* custom order input container */}
          <View style={paperSizeStyle.customOrderInputCon}>
            <Text style={paperSizeStyle.customOrderText}>Custom Order</Text>
            {/* width container */}
            <View style={paperSizeStyle.customHeightWidthCon}>
              <Text style={paperSizeStyle.label}>Width</Text>
              <View style={paperSizeStyle.inputCon}>
                <TextInput
                  onChangeText={(text: any) => setCustomWidth(text)}
                  maxLength={4}
                  keyboardType="numeric"
                  style={paperSizeStyle.input}
                />
              </View>
            </View>
            {/* height container */}
            <View style={paperSizeStyle.customHeightWidthCon}>
              <Text style={paperSizeStyle.label}>Height</Text>
              <View style={paperSizeStyle.inputCon}>
                <TextInput maxLength={4} keyboardType="numeric" style={paperSizeStyle.input} />
              </View>
            </View>
          </View>
        </Animated.View>
        {/* paper type container */}
        <Animated.View
          entering={FadeInDown.delay(50).duration(550)}
          style={paperTypeStyle.container}
        >
          <Text style={paperTypeStyle.title}>What type of paper do you need?</Text>
          {/* all paper type container */}
          <View style={paperTypeStyle.paperTypeCon}>
            {data?.data.map((i, index) => {
              return (
                <LinearGradient
                  colors={currentIndex === index ? ['#C83B62', '#7F35CD'] : ['#fff', '#fff']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[paperTypeStyle.typeItem]}
                  key={index.toString()}
                >
                  <TouchableOpacity
                    onPress={() => handlePaperType(index, i?._id)}
                    style={paperTypeStyle.actionLayer}
                    activeOpacity={0.7}
                    key={index.toString()}
                  >
                    <Text
                      style={[
                        paperTypeStyle.paperTypeText,
                        {
                          color: currentIndex === index ? Color.C_white : 'rgba(0,0,0,0.7)',
                        },
                      ]}
                    >
                      {i?.printingSetupType}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              );
            })}
          </View>
          <Divider style={paperTypeStyle.divider} />
          {/* printing mode container */}
          <View>
            <Text style={paperTypeStyle.printingModeTitle}>Print Mode</Text>
            <View style={paperTypeStyle.PrintModeCon}>
              {PrintingMode.map((i, index) => {
                return (
                  <LinearGradient
                    colors={
                      currentIndexInPrint === index ? ['#C83B62', '#7F35CD'] : ['#fff', '#fff']
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={paperTypeStyle.mode}
                    key={index.toString()}
                  >
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={paperTypeStyle.actionLayer}
                      onPress={() => handlePrintMode(index)}
                    >
                      <Text
                        style={[
                          paperTypeStyle.modeItemText,
                          {
                            color:
                              currentIndexInPrint === index ? Color.C_white : 'rgba(0,0,0,0.7)',
                          },
                        ]}
                      >
                        {i.mode}
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                );
              })}
            </View>
          </View>
          <Divider style={paperTypeStyle.divider} />
          {/* attachment container */}
          <View>
            <Text style={paperTypeStyle.attachmentText}>Attachment</Text>
            <TouchableOpacity
              onPress={() => uploadImageFromGallery()}
              activeOpacity={0.7}
              style={paperTypeStyle.uploadButton}
            >
              <Upload />
              <Text style={paperTypeStyle.uploadButtonText}>Upload file</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        {/* <PaperTypeComponent /> */}
        {/* total order container  */}
        <TotalOrderComponent handleSubmit={handleSubmit} />
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

export default OrderAndPrinterDesignPage;
