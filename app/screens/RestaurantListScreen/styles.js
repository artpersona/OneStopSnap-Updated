import { StyleSheet } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";

const searchHeight = isTablet ? 85 : 55;

export default StyleSheet.create({
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
  headerTextContainer: {
    alignItems: "center",
    alignSelf: "baseline",
    flexDirection: "row",
    marginHorizontal: 32,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    fontSize: RFValue(18),
    fontWeight: "100",
    height: "100%",
    paddingLeft: 15,
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 150,
    paddingBottom: 50,
    paddingHorizontal: 30,
  },
  restaurantListContainer: {
    borderRadius: 20,
    paddingBottom: 10,
  },
  restaurantScrollView: {
    marginTop: 20,
    paddingBottom: 200,
  },

  searchContainer: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    height: searchHeight,
    marginLeft: 15,
    marginRight: 5,
    marginTop: "5%",
    padding: 8,
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    width: "90%",
  },
  searchIcon: {
    // paddingRight: 10,
    margin: 10,
    marginRight: 20,
  },
  textWelcome: {
    alignSelf: "baseline",
    color: Colors.black,
    fontSize: RFValue(24),
    fontWeight: "500",
    height: 42,
    justifyContent: "flex-end",
    lineHeight: 42,
  },

  title__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(14),
    marginHorizontal: 20,
  },
});
