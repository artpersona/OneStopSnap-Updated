import { StyleSheet } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import {
  deviceWidth,
  isTablet,
  deviceHeight,
} from "../../utils/device.utility";
const searchHeight = isTablet ? 85 : 55;
export default StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  backgroundImage: {
    backgroundColor: "rgba(0,0,0,0.45)",
    flex: 1,
    height: deviceHeight,
    position: "absolute",
    width: deviceWidth,
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
    borderColor: Colors.lightGray,
    borderRadius: RFValue(10),
    elevation: 1,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: "white",
    borderWidth: 0.1,
  },
  categoryScrollView: {
    marginTop: 10,
    paddingHorizontal: 10,
  },

  // eslint-disable-next-line react-native/no-color-literals
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  fab: {
    backgroundColor: Colors.primary,
    bottom: 0,
    color: Colors.white,
    margin: 16,
    position: "absolute",
    right: 0,
  },

  // eslint-disable-next-line react-native/no-color-literals
  filterContainer: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: RFValue(44.5),
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
  filterIcon: {
    alignItems: "center",
    borderColor: Colors.lightGray,
    borderRadius: 7,
    borderWidth: 1,
    padding: isTablet ? 23 : 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  filter__container: {
    alignSelf: "center",
    width: "90%",
  },

  filter__wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  img: {
    borderRadius: 120 / 2,
    height: 120,
    width: 120,
  },

  inputContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    fontSize: RFValue(18),
    fontWeight: "100",
    paddingLeft: 15,
  },
  linearGradient: {
    borderRadius: 40,
    height: 200,
    marginTop: -40,
  },
  locationInfo__container: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "3%",
    marginHorizontal: 13,
    marginTop: "3%",
    paddingVertical: 2,
  },
  locationInfo__text: {
    color: Colors.black,
    fontFamily: "OpenSans",
    fontSize: isTablet ? RFValue(13) : RFValue(12),
    marginLeft: 2,
  },

  profileImageContainer: {
    alignItems: "center",
    marginHorizontal: 20,
    top: -40,
  },

  rightMargin: {
    marginRight: 50,
  },

  searchContainer: {
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    height: searchHeight,
    marginLeft: 15,
    marginRight: 5,
    padding: 8,
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  search__container: {
    alignSelf: "center",
    position: "absolute",

    top: 120,

    width: "100%",
  },

  selectedFilter: {
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    marginHorizontal: "1%",
    marginVertical: "1%",
    padding: "2%",
    paddingHorizontal: "3.5%",
  },

  selectedFilterItem: {
    color: Colors.white,
    fontFamily: "Roboto",
    fontSize: RFValue(12),
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
  text__container: {
    marginLeft: "3%",
  },

  viewAll__container: {
    borderColor: Colors.primary,
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 10,
    padding: "1%",
    paddingHorizontal: 10,
  },
  // eslint-disable-next-line react-native/sort-styles
  topFilters: {
    height: deviceHeight / 15,
    marginVertical: "2%",
  },
});
