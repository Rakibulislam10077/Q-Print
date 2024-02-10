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

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { CartBag, Goback, Magnify, ThreeLine } from '../../constants/allSvg/AllSvg';
import { searchStyle } from './SearchStyle';
import { Color } from '../../constants/GlobalStyle';
import Cart from '../../components/card/allCart/Cart';
import BrandInGlobalSearch from '../../components/globalSearchCom/brand/BrandInGlobalSearch';

const Search = () => {
  const navigation: any = useNavigation();
  const [dummyText, setDummyText] = useState<boolean>(true);
  const [input, setInput] = useState<string>('');
  const [skeleton, setSkeleton] = useState(false);

  // Function to handle search field end editing event
  const handleEndEditing = () => {
    const trimmedInput = input.trim();
    if (trimmedInput?.length === 0) {
      setDummyText(true);
    } else {
      setDummyText(false);
      setSkeleton(false);
    }
    setDummyText(false);
  };

  // Function to handle text input change event
  const onChangeTextInput = () => {
    setSkeleton(true);
  };

  const data = [1, 2, 3, 4, 4];

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
        <View style={searchStyle.searchContainer}>
          <Magnify />
          <TextInput
            onEndEditing={handleEndEditing}
            style={searchStyle.input}
            placeholder="Search"
            placeholderTextColor={Color.C_H_black}
            onChangeText={(text) => setInput(text)}
            autoFocus={true}
            onTextInput={onChangeTextInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyCart')}
          activeOpacity={0.7}
          style={searchStyle.AddToCartContainer}
        >
          <CartBag />
        </TouchableOpacity>
      </View>

      {/* Main Body */}
      {skeleton && <Text>hello</Text>}
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
                data={[1, 1, 1, 1, 1]}
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
              {data.map((item) => {
                return <Cart />;
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
