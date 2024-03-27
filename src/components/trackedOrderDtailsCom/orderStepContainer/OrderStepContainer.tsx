import { View, Text } from 'react-native';
import React from 'react';
import { orderStepContainerStyle } from './OrderStepStyle';
import { Calender, Clock, PackageIcon, Track } from '../../../../assets/allSvg/AllSvg';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { IOrder, IOrderStatus } from '../../../types/interfaces/orderHistory.interface';

const OrderStepContainer = ({ data }: { data: IOrder }) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(50).duration(500)}
      style={orderStepContainerStyle.container}
    >
      {/* step indicator container */}
      {/* order placed */}
      <View style={orderStepContainerStyle.indicatorCon}>
        {/* indicator */}
        {/* order placed  */}
        <View
          style={[
            orderStepContainerStyle.indicatorBox,
            {
              backgroundColor:
                data?.orderStatus?.status === 'Order placed' ||
                data?.orderStatus?.status === 'Packaging' ||
                data?.orderStatus?.status === 'Shipping' ||
                data?.orderStatus?.status === 'Delivered'
                  ? 'red'
                  : 'gray',
            },
          ]}
        />
        {/* related vertical divider */}
        <View
          style={[
            orderStepContainerStyle.relatedDivider,
            {
              backgroundColor:
                data?.orderStatus?.status === 'Order placed' ||
                data?.orderStatus?.status === 'Packaging' ||
                data?.orderStatus?.status === 'Shipping' ||
                data?.orderStatus?.status === 'Delivered'
                  ? 'red'
                  : 'gray',
            },
          ]}
        />
        {/* indicator */}
        {/* packaging */}
        <View
          style={[
            orderStepContainerStyle.indicatorBox,
            {
              backgroundColor:
                data?.orderStatus?.status === 'Packaging' ||
                data?.orderStatus?.status === 'Shipping' ||
                data?.orderStatus?.status === 'Delivered'
                  ? 'red'
                  : 'gray',
            },
          ]}
        >
          <PackageIcon />
        </View>
        {/* related vertical divider */}
        <View
          style={[
            orderStepContainerStyle.relatedDivider,
            {
              backgroundColor:
                data?.orderStatus?.status === 'Packaging' ||
                data?.orderStatus?.status === 'Shipping' ||
                data?.orderStatus?.status === 'Delivered'
                  ? 'red'
                  : 'gray',
            },
          ]}
        />
        {/* indicator */}
        {/* shipping */}
        <View
          style={[
            orderStepContainerStyle.indicatorBox,
            {
              backgroundColor:
                data?.orderStatus?.status === 'Shipping' ||
                data?.orderStatus?.status === 'Delivered'
                  ? 'red'
                  : 'gray',
            },
          ]}
        >
          <Track />
        </View>
        {/* related vertical divider */}
        <View
          style={[
            orderStepContainerStyle.relatedDivider,
            {
              backgroundColor:
                data?.orderStatus?.status === 'Shipping' ||
                data?.orderStatus?.status === 'Delivered'
                  ? 'red'
                  : 'gray',
            },
          ]}
        />
        {/* indicator */}
        <View
          style={[
            orderStepContainerStyle.indicatorBox,
            { backgroundColor: data?.orderStatus?.status === 'Delivered' ? 'red' : 'gray' },
          ]}
        ></View>
      </View>
      {/* step details container */}
      <View style={orderStepContainerStyle.stepDetailsCon}>
        {/* step details */}
        <View style={orderStepContainerStyle.stepDetails}>
          {/* date container */}
          <View style={orderStepContainerStyle.dateCon}>
            <View style={orderStepContainerStyle.dateAndTime}>
              <Calender />
              <Text style={orderStepContainerStyle.dateAndTimeText}>Dec 10, 2024</Text>
            </View>
            <View style={orderStepContainerStyle.dateAndTime}>
              <Clock />
              <Text style={orderStepContainerStyle.dateAndTimeText}>10:30</Text>
            </View>
          </View>
          {/* order state */}
          <View>
            <Text style={orderStepContainerStyle.state}>Order Placed</Text>
            <Text style={orderStepContainerStyle.subState}>
              Your Order Is ready to prepared by the Seller.
            </Text>
          </View>
        </View>
        {/* ======================================== */}
        <View style={orderStepContainerStyle.stepDetails}>
          {/* date container */}
          <View style={orderStepContainerStyle.dateCon}>
            <View style={orderStepContainerStyle.dateAndTime}>
              <Calender />
              <Text style={orderStepContainerStyle.dateAndTimeText}>Dec 10, 2024</Text>
            </View>
            <View style={orderStepContainerStyle.dateAndTime}>
              <Clock />
              <Text style={orderStepContainerStyle.dateAndTimeText}>10:30</Text>
            </View>
          </View>
          {/* order state */}
          <View>
            <Text style={orderStepContainerStyle.state}>Order Placed</Text>
            <Text style={orderStepContainerStyle.subState}>
              Your Order Is ready to prepared by the Seller.
            </Text>
          </View>
        </View>
        {/* =========================================== */}
        <View style={orderStepContainerStyle.stepDetails}>
          {/* date container */}
          <View style={orderStepContainerStyle.dateCon}>
            <View style={orderStepContainerStyle.dateAndTime}>
              <Calender />
              <Text style={orderStepContainerStyle.dateAndTimeText}>Dec 10, 2024</Text>
            </View>
            <View style={orderStepContainerStyle.dateAndTime}>
              <Clock />
              <Text style={orderStepContainerStyle.dateAndTimeText}>10:30</Text>
            </View>
          </View>
          {/* order state */}
          <View>
            <Text style={orderStepContainerStyle.state}>Order Placed</Text>
            <Text style={orderStepContainerStyle.subState}>
              Your Order Is ready to prepared by the Seller.
            </Text>
          </View>
        </View>
        {/* ========================================== */}
        <View style={orderStepContainerStyle.stepDetails}>
          {/* date container */}
          <View style={orderStepContainerStyle.dateCon}>
            <View style={orderStepContainerStyle.dateAndTime}>
              <Calender />
              <Text style={orderStepContainerStyle.dateAndTimeText}>Dec 10, 2024</Text>
            </View>
            <View style={orderStepContainerStyle.dateAndTime}>
              <Clock />
              <Text style={orderStepContainerStyle.dateAndTimeText}>10:30</Text>
            </View>
          </View>
          {/* order state */}
          <View>
            <Text style={orderStepContainerStyle.state}>Order Placed</Text>
            <Text style={orderStepContainerStyle.subState}>
              Your Order Is ready to prepared by the Seller.
            </Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default OrderStepContainer;
