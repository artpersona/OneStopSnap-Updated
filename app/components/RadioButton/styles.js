import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";
const size = isTablet ? 40 : 20;
const sizeSelected = isTablet ? 20 : 10;
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
  },
  radioCircle: {
    height: size,
    width: size,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#1080D0",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: sizeSelected,
    height: sizeSelected,
    borderRadius: 100,
    backgroundColor: "#1080D0",
  },
  radio__container: {
    marginRight: 15,
  },
  label__text: {
    fontSize: RFValue(13),
  },
});
