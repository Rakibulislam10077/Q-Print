import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { orderAndPrinterDesignStyle } from './CustomOrderStyle';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import PrintingPaperSizeComponent from '../../components/PrintingDesignComponent/paperSize/PrintingPaperSizeComponent';
import PaperTypeComponent from '../../components/PrintingDesignComponent/paperType/PaperTypeComponent';
import TotalOrderComponent from '../../components/PrintingDesignComponent/placedOrder/PlacedOrder';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown } from 'react-native-reanimated';

const OrderAndPrinterDesignPage = () => {
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
        <PrintingPaperSizeComponent />
        {/* paper type container */}
        <PaperTypeComponent />
        {/* total order container  */}
        <TotalOrderComponent />
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

export default OrderAndPrinterDesignPage;
