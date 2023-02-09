import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const d = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {
    flex: 1,
    marginTop: 34,
    width: "80%",
    alignSelf: "center",
  },
  header__container: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: d.height / 12,
  },
  davao__text: {
    color: "#FFBE30",
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(30),
  },
  market__text: {
    color: "black",
    fontFamily: "OpenSans",
    fontSize: RFValue(30),
  },
  content__wrapper: {
    backgroundColor: "red",
    marginTop: "40%",
    height: "100%",
  },
  next__button: {
    alignSelf: "center",
    width: "80%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBD30",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  next__text: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "white",
    fontFamily: "OpenSans",
  },
});
