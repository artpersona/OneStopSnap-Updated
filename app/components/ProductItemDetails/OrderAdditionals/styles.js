/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";
import { Colors, Theme } from "../../../config";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  checkbox__text: {
    color: Colors.secondary,
    fontSize: RFValue(12),
  },

  container: {
    alignItems: "center",
    flexGrow: 1,
  },

  group: {
    alignItems: "center",
    flexDirection: "row",
    // flexWrap: "wrap",
  },

  minusIconContainer: {
    alignItems: "center",
    backgroundColor: "#1080D0",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    height: 35,
    justifyContent: "center",
  },
  plusIconContainer: {
    alignItems: "center",
    backgroundColor: "#1080D0",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    height: 35,
    justifyContent: "center",
  },
  price: {
    fontSize: RFValue(12),
  },
  quantifier__text: {
    color: "white",
    fontSize: RFValue(12),
    fontWeight: "bold",
  },

  quantityContainer: {
    ...Theme.lightBorder,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    height: 35,
    justifyContent: "center",
    marginTop: 10,
    width: 130,
  },
  quantityValue: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  quantity__button: {
    alignItems: "center",
    borderRadius: 100,
    height: 30,
    justifyContent: "center",
    marginHorizontal: 5,
    padding: 10,
    width: 30,
  },

  quantity__button_add: {
    backgroundColor: Colors.secondary,
  },

  quantity__button_minus: {
    backgroundColor: "#ff6666",
  },

  quantity__indicator: {
    alignSelf: "center",
    backgroundColor: "whitesmoke",
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  quantity__wrapper: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
  },

  radioCircle: {
    alignItems: "center",
    borderColor: "#1080D0",
    borderRadius: 100,
    borderWidth: 1,
    height: RFValue(20),
    justifyContent: "center",
    width: RFValue(20),
  },

  result: {
    backgroundColor: "#F3FBFE",
    color: "white",
    fontWeight: "600",
    marginTop: 20,
  },

  selectedRb: {
    backgroundColor: "#1080D0",
    borderRadius: 100,
    height: RFValue(10),
    width: RFValue(10),
  },
  text: {
    color: "black",
    fontFamily: "OpenSans",
    fontSize: RFValue(13),
    marginLeft: 10,
    textTransform: "capitalize",
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapper__adjusted: {
    width: "80%",
  },
  wrapper__full: {
    marginBottom: 10,
    width: "100%",
  },
});
