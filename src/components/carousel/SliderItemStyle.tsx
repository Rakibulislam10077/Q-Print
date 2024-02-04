import { Dimensions, StyleSheet } from "react-native";
import { Color } from "../../constants/GlobalStyle";

const width = Dimensions.get("window").width;
export const sliderItemStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#EDE4DA",
    padding: 10,
    width: width - 20,
    height: 200,
    marginHorizontal: 10,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  button: {
    backgroundColor: Color.C_main,
    borderRadius: 10,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginHorizontal: 20,
  },
});
