import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import {
  CartBag,
  CartIcon,
  Goback,
  Magnify,
  ThreeLine,
} from "../../constants/allSvg/AllSvg";
import { searchStyle } from "./SearchStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../constants/GlobalStyle";
import Cart from "../../components/card/allCart/Cart";
import BrandInGlobalSearch from "../../components/globalSearchCom/brand/BrandInGlobalSearch";

const Search = () => {
  const navigation: any = useNavigation();
  const [dummyText, setDummyText] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [skeleton, setSkeleton] = useState(false);
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

  const onChangeTextInput = () => {
    setSkeleton(true);
  };

  const data = [1, 2, 3, 4, 4];
  return (
    <SafeAreaView style={searchStyle.container}>
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
            // onKeyPress={}

            placeholder="Search"
            placeholderTextColor={Color.C_H_black}
            onChangeText={(text) => setInput(text)}
            autoFocus={true}
            // onChange={onChangeTextInput}
            onTextInput={onChangeTextInput}
          />
          <TouchableOpacity activeOpacity={0.7}>
            <ThreeLine />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyCart")}
          activeOpacity={0.7}
          style={searchStyle.AddToCartContainer}
        >
          {/* <CartBag /> */}
          <CartBag />
        </TouchableOpacity>
      </View>
      {/* main body */}
      {skeleton && <Text>hello</Text>}
      {dummyText ? (
        // this is dummy container
        <View style={searchStyle.dummyTextCont}>
          <Text style={searchStyle.dummyOne}>
            Type your words to find best product for you
          </Text>
          <Text style={searchStyle.dummyTwo}>e.g : Epson printer</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={searchStyle.bodyContainer}>
            <Text style={searchStyle.brandText}>Brand</Text>
            <View>
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
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
            >
              {data.map((item) => {
                return <Cart />;
              })}
            </View>
          </View>
        </ScrollView>
      )}
      <StatusBar backgroundColor="#ffffff" style="dark" />
    </SafeAreaView>
  );
};

export default Search;
