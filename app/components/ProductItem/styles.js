import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { deviceWidth } from "../../utils/device.utility";
import { Colors } from "../../config";
const d = Dimensions.get("window");

export default StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  buttonContainer: {
    alignSelf: "center",
    borderRadius: 10,
    elevation: 2,
    marginTop: "1.5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    width: "100%",
  },
  button__text: {
    color: Colors.white,
    fontSize: RFValue(15),
  },
  container: {
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginVertical: RFValue(2),
    minHeight: d.height / 4,
    width: "90%",
  },
  image: {
    height: RFValue(80),
    left: -30,
    width: RFValue(80),
  },
  info__container: {
    marginLeft: "8%",
    width: "80%",
  },
  item__info: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
  },
  name__text: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(13),
    width: "80%",
  },
  price__container: {
    borderRadius: 16,
    width: "43%",
    // alignSelf: "center",
  },
  price__text: {
    color: Colors.black,
    fontFamily: "OpenSans",
    fontSize: RFValue(14),
  },
  // eslint-disable-next-line react-native/no-color-literals
  promoBanner__double: {
    backgroundColor: "#FFBE30",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
    top: 5,
    zIndex: 100,
  },
  promoBanner__double_text: {
    color: Colors.white,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(12),
  },

  // eslint-disable-next-line react-native/no-color-literals
  promoBanner__single: {
    backgroundColor: "#F8564F",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
    top: 10,
    zIndex: 100,
  },

  promoBanner__single_text: {
    color: Colors.white,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(13),
  },

  // eslint-disable-next-line react-native/no-color-literals
  purchaseContainer: {
    backgroundColor: "#FFBE30",
    paddingVertical: "4%",
  },
  purchase__container: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 100,
    bottom: 50,
    height: deviceWidth / 8.5,
    justifyContent: "center",
    position: "absolute",
    right: 0,
    width: deviceWidth / 8.5,
  },
  regularPrice__text: {
    color: Colors.black,
    fontFamily: "OpenSans",
    fontSize: RFValue(14),
    opacity: 0.5,
    textDecorationLine: "line-through",
  },

  selected__product: {
    backgroundColor: Colors.white,
  },
  // eslint-disable-next-line react-native/no-color-literals
  soldOutContainer: {
    backgroundColor: "#f76157",
    paddingVertical: "4%",
    // opacity: 0.6,
  },
  stocks__text: {
    alignSelf: "flex-end",
    fontFamily: "OpenSans",
    fontSize: RFValue(13),
    left: 0,
  },
});
