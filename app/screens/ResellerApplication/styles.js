import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";
const d = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {
    flex: 1,
    marginTop: "3%",
    width: "90%",
    alignSelf: "center",
  },
  header__container: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: d.height / 11,
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
    marginTop: "40%",
    height: "100%",
  },
  next__button: {
    alignSelf: "center",
    width: "100%",
    padding: isTablet ? 15 : 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1080D0",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: 15,
    marginBottom: 30,
  },
  next__text: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "white",
    fontFamily: "OpenSans",
  },

  wrapper__header: {
    fontFamily: "OpenSans",
    fontSize: RFValue(18),
    alignSelf: "center",
    marginTop: "1%",
  },

  form__container: {
    marginTop: d.height / 14,
  },

  form__group: {
    // marginBottom: 10,
    // backgroundColor: "blue",
  },

  form__label: {
    fontFamily: "OpenSans",
    fontSize: RFValue(14),
    marginLeft: 10,
    marginBottom: 5,
  },

  form__input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.25)",
    borderRadius: 5,
    padding: isTablet ? 13 : 0,
  },
  dropdown__container: {
    width: "94%",
    alignSelf: "center",
    marginBottom: 15,
  },
  dropdown__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(14),
  },
  inputStyle: {
    fontFamily: "OpenSans",
    fontSize: RFValue(13),
    paddingLeft: 5,
  },
});
