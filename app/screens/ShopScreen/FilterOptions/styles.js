import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../../utils/device.utility";
import { Colors } from "../../../config";
import { RFValue } from "react-native-responsive-fontsize";
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: RFValue(10),
    justifyContent: "center",
    minHeight: deviceHeight / 20,
    minWidth: deviceWidth / 2.8,
    opacity: 0.65,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  remove__icon: {
    position: "absolute",
    right: 6,
    top: 3,
  },
  text: {
    color: Colors.black,
    fontSize: RFValue(10),
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
