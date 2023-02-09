import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../config";
const d = Dimensions.get("window");

export default StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  backgroundImage: {
    backgroundColor: "rgba(0,0,0,0.45)",
    flex: 1,
    height: d.height,
    position: "absolute",
    width: d.width,
  },

  buttonContainerStyle: {
    alignSelf: "center",
    bottom: 10,
    flex: 1,
    paddingVertical: 20,
  },
  buttonTitleStyle: {
    alignItems: "center",
  },
  categoryListContainer: {
    marginLeft: 20,
  },
  categoryScrollView: {
    // height: 130,
    marginTop: 20,
    // marginRight: 20,
    paddingRight: 50,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  // eslint-disable-next-line react-native/no-color-literals
  filterContainer: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 44.5,
    elevation: 1,
    height: 60,
    justifyContent: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    width: 60,
  },
  img: {
    borderRadius: 120 / 2,
    height: 120,
    width: 120,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    fontSize: 18,
    fontWeight: "100",
    paddingLeft: 15,
    // padding: 10,
    // lineHeight: 34
  },
  linearGradient: {
    borderRadius: 40,
    height: 200,
    marginTop: -40,
  },
  merchantContainer: {
    marginTop: 40,
  },
  profileImageContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    top: -40,
  },
  rightMargin: {
    marginRight: 50,
  },
  searchComponentContainer: {
    paddingHorizontal: 10,
    position: "absolute",
    top: 90,
  },
  searchContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray,
    borderRadius: 13,
    borderWidth: 2,
    height: 60,
    marginHorizontal: 15,
    padding: 8,
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  searchIcon: {
    // paddingRight: 10,
    margin: 10,
    marginRight: 20,
  },

  textWelcome: {
    alignSelf: "baseline",
    color: Colors.black,
    fontSize: 24,
    fontWeight: "500",
    height: 42,
    justifyContent: "flex-end",
    lineHeight: 42,
  },
});
