import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";
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
    backgroundColor: "#FFBD30",
    borderRadius: isTablet ? 20 : 12,
    elevation: 2,
    justifyContent: "center",
    marginTop: 25,
    padding: isTablet ? 20 : 10,

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
    fontSize: RFValue(20),
    fontWeight: "bold",
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

  header__row: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    width: "100%",
  },

  header__row_wrapper: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  header__text: {
    color: Colors.black,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(15),
  },
  locationItem__details: {
    width: "75%",
  },

  locationItem__subText: {
    color: Colors.darkestGrey,
    fontFamily: "OpenSans",
    fontSize: RFValue(10),
  },

  locationItem__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(13),
    width: "80%",
  },
  locationItem__wrapper: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    width: "90%",
  },
  location__header: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: Colors.whitesmoke,
    paddingVertical: 10,
  },

  location__wrapper: {
    alignItems: "center",
    flexDirection: "row",
    width: "67%",
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
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  modal__headerText: {
    color: Colors.black,
    flex: 2,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(16),
    position: "absolute",
  },
  price__text: {
    color: Colors.black,
    fontSize: RFValue(13),
  },
  selected__container: {
    height: d.width / 26,
    marginRight: "5%",
    width: d.width / 26,
  },
  subhead__text: {
    fontSize: RFValue(14),
    fontWeight: "bold",
  },
});
