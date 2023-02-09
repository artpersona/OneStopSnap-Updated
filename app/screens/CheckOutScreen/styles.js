import { StyleSheet, Dimensions } from "react-native";
import { Theme, Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";

const d = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  subTotalValues: {
    fontSize: RFValue(12),
    color: Colors.darkestGrey,
  },
  inputContainer: {
    // marginHorizontal: 10,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    width: 215,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "90%",
    // marginRight: 20,
    borderRadius: 10,
    height: isTablet ? 70 : 40,
    alignSelf: "flex-end",
    justifyContent: "center",
  },

  confirmOrderContainer: {
    width: "100%",
    marginVertical: 20,
    marginBottom: 40,
    marginHorizontal: 20,
    borderRadius: 15,
    alignSelf: "center",
  },
  orderModalButtonContainer: {
    width: "100%",
    marginVertical: 10,

    marginHorizontal: 20,
    borderRadius: 0,
    alignSelf: "center",
  },
  confirmOrder__text: {
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(14),
  },
  subTotalPrice: {
    color: Colors.darkestGrey,
    bottom: 20,
    fontWeight: "bold",
    fontSize: RFValue(13),
  },
  paymentNotes: {
    ...Theme.inputBorderedContainer,
    // margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  paymentNoteHeader: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: RFValue(18),
    lineHeight: 30,
  },

  // success styles

  imageContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
  confirmationText: {
    fontSize: RFValue(13),
    textAlign: "justify",
    fontWeight: "bold",
    lineHeight: 20,
  },
  codeText: {
    color: Colors.white,
    fontSize: RFValue(23),
  },
  codeContainer: {
    height: 60,
    backgroundColor: Colors.secondary,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  totalText: {
    marginTop: 10,
    fontSize: RFValue(13),
    fontFamily: "OpenSans_bold",
  },

  success__container: {
    flex: 1,
    backgroundColor: "white",
  },

  wrapper: {
    width: "90%",
    // height: "100%",
    marginTop: d.height / 25,
    alignSelf: "center",
  },
  header__container: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  content__container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: d.height / 12,
  },

  content__header: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(15),
    marginBottom: d.height / 20,
  },

  tracking__container: {
    marginVertical: d.height / 30,
    alignItems: "center",
  },

  tracking__code: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(33),
    color: Colors.primary,
  },

  tracking__text: {
    textTransform: "uppercase",
    fontFamily: "OpenSans",
    fontSize: RFValue(12),
  },

  confirmation__text: {
    textAlign: "center",
    width: "90%",
    fontFamily: "OpenSans",
    fontSize: RFValue(12),
  },

  next__button: {
    alignSelf: "center",
    width: "100%",
    padding: isTablet ? 20 : 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: isTablet ? 20 : 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginTop: "30%",
  },
  next__text: {
    fontSize: RFValue(15),
    color: "white",
    fontFamily: "OpenSans_semiBold",
  },
  image__container: {
    width: d.height / 3,
    height: d.height / 3,
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  header__notes_text: {
    marginTop: 20,
    fontSize: RFValue(11),
    color: Colors.darkestGrey,
    textAlign: "justify",
    // marginHorizontal: 15,
  },

  payment__method_text: {
    alignSelf: "center",
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
  },

  refLoc__text: {
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
    // marginHorizontal: 10,
  },
  refLoc__container: {
    // marginHorizontal: 10,
    marginVertical: 15,
    height: isTablet ? 70 : 40,
    // backgroundColor: "#1080D0",
  },

  refLoc__dropdown_text: {
    justifyContent: "flex-start",
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
    color: "white",
  },
  voucher__component: {
    width: "100%",
    height: isTablet ? 70 : 40,
  },
  voucher__title: {
    fontFamily: "OpenSans",
    fontSize: RFValue(14),
    textTransform: "capitalize",
  },

  header: {
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: "#000000",
    elevation: 5,
    // paddingTop: "8%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderColor: "whitesmoke",
    backgroundColor: "white",
  },
  header__wrapper: {
    alignSelf: "center",
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "8%",
  },

  close__icon: {
    top: -15,
  },

  header__text: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(17),
    color: "#FFBE30",
    width: "90%",
  },

  panelHeader: {
    alignItems: "center",
    overflow: "hidden",
  },

  panel: {
    height: "100%",
    backgroundColor: "white",
  },
  panel__wrapper: {
    width: "85%",
    alignSelf: "center",
    marginTop: "5%",
  },
  panel__label: {
    fontFamily: "OpenSans",
    fontSize: RFValue(11),
  },
  panel__value: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(13),
    marginTop: "1%",
  },

  input__container: {
    marginTop: "6%",
  },

  input__field: {
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(158, 150, 150, .5)",
    height: 50,
    borderRadius: 10,
    marginTop: "2%",
    padding: 10,
  },

  confirm__button: {
    alignSelf: "center",
    width: "100%",
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFBD30",
    marginTop: RFValue(25),
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  confirm__text: {
    fontSize: RFValue(16),

    color: "white",
    fontFamily: "OpenSans_bold",
  },

  unavailable__header: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(13),

    marginBottom: 5,
  },
  options__container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    padding: 10,
    justifyContent: "space-between",
    borderColor: "whitesmoke",
    borderRadius: 10,
    marginBottom: 20,
  },
  options__text: {
    fontSize: RFValue(14),
  },

  page__header: {
    textAlign: "center",
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(17),
  },
});
