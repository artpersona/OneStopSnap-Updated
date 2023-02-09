/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";
import { Colors } from "../../config";

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 2,
    flexGrow: 1,
    margin: 30,
    maxHeight: "65%",
    minHeight: "40%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  headerText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    marginHorizontal: 40,
    marginTop: 100,
    textAlign: "center",
  },
  icon: {
    marginRight: 10,
    marginTop: 34,
  },
  iconContainer: {
    backgroundColor: Colors.error,
    paddingHorizontal: 10,
    position: "absolute",
    right: 0,
  },
  imageContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  img: {
    borderRadius: 90 / 2,
    height: 90,
    width: 90,
  },
});
