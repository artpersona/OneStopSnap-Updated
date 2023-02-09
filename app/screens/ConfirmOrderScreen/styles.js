import { StyleSheet } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet, deviceHeight } from "../../utils/device.utility";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    width: "90%",
    alignSelf: "center",
    marginTop: deviceHeight / 25,
  },
  subTotalValues: {
    fontSize: RFValue(14),
    paddingHorizontal: 20,
    lineHeight: 20,
    color: Colors.darkestGrey,
  },
  inputContainer: {
    marginHorizontal: 10,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    width: 220,
  },
  buttonContainer: {
    width: "70%",
    marginRight: 20,
    borderRadius: 15,
    height: 40,
    alignSelf: "flex-end",
    justifyContent: "center",
  },

  confirmOrderContainer: {
    width: "100%",
    marginVertical: 40,
    // marginHorizontal: 20,
    borderRadius: 15,
    alignSelf: "center",
  },

  checkbox__container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  term__text: {
    width: "90%",
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
  },
  remove__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
    color: "red",
  },
  header__notes_text: {
    marginTop: 20,
    fontSize: RFValue(11),
    color: Colors.darkestGrey,
    textAlign: "justify",
  },
  confirmOrder__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(14),
    fontWeight: "bold",
  },
});
