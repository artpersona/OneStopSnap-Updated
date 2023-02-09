import { StyleSheet } from "react-native";
import { Colors } from "../../config";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 60,
    marginVertical: 10,
  },
  rowOne: {
    width: "20%",
    justifyContent: "center",
  },
  rowTwo: {
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textDescription: {
    color: Colors.subText,
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
  editableInput: {
    width: "100%",
    backgroundColor: "white",
    borderColor: "#DADADA",
    borderWidth: 1,
    height: 35,
    paddingStart: 10,
  },
});
