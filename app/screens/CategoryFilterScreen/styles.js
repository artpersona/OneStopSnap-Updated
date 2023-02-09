import { StyleSheet } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
export default StyleSheet.create({
  header__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: 16,
    marginLeft: 5,
  },
  header__wrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "5%",
  },
  modal: {
    backgroundColor: Colors.white,
  },
  modal__container: {
    height: "100%",
  },
  modal__header: {
    justifyContent: "center",
    paddingVertical: 15,
  },
  // eslint-disable-next-line react-native/no-color-literals
  next__button: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 30,
    elevation: 2,
    justifyContent: "center",
    padding: 10,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: "90%",
  },
  next__text: {
    color: Colors.white,
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(15),
  },
});
