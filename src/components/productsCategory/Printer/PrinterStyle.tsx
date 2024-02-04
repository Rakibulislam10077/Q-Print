import { StyleSheet } from "react-native";
import { Color } from "../../../constants/GlobalStyle";

export const printerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.C_white,
  },
  cartContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: Color.C_white,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
