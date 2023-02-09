import { Dimensions, StyleSheet } from "react-native";
import { Theme, Colors } from "../../config";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
  },
  carouselImg: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
  },
  imageContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  textContainer: {
    width: "90%",
    alignSelf: "center",
    // justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 19,
    backgroundColor: Colors.white,
    marginVertical: 20,
    // padding: 20,
    flexGrow: 1,
  },
  problemText: {
    margin: 10,
    fontSize: 12,
    textAlign: "justify",
    color: Colors.darkestGrey,
  },
  about: {
    margin: 20,
    fontSize: 12,
    textAlign: "justify",
    paddingBottom: 20,
    color: Colors.darkestGrey,
  },
});
