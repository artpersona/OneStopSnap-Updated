import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../config";
import { isTablet } from "../../utils/device.utility";
const win = Dimensions.get("window");

const size = isTablet ? win.width / 5 : win.width / 3.3;
export default StyleSheet.create({
  address: {
    color: Colors.darkGray,
    fontSize: 14,
    lineHeight: 20,
  },
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    backgroundColor: Colors.white,
    borderColor: "#dddddd",
    borderRadius: 19,
    borderWidth: 1,
    elevation: 5,
    height: 195,

    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageList: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  imageSize: {
    alignSelf: "center",
    borderRadius: RFValue(10),
    flex: 1,
    height: size,
    resizeMode: "cover",
    width: size,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 24,
  },
  textContainer: {
    height: "25%",
    justifyContent: "center",
    margin: 10,
  },
});
