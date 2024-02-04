import { View } from "react-native";
import React from "react";
import Cart from "./Cart";
import { allCartStyle } from "./AllCartStyle";
import HomePageProductCateTitle from "../../common/homePageProductCategory/HomePageProductCateTitle";

const logodata = [
  {
    id: 1,
    img: require("../../../../assets/image/adidas.png"),
  },
  {
    id: 2,
    img: require("../../../../assets/image/adidas.png"),
  },
  {
    id: 3,
    img: require("../../../../assets/image/adidas.png"),
  },
  {
    id: 4,
    img: require("../../../../assets/image/adidas.png"),
  },
  {
    id: 5,
    img: require("../../../../assets/image/adidas.png"),
  },
];

const AllCart = () => {
  return (
    <View style={allCartStyle.container}>
      <HomePageProductCateTitle
        title="Printers, Cartridge, Ink"
        subTitle="see all"
      />
      {logodata?.map((item) => {
        return <Cart key={item?.id} item={item} />;
      })}
    </View>
  );
};

export default AllCart;
