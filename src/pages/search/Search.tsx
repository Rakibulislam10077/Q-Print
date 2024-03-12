/**
 * Search Component
 *
 * This component represents a screen for searching products within the application.
 * It allows users to input search queries, view search results, and navigate to relevant sections.
 *
 * Features:
 * - Header section includes navigation elements like back button, search input field, and cart icon.
 * - Main body renders search results based on user input.
 * - Displays dummy text if no search query is present, encouraging users to input search terms.
 * - Shows search results including brand items and cart items in a scrollable view.
 * - Utilizes TouchableOpacity components for user interaction with buttons and icons.
 * - Integrates with navigation functionality to navigate between screens seamlessly.
 * - Uses SafeAreaView to ensure content renders within safe boundaries of the device screen.
 * - Utilizes StatusBar component to manage the status bar appearance.
 *
 * State:
 * - dummyText: Manages the visibility of dummy text encouraging users to input search queries.
 * - input: Stores the user input from the search field.
 * - skeleton: Manages the skeleton loading state for search results.
 *
 * @returns JSX.Element
 */

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { CartBag, Goback, Magnify, ThreeLine } from '../../../assets/allSvg/AllSvg';
import { searchStyle } from './SearchStyle';
import { Color } from '../../constants/GlobalStyle';
import Cart from '../../components/card/allCart/Cart';
import BrandInGlobalSearch from '../../components/globalSearchCom/brand/BrandInGlobalSearch';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGetQueryProductQuery } from '../../redux/api/apiSlice';

const Search = () => {
  const navigation: any = useNavigation();
  const [dummyText, setDummyText] = useState<boolean>(true);
  const [input, setInput] = useState<string>('');
  const [skeleton, setSkeleton] = useState(false);
  const { data, isLoading } = useGetQueryProductQuery(`searchTerm=${input}`);
  // Function to handle search field end editing event
  // Function to handle text input change event
  const onChangeTextInput = () => {
    setSkeleton(true);
  };

  return (
    <SafeAreaView style={searchStyle.container}>
      {/* Header Section */}
      <View style={searchStyle.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={{ marginRight: 10 }}
        >
          <Goback />
        </TouchableOpacity>
        <Animated.View style={[searchStyle.searchContainer]}>
          <Magnify />
          <TextInput
            style={searchStyle.input}
            placeholder="Search"
            placeholderTextColor={Color.C_H_black}
            onChangeText={(text) => setInput(text)}
            autoFocus={true}
          />
        </Animated.View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyCart')}
          activeOpacity={0.7}
          style={searchStyle.AddToCartContainer}
        >
          <CartBag />
        </TouchableOpacity>
      </View>

      {/* Main Body */}
      {dummyText ? (
        // Dummy Container
        <View style={searchStyle.dummyTextCont}>
          <Text style={searchStyle.dummyOne}>Type your words to find the best product for you</Text>
          <Text style={searchStyle.dummyTwo}>e.g : Epson printer</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={searchStyle.bodyContainer}>
            <Text style={searchStyle.brandText}>Brand</Text>
            <View>
              {/* FlatList for Brand Items */}
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 20 }}
                data={data?.data}
                renderItem={({ item }) => <BrandInGlobalSearch item={item} />}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}
            >
              {/* Render Cart Items */}
              {data?.data?.map((item) => {
                return <Cart item={item} />;
              })}
            </View>
          </View>
        </ScrollView>
      )}

      {/* StatusBar */}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Search;
