import { StyleSheet } from "react-native";
import { Colors } from "../../config";
export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  indicator__container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2%",
  },
  normalCircle: {
    backgroundColor: Colors.lightGray,
    borderRadius: 100,
    height: 10,
    marginHorizontal: "1%",
    width: 10,
  },
  pagination__item: {
    backgroundColor: Colors.blue,
    height: "100%",
    width: "100%",
  },
  selectedCircle: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    height: 10,
    marginHorizontal: "1%",
    width: 10,
  },
});
