import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../../utils/device.utility";
import { Colors } from "../../../config";
export default StyleSheet.create({
  quantityContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: isTablet ? 150 : 100,
  },
  minusIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: Colors.primary,
    width: isTablet ? RFValue(27) : RFValue(30),
    height: isTablet ? RFValue(27) : RFValue(30),
    opacity: 0.8,
  },
  plusIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: Colors.primary,
    width: isTablet ? RFValue(27) : RFValue(30),
    height: isTablet ? RFValue(27) : RFValue(30),
    opacity: 0.8,
  },
  quantityValue: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
