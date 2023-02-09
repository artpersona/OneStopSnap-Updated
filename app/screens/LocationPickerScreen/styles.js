import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";
const d = Dimensions.get("window");

export default StyleSheet.create({
  modal: {
    margin: 0,
    backgroundColor: "white",
    flex: 1,
  },
  modal__container: {
    flex: 1,
  },
  modal__header: {
    backgroundColor: "#1080D0",
    flexDirection: "row",
    height: isTablet ? 90 : 55,
    alignItems: "center",
    justifyContent: "center",
  },
  modal__headerText: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(13.5),
    flex: 2,
    position: "absolute",
    color: "white",
  },
  header__icon: {
    flex: 1,
    marginLeft: "10%",
    marginTop: 1,
  },

  location__header: {
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: "whitesmoke",
  },

  location__wrapper: {
    flexDirection: "row",
    width: "67%",
    marginHorizontal: "5%",
  },

  currLocation__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(14),
    color: "black",
    marginHorizontal: 5,
  },
  activeLocation__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(14),
  },
  choose__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(10),
    color: Colors.darkGray,
  },

  locationItem__container: {
    borderBottomWidth: 1,
    borderColor: "whitesmoke",
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  locationItem__wrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    // backgroundColor: "red",
  },
  image__container: {
    width: 40,
    height: 45,
    marginLeft: 10,
  },
  map__image: {
    width: "100%",
    height: "100%",
  },
  locationItem__details: {
    marginLeft: 15,
  },
  locationItem__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(13),
  },
  locationItem__subText: {
    fontFamily: "OpenSans",
    fontSize: RFValue(10),
    color: Colors.darkestGrey,
  },

  confirm__button: {
    alignSelf: "center",
    width: "80%",
    padding: isTablet ? 20 : 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBD30",
    marginTop: 25,
    borderRadius: isTablet ? 20 : 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  confirm__text: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "white",
    fontFamily: "OpenSans",
  },

  selected__container: {
    width: d.width / 26,
    height: d.width / 26,
    marginRight: "5%",
  },

  icon: {
    width: "10%",
    backgroundColor: "red",
  },
});
