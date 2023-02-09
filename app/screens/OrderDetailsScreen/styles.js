import { StyleSheet, Dimensions } from "react-native";
const d = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  wrapper: {
    width: "90%",
    flex: 1,
    marginBottom: 50,
  },
  tracking__container: {
    alignSelf: "center",
    marginTop: 30,
  },
  line__separator: {
    width: "95%",
    borderBottomWidth: 2,
    borderColor: "whitesmoke",
    alignSelf: "center",
    marginVertical: 25,
  },
  tracking__text: {
    fontFamily: "OpenSans_bold",
    fontSize: 17,
  },
  details__header: {
    fontFamily: "OpenSans_semiBold",
    fontSize: 15,
    marginBottom: 10,
  },

  details__content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
