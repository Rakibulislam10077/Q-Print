import { StyleSheet } from "react-native";
import { Color, Font } from "../../constants/GlobalStyle";

export const editProfileStyle = StyleSheet.create({
  userImgCon: {
    borderWidth: 1,
    borderColor: Color.C_white,
    borderRadius: 100,
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    resizeMode: "contain",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 2,
    right: 5,
    width: 26,
    height: 26,
    borderRadius: 12,
    backgroundColor: Color.C_white,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: Color.C_white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 35,
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  label: {
    fontSize: Font.Font_L,
    color: "rgba(0,0,0,0.3)",
    marginVertical: 10,
  },
  input: {
    fontSize: Font.Font_X,
  },
  dividerStyle: {
    marginTop: 10,
  },
  updateButton: {
    width: "85%",
    height: 50,
    borderRadius: 25,
    alignSelf: "center",
    position: "absolute",
    bottom: 30,
  },
  updateButtonTouchAction: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  buttonText: {
    fontSize: Font.Font_X,
    color: Color.C_white,
  },
});
