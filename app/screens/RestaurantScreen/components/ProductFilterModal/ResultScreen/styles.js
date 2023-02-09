import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
export default StyleSheet.create({
  container: { width: "100%", height: "100%", backgroundColor: "white" },
  wrapper: { width: "100%", alignSelf: "center" },
  header__text: {
    fontFamily: "OpenSans",
    marginLeft: "5%",
    marginVertical: "5%",
    fontSize: RFValue(16),
  },
  keyword__text: {
    fontFamily: "OpenSans_bold",
  },
});
