/**
 * Notification Component
 *
 * This component displays a list of notifications, categorized by day.
 *
 * Features:
 * - Utilizes a CommonHeader component to display the title "Notification" at the top.
 * - Renders a list of notifications, with each notification represented by the NotificationItem component.
 * - Groups notifications by day, displaying the "Today" section for notifications received on the current day.
 * - Utilizes ScrollView to enable scrolling through the list of notifications.
 * - Includes StatusBar for configuring the status bar style.
 *
 * @returns JSX.Element
 */

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import NotificationItem from '../../components/notificationItem/NotificationItem';
import CommonHeader from '../../components/common/commonHeader/CommonHeader';
import { notificationStyle } from './NotificationStyle';
import { StatusBar } from 'expo-status-bar';

// Sample data for notifications
const logodata = [
  { id: 1, img: require('../../../assets/image/adidas.png') },
  { id: 2, img: require('../../../assets/image/adidas.png') },
  { id: 3, img: require('../../../assets/image/adidas.png') },
  { id: 4, img: require('../../../assets/image/adidas.png') },
  { id: 5, img: require('../../../assets/image/adidas.png') },
  { id: 6, img: require('../../../assets/image/adidas.png') },
];

const Notification = () => {
  return (
    <View style={notificationStyle.container}>
      {/* Common Header */}
      <CommonHeader title="Notification" />

      {/* Body Section */}
      <ScrollView>
        <View style={notificationStyle.bodyContainer}>
          {/* Today Section */}
          <Text style={notificationStyle.dayText}>Today</Text>

          {/* List of Notifications */}
          {logodata?.map((item) => {
            return <NotificationItem key={item.id} item={item} />;
          })}
        </View>
      </ScrollView>

      {/* StatusBar Configuration */}
      <StatusBar style="dark" />
    </View>
  );
};

export default Notification;
