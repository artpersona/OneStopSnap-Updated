import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import {
  deviceHeight,
  deviceWidth,
  isTablet,
} from "../../utils/device.utility";
const marginTop = isTablet
  ? "5%"
  : deviceHeight > 650
  ? deviceHeight / 25
  : "5%";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingBottom: "10%",
  },
  wrapper: {
    width: "85%",
    alignSelf: "center",
    height: "100%",
  },

  image__container: {
    alignItems: "center",
  },

  img: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderWidth: 3,
    borderColor: Colors.primary,
  },

  name__text: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(18),
    alignSelf: "center",
  },

  items__container: {
    marginTop: "10%",
  },

  profile__container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: deviceHeight / 90,
  },

  profile__label: {
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
  },
  profile__text: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(16),
  },

  header: {
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "#000000",
    elevation: 5,
    borderTopStartRadius: RFValue(25),
    borderTopEndRadius: RFValue(25),
    borderTopWidth: 1,
    borderColor: "whitesmoke",
    backgroundColor: "white",
    height: 80,
  },
  header__wrapper: {
    alignSelf: "center",
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "8%",
  },

  close__icon: {
    padding: 10,
    top: -30,
    right: -5,
  },

  header__text: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(17),
    color: "#FFBE30",
    width: "90%",
  },

  panelHeader: {
    alignItems: "center",
    overflow: "hidden",
  },

  panel: {
    height: "100%",
    backgroundColor: "white",
  },
  panel__wrapper: {
    width: "85%",
    alignSelf: "center",
  },
  panel__label: {
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
  },
  panel__value: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(13),
    marginTop: "1%",
  },

  input__container: {
    marginTop: "6%",
  },

  input__field: {
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
    height: 50,
    borderRadius: 10,
    marginTop: "2%",
    padding: 10,
  },

  confirm__button: {
    alignSelf: "center",
    width: "100%",
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBD30",
    marginTop: RFValue(45),
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

  confirm__text: {
    fontSize: 16,
    color: "white",
    fontFamily: "OpenSans_bold",
  },

  dropdown__container: {
    flexDirection: "row",
    height: "10%",
    alignItems: "center",
    marginLeft: "-5%",
    zIndex: 100,
  },
  updateIcons__container: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },
  userName__container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    width: "100%",
    justifyContent: "center",
  },

  edit__icon: {
    position: "absolute",
    padding: 10,
    right: -10,
  },
  next__button: {
    alignSelf: "center",
    width: "100%",
    padding: isTablet ? 20 : 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: isTablet ? 20 : 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: "7%",
  },
  next__text: {
    fontSize: RFValue(15),
    color: "white",
    fontFamily: "OpenSans_semiBold",
  },
});
