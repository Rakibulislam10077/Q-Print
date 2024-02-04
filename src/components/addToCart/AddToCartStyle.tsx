import { StyleSheet } from "react-native";
import { Color, Font, shadows } from "../../constants/GlobalStyle";

export const addToCartStyle = StyleSheet.create({
  cartContainer: {
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: shadows.shadow_color,
    elevation: shadows.elevation_1,
    padding: 12,
    backgroundColor: Color.C_white,
    marginVertical: 10,
    width: "90%",
    flexDirection: "row",
    shadowOffset: {
      width: shadows.offsetHeight_1,
      height: shadows.offsetHeight_1,
    },
    shadowRadius: shadows.radius_1,
    shadowOpacity: shadows.opacity_1,
  },
  imgCon: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: Color.C_H_black,
    width: 90,
    height: 90,
    marginRight: 10,
  },
  img: { width: "100%", height: "100%" },
  currencyCon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  close: {
    height: 20,
    width: 20,
  },
  titleCon: {
    flex: 1,
    marginBottom: 5,
  },
  title: {
    fontSize: Font.Font_M,
    color: "rgba(0,0,0,0.9)",
  },
  storeNameAndColorIndicator: {
    flexDirection: "row",
    alignItems: "center",
  },
  storeName: {
    fontSize: Font.Font_S,
    color: Color.C_H_black,
    fontWeight: "500",
  },
  colorIndicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  priceAndCurrency: {
    fontSize: Font.Font_L,
    fontWeight: "700",
    color: Color.C_main,
  },
  plusAndMinus: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 25,
  },
  quantity: {
    fontSize: Font.Font_M,
    color: "rgba(0,0,0,0.7)",
    marginHorizontal: 12,
  },
});
