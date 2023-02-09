import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../../utils/device.utility";
export default StyleSheet.create({
  quantityContainer: {
    width: isTablet ? 150 : 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  minusIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#1080D0",
    width: isTablet ? RFValue(27) : RFValue(30),
    height: isTablet ? RFValue(27) : RFValue(30),
  },
  plusIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#1080D0",
    width: isTablet ? RFValue(27) : RFValue(30),
    height: isTablet ? RFValue(27) : RFValue(30),
  },
  quantityValue: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
