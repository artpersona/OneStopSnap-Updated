import { StyleSheet, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../config";
import {
  deviceHeight,
  deviceWidth,
  isTablet,
} from "../../utils/device.utility";

export default StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  change__button: {
    color: "#5bb9f7",
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(14),
    position: "absolute",
    right: deviceHeight / 19,
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  header__container: {
    alignItems: "center",
    marginTop: deviceHeight / 8,
  },

  header__text_container: {
    alignItems: "center",
    marginTop: "20%",
  },
  locationText__container: {
    alignItems: "center",
    flexDirection: "row",
    left: deviceWidth / 19,
    position: "absolute",
  },
  location__button: {
    borderColor: Colors.lightGray,
    borderRadius: 25,
    borderWidth: 1,
    marginTop: deviceHeight / 19,
    padding: "6%",
    width: "100%",
  },
  location__container: {
    marginTop: "5%",
  },

  location__select_text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(13),
  },
  location__selector: {
    alignItems: "center",
    borderColor: Colors.whitesmoke,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    height: deviceHeight / 14,
    justifyContent: "space-evenly",
    marginBottom: "4%",
    width: "100%",
  },

  location__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(14),
    // marginLeft: "3%",
  },
  logo__container: {
    alignItems: "center",
    marginTop: deviceHeight / 8,
  },
  logo__header: {
    color: Colors.primary,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(21),
    textAlign: "center",
  },

  logo__subtext: {
    color: Colors.darkGray,
    fontFamily: "OpenSans",
    fontSize: RFValue(13),
    marginTop: "10%",
    opacity: 0.8,
    textAlign: "center",
  },
  // eslint-disable-next-line react-native/no-color-literals
  logo__text: {
    color: "#FFBE30",
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(38),
  },
  market__text: {
    color: Colors.black,
    fontFamily: "OpenSans",
    fontSize: RFValue(38),
  },
  // eslint-disable-next-line react-native/no-color-literals
  next__button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.primary,
    borderRadius: RFValue(10),
    elevation: 2,
    justifyContent: "center",
    marginTop: deviceHeight / 6.5,
    padding: RFValue(15),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: "100%",
  },
  next__text: {
    color: Colors.white,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(15),
  },

  question__text: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(15),
    marginBottom: 5,
  },
  text__container: {
    flexDirection: "row",
  },
  welcome__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(18),
  },
  wrapper: {
    alignItems: "center",
    flex: 1,
    width: "80%",
  },
});
