import { StyleSheet } from "react-native";
import { Theme, Colors } from "../../../config";

export default StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: "90%",
    alignSelf: "center",
  },
  formContainer: {
    top: "10%",
    paddingHorizontal: 40,
    justifyContent: "center",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // position: "absolute",
    alignSelf: "center",
    marginTop: "5%",
    // bottom: 40
  },
  textFooter: {
    fontWeight: "100",
    color: Colors.darkGray,
  },
  textForgotPass: {
    alignSelf: "flex-end",
    color: Colors.header,
    marginBottom: "10%",
    paddingRight: 12,
  },
  textSignUp: {
    fontWeight: "bold",
    color: Colors.secondary,
  },
  passIcon: {
    position: "absolute",
    padding: 32,
    right: 8,
    color: Colors.lightGray,
  },
  img: {
    width: 120,
    height: 120,
  },
});
