import { StyleSheet } from "react-native";
import { Color, shadows } from "../../../constants/GlobalStyle";

export const orderStepContainerStyle = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Color.C_white,
    shadowColor: shadows.shadow_color,
    elevation: shadows.elevation_1,
    shadowOffset: {
      width: shadows.offsetWidth_1,
      height: shadows.offsetHeight_1,
    },
    shadowRadius: shadows.radius_1,
    shadowOpacity: shadows.opacity_1,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
});
