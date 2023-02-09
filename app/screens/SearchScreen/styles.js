import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  wrapper: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
  },
  header__container: {
    width: "100%",
    marginVertical: "5%",
  },
  header__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(16),
    marginHorizontal: "5%",
  },
});
