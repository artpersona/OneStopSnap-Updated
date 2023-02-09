import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  item__name: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(13),
    color: "#000000",
  },
  radio__circle: {
    height: 16,
    width: 16,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FEC636",
    alignItems: "center",
    justifyContent: "center",
  },
  radio__filled: {
    backgroundColor: "#FEC636",
  },
});
