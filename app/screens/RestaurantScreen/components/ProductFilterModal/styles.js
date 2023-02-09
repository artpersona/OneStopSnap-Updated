import { StyleSheet } from "react-native";
import { Colors } from "../../../../config";
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
  modal: {
    margin: 0,
    backgroundColor: "white",
  },
  modal__container: {
    height: "100%",
  },
  modal__header: {
    marginTop: "1%",
    paddingVertical: 5,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header__wrapper: {
    justifyContent: "center",
  },
  header__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(16),
    marginLeft: 5,
  },
  input__container: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "2%",
  },

  input__wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 7,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },

  textInputContainer: {
    width: "88%",
    fontFamily: "OpenSans",
    backgroundColor: "white",
    paddingLeft: 10,
    fontWeight: "100",
    fontSize: RFValue(14),
  },

  search__button: {
    marginRight: "3%",
  },
  search__icon: {
    opacity: 0.6,
  },

  modal__content: {
    backgroundColor: "white",
    flex: 1,
  },

  content__wrapper: {
    flex: 1,
    width: "85%",
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: "6%",
  },

  section__separator: {
    borderBottomWidth: 2,
    borderColor: "whitesmoke",
    marginVertical: "7%",
  },

  filterSection__header: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(17),
    marginBottom: "5%",
    color: "#FFBE30",
  },
  options__group: {
    width: "100%",
    alignItems: "center",
    marginTop: "8%",
    marginBottom: "5%",
  },
  apply__button: {
    alignSelf: "center",
    width: "90%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBE30",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 10,
  },
  apply__text: {
    color: "white",
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(15),
  },
  clear__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(15),
    color: "#696969",
    marginTop: "10%",
    marginBottom: "5%",
  },
});
