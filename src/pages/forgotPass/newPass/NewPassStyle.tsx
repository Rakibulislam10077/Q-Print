import { StyleSheet } from "react-native";
import { Color, Font } from "../../../constants/GlobalStyle";

export const newPassStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.C_white,
  },
  header: {
    height: 70,
    marginTop: 50,
    backgroundColor: Color.C_white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bodyCon: {
    paddingHorizontal: 20,
    marginTop: 30,
    flex: 1,
  },
  title: {
    fontSize: Font.Font_L,
    marginLeft: 10,
  },
  text1: {
    fontSize: Font.Font_X,
    fontWeight: "600",
    color: Color.C_black_eight,
    marginBottom: 15,
  },
  text2: {
    fontSize: Font.Font_L,
    color: "rgba(0,0,0,0.6)",
    lineHeight: 22,
    marginBottom: 30,
  },
  labelAndInputCon: {
    marginBottom: 30,
  },
  label: {
    fontSize: Font.Font_X,
    color: "rgba(0,0,0,0.7)",
    marginBottom: 10,
  },
  inputCon: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: Color.C_border,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: Font.Font_L,
    flex: 1,
  },
  eye: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButton: {
    height: 50,
    borderRadius: 25,
    marginTop: "auto",
    width: "100%",
    marginBottom: 50,
  },
  actionLayer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: Font.Font_X,
    fontWeight: "600",
    color: Color.C_white,
  },
});
