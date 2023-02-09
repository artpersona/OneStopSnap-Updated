import { StyleSheet } from "react-native";
import { Theme, Colors } from "../../../config";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { isTablet, deviceWidth } from "../../../utils/device.utility";
const buttonWidth = isTablet ? RFPercentage(50) : "100%";
const imageSize = isTablet ? 200 : 120;
const titleLocation = isTablet ? RFValue(120) : RFValue(80);
const iconLocation = isTablet ? 70 : 30;
export default StyleSheet.create({
  container: {
    top: "10%",
    paddingHorizontal: 40,
    backgroundColor: "white",
    height: "100%",
  },
  img: {
    width: imageSize,
    height: imageSize,
  },
  imageBackground: {
    flex: 1,
    width: Theme.getScreenWidth,
    height: Theme.getScreenHeight + 50,
    backgroundColor: "white",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    alignSelf: "center",
    bottom: 40,
  },
  textFooter: {
    fontWeight: "100",
    color: Colors.darkGray,
  },
  textLogin: {
    fontWeight: "bold",
    color: Colors.secondary,
  },
  buttonContainer: {
    marginVertical: 5,
    width: buttonWidth,
    alignSelf: "center",
  },
  reseller__group: {
    marginTop: isTablet ? 80 : 30,
  },

  buttonReseller: {
    marginVertical: 10,
    width: buttonWidth,
    alignSelf: "center",
  },

  iconContainer: {
    marginLeft: -100,
  },

  titleStyle: {
    fontSize: RFValue(13),
    textAlign: "center",
  },
  iconStyle: {
    position: "absolute",
    left: iconLocation,
  },

  login__text: {
    fontSize: RFValue(21),
    textAlign: "center",
    fontFamily: "OpenSans_semiBold",
    marginBottom: "5%",
  },

  or__text: {
    textAlign: "center",
    color: Colors.darkGray,
    fontFamily: "OpenSans",
  },
});
