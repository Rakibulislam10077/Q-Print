import { StyleSheet } from "react-native";
import { Font } from "../../constants/GlobalStyle";


export const productDescStyle = StyleSheet.create({
  descBox: {
    padding: 20,
  },
  title: {
    fontSize: Font.Font_L,
    fontWeight: "600",
    lineHeight: 22,
  },
  descDetails: {
    marginTop: 15,
    color: "rgba(0, 0, 0, 0.80)",
    fontSize: Font.Font_M,
    lineHeight: 20,
  },
});
