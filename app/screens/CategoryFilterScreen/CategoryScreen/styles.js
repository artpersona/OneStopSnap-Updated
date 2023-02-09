import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { deviceHeight, isTablet } from "../../../utils/device.utility";
export default StyleSheet.create({
  category__wrapper: {
    alignItems: "center",
    backgroundColor: "white",
    // height: "100%",
  },
  item__container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: isTablet ? 10 : 4,
  },
  item__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(12),
  },
  next__button: {
    width: "90%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBD30",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    alignSelf: "center",
    marginVertical: deviceHeight / 15,
  },
  next__text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "OpenSans",
  },
});
