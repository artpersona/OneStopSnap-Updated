import { Platform, StyleSheet } from "react-native";
import Colors from "./Colors";
import { Dimensions } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../utils/device.utility";
// button theme
const buttonBorderRadius = RFValue(10);
const buttonHeight = RFValue(60);

export default StyleSheet.create({
  buttonAdmin: {
    backgroundColor: Colors.darkGray,
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
    justifyContent: "space-around",
  },
  buttonApply: {
    backgroundColor: Colors.primary,
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
  },
  buttonDisabled: {
    backgroundColor: Colors.darkGray,
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
  },
  buttonFacebook: {
    backgroundColor: "#45489B",
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
  },

  buttonGoogle: {
    backgroundColor: "#E13F2A",
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
  },

  buttonModal: {
    backgroundColor: "#1080D0",
    height: buttonHeight,
  },

  buttonPhone: {
    backgroundColor: "#FFBE30",
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
  },

  buttonPrimary: {
    backgroundColor: Colors.primary,
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
  },

  buttonSecondary: {
    backgroundColor: Colors.secondary,
    borderRadius: buttonBorderRadius,
    height: buttonHeight,
  },
  buttonTextPrimary: {
    fontSize: RFValue(24),
    fontStyle: "normal",
  },
  buttonTitle: {
    alignItems: "center",
    fontSize: RFValue(24),
  },
  center: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  col: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    marginHorizontal: 20,
    paddingBottom: 30,
  },
  dropShadow: {
    elevation: 5,
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  dropShadowLight: {
    elevation: 1,
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  getScreenHeight: Dimensions.get("window").height,
  getScreenWidth: Dimensions.get("window").width,
  headerText: {
    color: "#434343",
    fontSize: RFValue(24),
    fontWeight: "700",
    paddingBottom: "10%",
    paddingLeft: 10,
    textAlign: "center",
  },
  horizontalScrollView: {
    marginVertical: 20,
    // marginRight: 20,
  },
  imageContainer: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
  inputBorderedContainer: {
    backgroundColor: "white",
    borderColor: "#DADADA",
    borderWidth: 1,
    height: isTablet ? 70 : 45,
    marginBottom: 3,
    top: 9,
  },
  inputContainer: {
    backgroundColor: "white",
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
    height: isTablet ? 70 : 45,
    marginBottom: 3,
    top: 9,
  },
  inputContainerError: {
    backgroundColor: "white",
    borderBottomColor: "#DADADA",
    // borderColor: "#DADADA",
    borderBottomWidth: 1,
    // borderWidth: 1,
    height: 40,
    top: 9,
  },
  inputHalfContainer: {
    backgroundColor: "white",
    borderColor: "#DADADA",
    borderWidth: 1,
    height: 40,
    top: 9,
    width: 150,
  },
  inputStyle: {
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
    marginHorizontal: 10,
  },
  inputWrap: {
    flex: 1,
  },
  isFortyPercent: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    width: "30%",
  },
  isFull: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    width: "100%",
  },
  isHalf: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    width: "50%",
  },
  isQuarter: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    width: "25%",
  },
  isSixtyPercent: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    width: "60%",
  },
  isThreeFourths: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    width: "75%",
  },
  keyboardVerticalOffset: Platform.OS === "ios" ? 40 : 0,
  labelStyle: {
    color: Colors.header,
    fontSize: RFValue(12.5),
    fontWeight: "500",
  },
  lightBorder: {
    borderColor: Colors.lightGray,
    borderWidth: 0.5,
  },
  listTitle: {
    color: "black",
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(14),
    paddingHorizontal: 20,
  },
  listTitleLarge: {
    fontSize: RFValue(18),
    fontFamily: "OpenSans_bold",
    color: "black",
    // lineHeight: 42,
    // height: 42,
    // alignSelf: "baseline",
    justifyContent: "flex-end",
    marginHorizontal: 20,
  },
  listTitleSection: {
    color: Colors.primary,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(12),
    paddingHorizontal: 20,
  },
  listTitleSmall: {
    color: Colors.primary,
    fontFamily: "OpenSans",
    fontSize: RFValue(12),
  },
  noData: {
    alignSelf: "center",
    color: Colors.subText,

    fontSize: RFValue(18),
    fontWeight: "300",
  },
  overlayBg: {
    backgroundColor: Colors.overlay,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  rowCenter: {
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  rowNoFlex: {
    flexDirection: "row",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rowSpaceEvenly: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  screenContainer: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  screenInnerContainer: {
    flex: 7,
  },

  scrollView: {
    position: "relative",
    zIndex: 0,
  },
  searchComponentContainer: {
    marginLeft: "2%",
    marginTop: 30,
    position: "absolute",
    top: 70,
    width: "100%",
  },
  searchIcon: {
    marginRight: 0,
    paddingRight: 15,
  },
  space_between: {
    marginLeft: -30,
  },
  subText: {
    color: "#9D9D9D",
    fontSize: RFValue(14),
    fontWeight: "300",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
