import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  deviceHeight,
  isTablet,
  deviceWidth,
} from "../../../utils/device.utility";
const imageSize = isTablet ? 100 : 50;
export default StyleSheet.create({
  container: {
    backgroundColor: "#F5FBFF",
    width: "90%",
    alignSelf: "center",
    // paddingVertical: isTablet ? "3%" : "7%",
    borderRadius: 10,
    marginVertical: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height: deviceHeight / 4,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    borderRadius: 500,
    width: imageSize,
    height: imageSize,
  },
  shop__info: {
    marginLeft: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  name__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(17),
    color: "white",
  },
  handler__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(12),
  },
  info__container: {
    flex: 1,
  },
});
