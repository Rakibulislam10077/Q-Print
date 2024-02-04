import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { modalStyle } from "./ModalContentStyle";
import { Close, Dropdown, Magnify } from "../../../constants/allSvg/AllSvg";
import Animated, {
  BounceOut,
  FlipInXUp,
  FlipOutXDown,
  StretchOutX,
} from "react-native-reanimated";

const ModalContent = () => {
  const [isBrandClicked, setIsBrandClicked] = useState<boolean>(false);
  const [isSeriesClicked, setIsSeriesClicked] = useState<boolean>(false);
  const [isModelClicked, setIsModelClicked] = useState<boolean>(false);
  const [isMagnifyClicked, setIsMagnifyClicked] = useState<boolean>(false);

  //   brand function
  const brandFunction = () => {
    setIsBrandClicked(true);
    setIsModelClicked(false);
    setIsSeriesClicked(false);
  };
  const seriesFunction = () => {
    setIsSeriesClicked(true);
    setIsBrandClicked(false);
    setIsModelClicked(false);
  };
  const modelFunction = () => {
    setIsModelClicked(true);
    setIsBrandClicked(false);
    setIsSeriesClicked(false);
  };

  const isBrandDropDown: boolean = isBrandClicked === false;
  const isSeriesDropDown: boolean = isSeriesClicked === false;
  const isModelDropDown: boolean = isModelClicked === false;

  return (
    <View style={modalStyle.container}>
      {/* modal indicator */}
      <View style={modalStyle.modalIndicator} />
      <Text style={modalStyle.title}>Find perfect Cartridge</Text>
      <Text style={modalStyle.subTitle}>
        You can find the right Cartridges for your Printer
      </Text>
      {/* printer Brand container */}
      {isSeriesDropDown && isModelDropDown && (
        <TouchableOpacity
          onPress={() => brandFunction()}
          activeOpacity={0.7}
          style={[
            // modalStyle.activeInputBox,
            modalStyle.inputBox,
          ]}
        >
          <Text>Printer Brand</Text>
          {isBrandClicked === true ? (
            <View style={modalStyle.magnifyCon}>
              <TouchableOpacity
                onPress={() => setIsMagnifyClicked(!isMagnifyClicked)}
                activeOpacity={0.7}
              >
                <Magnify />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsBrandClicked(false)}>
                <Close />
              </TouchableOpacity>
            </View>
          ) : (
            <Dropdown />
          )}
        </TouchableOpacity>
      )}
      {isBrandClicked === true && (
        <View>
          <View style={modalStyle.itemCon}>
            {isMagnifyClicked && (
              <Animated.View
                entering={FlipInXUp.delay(50).duration(500)}
                exiting={StretchOutX}
              >
                <TextInput style={modalStyle.input} placeholder="Search" />
              </Animated.View>
            )}
            <ScrollView>
              <TouchableOpacity
                onPress={() => setIsBrandClicked(false)}
                style={modalStyle.filteredItem}
              >
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      )}
      {/* </View> */}
      {/* ======================== */}
      {/* Printer series Container */}
      {isBrandDropDown && isModelDropDown && (
        <TouchableOpacity
          onPress={() => seriesFunction()}
          activeOpacity={0.7}
          style={[
            // modalStyle.activeInputBox,
            modalStyle.inputBox,
          ]}
        >
          <Text>Printer Series</Text>
          {isSeriesClicked === true ? (
            <View style={modalStyle.magnifyCon}>
              <TouchableOpacity
                onPress={() => setIsMagnifyClicked(!isMagnifyClicked)}
                activeOpacity={0.7}
              >
                <Magnify />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsSeriesClicked(false)}>
                <Close />
              </TouchableOpacity>
            </View>
          ) : (
            <Dropdown />
          )}
        </TouchableOpacity>
      )}
      {isSeriesClicked === true && (
        <View>
          <View style={modalStyle.itemCon}>
            {isMagnifyClicked && (
              <Animated.View
                entering={FlipInXUp.delay(50).duration(500)}
                exiting={FlipOutXDown}
              >
                <TextInput style={modalStyle.input} placeholder="Search" />
              </Animated.View>
            )}
            <ScrollView>
              <TouchableOpacity
                onPress={() => setIsSeriesClicked(false)}
                style={modalStyle.filteredItem}
              >
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      )}
      {/* ===================== */}
      {/* Printer Model Container */}
      {isBrandDropDown && isSeriesDropDown && (
        <TouchableOpacity
          onPress={() => modelFunction()}
          activeOpacity={0.7}
          style={[
            // modalStyle.activeInputBox,
            modalStyle.inputBox,
          ]}
        >
          <Text>Printer Model</Text>
          {isModelClicked === true ? (
            <View style={modalStyle.magnifyCon}>
              <TouchableOpacity
                onPress={() => setIsModelClicked(!isMagnifyClicked)}
                activeOpacity={0.7}
              >
                <Magnify />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsModelClicked(false)}>
                <Close />
              </TouchableOpacity>
            </View>
          ) : (
            <Dropdown />
          )}
        </TouchableOpacity>
      )}
      {isModelClicked === true && (
        <View>
          <View style={modalStyle.itemCon}>
            {isMagnifyClicked && (
              <Animated.View
                entering={FlipInXUp.delay(50).duration(500)}
                exiting={FlipOutXDown}
              >
                <TextInput style={modalStyle.input} placeholder="Search" />
              </Animated.View>
            )}
            <ScrollView>
              <TouchableOpacity
                onPress={() => setIsMagnifyClicked(false)}
                style={modalStyle.filteredItem}
              >
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
              <TouchableOpacity style={modalStyle.filteredItem}>
                <Text>hello</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default ModalContent;
