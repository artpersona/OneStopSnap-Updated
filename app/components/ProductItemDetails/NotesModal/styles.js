import { StyleSheet } from "react-native";
import { Colors } from "../../../config";
export default StyleSheet.create({
  header__icon: {
    flex: 1,
    marginLeft: "10%",
    marginTop: 1,
  },
  modal__container: {
    backgroundColor: Colors.white,
    minHeight: 300,
  },
  // eslint-disable-next-line react-native/no-color-literals
  modal__header: {
    alignItems: "center",
    backgroundColor: "#FFF7E4",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  modal__headerText: {
    flex: 2,
    fontFamily: "OpenSans_semiBold",
    fontSize: 16,
    position: "absolute",
  },
  wrapper: {
    alignSelf: "center",
    width: "90%",
  },
});
