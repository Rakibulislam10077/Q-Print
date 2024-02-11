import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { paperTypeStyle } from './PaperTypeStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Color } from '../../../constants/GlobalStyle';
import { Divider } from 'react-native-paper';
import { Upload } from '../../../../assets/allSvg/AllSvg';
import Animated, { FadeInDown } from 'react-native-reanimated';

const paperType = [
  {
    type: 'Inkjet printer paper',
  },
  {
    type: 'Laser Printer paper',
  },
  {
    type: 'Matte paper',
  },
  {
    type: 'Glossy paper',
  },
  {
    type: 'Card stock paper',
  },
  {
    type: 'Bond & Label paper',
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

const PaperTypeComponent = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentIndexInPrint, setCurrentIndexInPrint] = useState<number>(0);

  const handlePaperType = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrintMode = (index: number) => {
    setCurrentIndexInPrint(index);
  };

  return (
    <Animated.View entering={FadeInDown.delay(50).duration(550)} style={paperTypeStyle.container}>
      <Text style={paperTypeStyle.title}>What type of paper do you need?</Text>
      {/* all paper type container */}
      <View style={paperTypeStyle.paperTypeCon}>
        {paperType.map((i, index) => {
          return (
            <LinearGradient
              colors={currentIndex === index ? ['#C83B62', '#7F35CD'] : ['#fff', '#fff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[paperTypeStyle.typeItem]}
            >
              <TouchableOpacity
                onPress={() => handlePaperType(index)}
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
                  {i.type}
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
                colors={currentIndexInPrint === index ? ['#C83B62', '#7F35CD'] : ['#fff', '#fff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={paperTypeStyle.mode}
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
                        color: currentIndexInPrint === index ? Color.C_white : 'rgba(0,0,0,0.7)',
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
        <TouchableOpacity activeOpacity={0.7} style={paperTypeStyle.uploadButton}>
          <Upload />
          <Text style={paperTypeStyle.uploadButtonText}>Upload file</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default PaperTypeComponent;
