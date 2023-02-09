import { StyleSheet } from "react-native";
import { Theme, Colors } from "../../../config";

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
  },
  buttonContainer: {
    bottom: "5.02%",
  },
  buttonContainer: {
    position: "absolute",
    width: 323,
    height: 67,
    left: 48,
    top: 536,
  },
  formContainer: {
    top: "20%",
    paddingLeft: 47,
    paddingRight: 37,
  },
  footerImage: {
    flex: 1,
    alignItems: "baseline",
    justifyContent: "flex-end",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    left: "18.36%",
    right: "18.36%",
    top: "95.54%",
  },
  textFooter: {
    fontWeight: "100",
    color: Colors.white,
  },
  textForgotPass: {
    alignSelf: "flex-end",
    color: Colors.header,
    marginBottom: 68,
    paddingRight: 12,
  },
  textSignUp: {
    fontWeight: "bold",
    color: Colors.white,
  },
});
