import { Dimensions, StyleSheet } from "react-native";
import { Theme, Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";
const d = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    borderRadius: 55,
    backgroundColor: Colors.darkGreen,
    position: "absolute",
    zIndex: 9,
    bottom: -50,
    width: isTablet ? 300 : 180,
    height: isTablet ? 120 : 100,
    justifyContent: "center",
    alignSelf: "center",
  },
  textSummary: {
    textAlign: "center",
    color: Colors.white,
    marginBottom: 50,
    fontSize: RFValue(12),
  },
});
