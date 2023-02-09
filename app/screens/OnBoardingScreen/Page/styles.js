import { StyleSheet, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { deviceHeight, deviceWidth } from "../../../utils/device.utility";
import { Colors } from "../../../config";
export default StyleSheet.create({
  buttons__container: {
    marginTop: deviceHeight / 20,
  },
  circle: {
    backgroundColor: Colors.primary,
    borderRadius: 1000,
    marginHorizontal: deviceWidth / 40,
  },

  circleSelected: {
    backgroundColor: Colors.primary,
    borderRadius: 50,
    height: RFValue(10),
    marginHorizontal: 5,
    marginTop: -2,
    width: RFValue(50),
  },
  circle__container: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "5%",
    marginTop: deviceHeight / 12,
    width: "100%",
  },
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    height: "90%",
    marginTop: StatusBar.currentHeight,
  },
  footer__container: {
    // marginTop: isTablet ? "-15%" : "-10%",
    backgroundColor: Colors.blue,
  },
  header__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(18),
  },
  image: {
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    flex: 0.9,
    justifyContent: "center",
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  image__container: {
    alignSelf: "center",
    height: deviceHeight / 2,
    overflow: "hidden",
    width: "100%",
  },

  // eslint-disable-next-line react-native/no-color-literals
  next__button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.primary,
    borderRadius: RFValue(10),
    elevation: 2,
    justifyContent: "center",
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
  next__text: {
    color: Colors.white,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(15),
  },

  skip__text: {
    color: Colors.primary,
    fontFamily: "OpenSans",
    fontSize: RFValue(15),
    marginTop: "3%",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "OpenSans",
    fontSize: RFValue(16, 760),
    marginTop: "2%",
  },

  title: {
    color: Colors.primary,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(20),
    textAlign: "center",
    width: "95%",
  },

  title__container: {
    alignItems: "center",
    marginTop: deviceHeight / 20,
    width: "90%",
  },

  wrapper: {
    width: "85%",
  },
});
