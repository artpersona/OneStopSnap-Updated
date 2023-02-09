import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { deviceHeight } from "../../utils/device.utility";
const d = Dimensions.get("window");

export default StyleSheet.create({
  activeLocation__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(14),
  },
  choose__text: {
    color: Colors.darkGray,
    fontFamily: "OpenSans",
    fontSize: RFValue(10),
  },
  // eslint-disable-next-line react-native/no-color-literals
  confirm__button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.primary,
    borderRadius: RFValue(10),
    elevation: 2,
    justifyContent: "center",
    marginTop: 25,
    padding: RFValue(15),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    width: "80%",
  },
  confirm__text: {
    color: Colors.white,
    fontFamily: "OpenSans",
    fontSize: RFValue(18),
  },
  currLocation__text: {
    color: Colors.darkestGrey,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(13),
    marginHorizontal: 5,
  },

  header__icon: {
    flex: 1,
    marginLeft: "10%",
    marginTop: 1,
  },

  header__text: {
    alignItems: "center",
    marginTop: deviceHeight / 20,
  },

  icon: {
    backgroundColor: Colors.error,
    width: "10%",
  },
  image__container: {
    height: 45,
    marginLeft: 10,
    width: 40,
  },
  locationItem__container: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Colors.whitesmoke,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },

  locationItem__details: {
    marginLeft: 15,
  },

  locationItem__subText: {
    color: Colors.darkestGrey,
    fontFamily: "OpenSans",
    fontSize: RFValue(10),
  },
  locationItem__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(13),
  },
  locationItem__wrapper: {
    alignItems: "center",
    flexDirection: "row",
    width: "70%",
    // backgroundColor: "red",
  },
  location__header: {
    borderBottomWidth: 2,
    borderColor: Colors.whitesmoke,
    paddingVertical: 10,
  },
  location__wrapper: {
    flexDirection: "row",
    marginHorizontal: "5%",
    width: "67%",
  },
  map__image: {
    height: "100%",
    width: "100%",
  },

  modal: {
    backgroundColor: Colors.white,
    margin: 0,
  },

  modal__container: {
    flex: 1,
  },

  modal__header: {
    alignItems: "center",
    marginVertical: deviceHeight / 20,
  },

  modal__headerText: {
    color: Colors.white,
    flex: 2,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(13.5),
    position: "absolute",
  },

  provide__text: {
    color: Colors.primary,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(22),
  },

  question__text: {
    color: Colors.lightGray,
    fontFamily: "OpenSans",
    fontSize: RFValue(15),
    marginTop: "5%",
  },

  selected__container: {
    height: d.width / 26,
    marginRight: "5%",
    width: d.width / 26,
  },
});
