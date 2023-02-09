import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";

const d = Dimensions.get("window");

const height = d.height > 600 ? d.height / 1.7 : d.height / 2.35;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  coverPhotoContainer: {
    maxHeight: RFValue(180),
    minWidth: "100%",
  },
  coverPhoto: {
    width: "100%",
    height: "100%",
  },
  tabBar: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
  },
  inactiveTabItem: {
    backgroundColor: "white",
  },
  activeTabItem: {
    backgroundColor: "white",
    borderBottomWidth: 5,
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontFamily: "OpenSans_semiBold",
    padding: 8,
    fontSize: RFValue(12.5),
  },
  sectionHeaderText: {
    fontFamily: "OpenSans_bold",
    color: "black",
    fontSize: RFValue(16),
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ddd",
  },
  sectionList: {
    backgroundColor: "white",
    height: "100%",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#121212",
  },
  listTitle: {
    fontSize: RFValue(18),
    fontWeight: "500",
    paddingHorizontal: 20,
    lineHeight: 40,
    textAlign: "center",
    backgroundColor: "white",
  },
  optionButtonStyle: {
    backgroundColor: "transparent",
    borderColor: "#FEC636",
    borderWidth: 1,
  },

  modal__container: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "80%",
    alignSelf: "center",
  },
  text__input: {
    width: "100%",
    height: 100,
    textAlignVertical: "top",
    backgroundColor: "#f1f3f6",
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  header__container: {
    marginTop: -5,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modal__header: {
    fontWeight: "bold",
    paddingHorizontal: 10,

    marginBottom: 5,
    fontSize: RFValue(16),
  },
  separator: {
    borderBottomWidth: 1,
    marginBottom: 5,
    borderColor: Colors.secondary,
  },
  modal__content: {
    paddingHorizontal: 10,
  },
  modal__buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 5,
  },

  modal__button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 10,
  },

  submitReport__button: {
    backgroundColor: "#63a34b",
    color: "white",
  },
  closeModal__button: {
    backgroundColor: "#DD6B55",
  },

  image__container: {
    alignSelf: "center",
    height: 200,
    width: 200,
    borderWidth: 2,
    borderColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
  },
  upload__image: {
    width: "100%",
    height: "100%",
  },
  photoOrder__button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondary,
    padding: 8,
    marginHorizontal: 20,
    marginTop: 5,
  },
  photoOrder__text: {
    color: "white",
    fontWeight: "bold",
  },

  upload__container: {
    backgroundColor: "white",
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "whitesmoke",

    width: "80%",
    alignSelf: "center",
  },

  upload__medium: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "center",
    padding: 5,
    borderWidth: 1,
    borderColor: "whitesmoke",
  },
  upload__icon: {
    marginHorizontal: 5,
    marginRight: 10,
  },
  upload__modify: {
    marginTop: -29,
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    borderWidth: 1,
    borderColor: "whitesmoke",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#1080D0",
    color: "white",
  },

  fab2: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: height,
    backgroundColor: "#F6B323",
    color: "white",
  },

  info__container: {
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
  },
  top__container: {
    width: "100%",
    height: "30%",
  },
  bottom__container: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  text__container: {
    marginLeft: "5%",
    marginTop: "5%",
  },
  logo__container: {
    width: d.width / 5,
    height: d.width / 5,
    borderRadius: 50,
  },
  name__text: {
    fontFamily: "OpenSans_semiBold",
    color: "white",
    fontSize: RFValue(16),
  },
  handler__text: {
    fontFamily: "OpenSans_bold",
    color: "black",
    textTransform: "uppercase",
    fontSize: RFValue(14),
    width: "90%",
  },
  info_icon__container: {
    width: RFValue(28),
    height: RFValue(28),
    backgroundColor: "#FFBE30",
    alignSelf: "flex-end",
    borderRadius: 100,
    padding: 3,
    top: "20%",
    right: "3%",
    alignItems: "center",
    justifyContent: "center",
  },
});
