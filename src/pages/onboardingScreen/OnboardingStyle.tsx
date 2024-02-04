import { Dimensions, Platform, StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

const DWidth = Dimensions.get("window").width;

export const onboardingStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.C_white,
  },
  // ====================================
  //   flatList item style start here
  // ====================================

  flatCon: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.C_white,
    // backgroundColor: "red",
  },
  gradientImage: {
    width: DWidth,
    // height: 270,
  },
  leftLogoAndTitleCon: {
    position: "absolute",
    left: 50,
    top: Platform.OS === "ios" ? 70 : 50,
  },
  centerLogoAndTitleCon: {
    position: "absolute",
    top: 100,
    alignSelf: "center",
    alignItems: "center",
  },
  topDesc: {
    color: Color.C_white,
    fontSize: Font.Font_L,
    lineHeight: 22,
    marginTop: 15,
  },
  lottieStyle: {
    width: DWidth === 300 ? 350 : 300,
    height: 350,
    alignSelf: "center",
    // marginTop: 20,
  },
  lottieSecondIndexStyle: {
    marginTop: 10,
    width: 350,
    height: 350,
    alignSelf: "center",
  },
  titleAndDescCon: {
    // marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  desc: {
    width: 350,
    textAlign: "center",
    marginTop: 20,
    color: "rgba(0,0,0,0.7)",
    lineHeight: 22,
  },
  paginationCon: {
    // position: "absolute",
    // bottom: 80,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    height: 40,
  },
  activePaginationIndicator: {
    backgroundColor: "#7F35CD",
    opacity: 0.1,
    width: 10,
    height: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  linearButton: {
    height: 50,
    width: "70%",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 70,
  },
  actionLayer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: Font.Font_L,
    color: Color.C_white,
    fontWeight: "600",
  },
});
