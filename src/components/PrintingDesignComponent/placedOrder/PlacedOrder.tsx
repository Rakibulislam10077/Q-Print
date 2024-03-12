import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { orderAndPrinterDesignStyle } from '../../../pages/custom_order/CustomOrderStyle';
import { placedOrderStyle } from './PlacedOrderStyle';
import { LinearGradient } from 'expo-linear-gradient';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Color, Font } from '../../../constants/GlobalStyle';
const TotalOrderComponent = ({ handleSubmit }: any) => {
  const navigation: any = useNavigation();

  const submitAndroute = () => {
    // if(){
    //   navigation.navigate('customOrderConfirmation')}
    handleSubmit();
  };

  return (
    <View style={placedOrderStyle.container}>
      {/* <Text>
        You are placing a custom order, So After placing an order, our one of
        agent will contact you soon.
      </Text> */}
      <Text style={placedOrderStyle.title}>Total Order</Text>
      <Divider style={placedOrderStyle.divider} />
      <View>
        <View style={placedOrderStyle.totalOrderItem}>
          <Text style={placedOrderStyle.itemText}>Item of print</Text>
          <View style={placedOrderStyle.totalOrderItemPlusMinus}>
            <TouchableOpacity>
              <AntDesign name="minuscircleo" size={20} color="rgba(0,0,0,0.7)" />
            </TouchableOpacity>
            <View style={placedOrderStyle.priceQuantity}>
              <Text style={{ fontSize: 16 }}>100</Text>
            </View>
            <TouchableOpacity>
              <AntDesign name="pluscircleo" size={20} color="rgba(0,0,0,0.7)" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={placedOrderStyle.totalOrderItem}>
          <Text style={placedOrderStyle.itemText}>Printing Price</Text>
          <Text style={placedOrderStyle.printingPrice}>
            1300{' '}
            <Text style={{ color: Color.C_H_black, fontSize: Font.Font_S, fontWeight: '400' }}>
              QAR
            </Text>
          </Text>
        </View>
        <View style={placedOrderStyle.totalOrderItem}>
          <Text style={placedOrderStyle.itemText}>Delivery Charge</Text>
          <Text style={[placedOrderStyle.printingPrice]}>
            50{' '}
            <Text style={{ color: Color.C_H_black, fontSize: Font.Font_S, fontWeight: '400' }}>
              QAR
            </Text>
          </Text>
        </View>
      </View>
      <Divider style={placedOrderStyle.divider} />
      <View style={placedOrderStyle.totalPriceCon}>
        <Text style={placedOrderStyle.totalPrice}>Total Price</Text>
        <Text style={placedOrderStyle.price}>
          1400 <Text style={placedOrderStyle.currency}>QAR</Text>
        </Text>
      </View>
      <LinearGradient
        colors={['#C83B62', '#7F35CD']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={placedOrderStyle.button}
      >
        <TouchableOpacity
          onPress={() => {
            submitAndroute();
          }}
          activeOpacity={0.7}
          style={placedOrderStyle.actionLayer}
        >
          <Text style={placedOrderStyle.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default TotalOrderComponent;
