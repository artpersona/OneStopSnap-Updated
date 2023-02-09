import { StyleSheet } from "react-native";
import { Theme, Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";
export default StyleSheet.create({
  additionals: {
    alignSelf: "center",
    marginTop: 40,
    width: "85%",
  },
  additionals__header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5%",
    marginVertical: 10,
    width: "100%",
  },
  additionals__header_sub: {
    color: "black",
    fontFamily: "OpenSans_semiBold",

    fontSize: RFValue(15),
  },
  additionals__header_tag: {
    borderRadius: 20,

    color: "black",
    fontFamily: "OpenSans",

    fontSize: RFValue(11),
    padding: 5,
    textAlign: "center",
    width: "27%",
  },
  bottom__text: {
    color: "black",
    fontFamily: "OpenSans_bold",

    fontSize: RFValue(15),
  },
  buttonContainer: {
    alignSelf: "center",
    width: "60%",
  },
  close__icon: {
    top: -15,
  },
  confirm__button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FFBD30",
    borderRadius: 12,
    elevation: 2,
    justifyContent: "center",
    marginTop: RFValue(25),
    padding: 13,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: "100%",
  },
  confirm__text: {
    color: "white",

    fontFamily: "OpenSans_bold",
    fontSize: RFValue(16),
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    marginBottom: isTablet ? 150 : 80,
  },
  description: {
    color: Colors.darkestGrey,
    fontSize: RFValue(12),
    marginHorizontal: 20,
    marginTop: 20,
    textAlign: "center",
  },
  greenContainer: {
    backgroundColor: "white",
    height: 150,
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
  // eslint-disable-next-line react-native/no-color-literals
  header__text: {
    color: "#FFBE30",
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(17),
    width: "90%",
  },

  header__wrapper: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "8%",
    width: "85%",
  },
  icon: {
    marginRight: 10,
    marginTop: 34,
  },
  iconContainer: {
    paddingHorizontal: 10,
    position: "absolute",
    right: 0,
  },
  imageContainer: {
    ...Theme.center,

    height: isTablet ? 280 : 190,
    marginTop: -100,
    width: isTablet ? 280 : 190,
    // borderRadius: isTablet ? 280 / 2 : 190 / 2,
  },
  img: {
    height: "90%",
    width: "90%",
    // borderRadius: 500,
  },

  info__container: {
    backgroundColor: "#FFBE30",
    borderRadius: 50,
    elevation: 3,
    position: "absolute",
    right: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    top: 20,
  },

  input__container: {
    marginTop: "6%",
  },

  input__field: {
    borderColor: "rgba(158, 150, 150, .5)",
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    marginTop: "2%",
    padding: 10,
    width: "100%",
  },
  lineStroke: {
    alignSelf: "center",
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    marginVertical: 15,
    opacity: 0.5,
    width: "85%",
  },

  minusIconContainer: {
    alignItems: "center",
    backgroundColor: Colors.darkGreen,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    height: 35,
    justifyContent: "center",
  },
  name__row: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
    width: "85%",
  },

  options__container: {
    alignItems: "center",
    borderColor: "whitesmoke",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
  },

  options__text: {
    fontSize: RFValue(14),
  },
  panel: {
    backgroundColor: "white",
    height: "100%",
  },

  panelHeader: {
    alignItems: "center",
    overflow: "hidden",
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
  panel__wrapper: {
    alignSelf: "center",
    marginTop: "5%",
    width: "85%",
  },
  plusIconContainer: {
    alignItems: "center",
    backgroundColor: Colors.darkGreen,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    height: 35,
    justifyContent: "center",
  },
  priceContainer: {
    backgroundColor: Colors.lightGreen,
    height: 100,
    marginBottom: 20,
    marginTop: 30,
  },
  priceNow: {
    ...Theme.center,
    fontSize: RFValue(20),
    fontWeight: "bold",

    marginTop: 10,
  },

  priceNowPrice: {
    ...Theme.center,
    fontSize: RFValue(20),
    marginTop: 10,
  },
  price__text: {
    fontSize: RFValue(14),
  },

  productName: {
    color: "black",
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(15),
    width: "70%",
  },

  quantityButtonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginVertical: 20,
  },

  quantityContainer: {
    ...Theme.lightBorder,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    height: 35,
    justifyContent: "center",
    marginTop: 10,
    width: 130,
  },

  quantityValue: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  quantity__wrapper: {
    marginLeft: 20,
  },
  stocks: {
    ...Theme.center,
    fontSize: RFValue(12),
    lineHeight: 24,

    marginTop: 20,
  },
  submit__button: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    elevation: 2,
    justifyContent: "center",
    padding: RFValue(10),
    paddingVertical: RFValue(15),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: "55%",
  },

  submit__text: {
    color: "white",
    fontSize: RFValue(14),
    fontWeight: "bold",
  },

  subtotal__total: {
    fontFamily: "OpenSans_bold",

    fontSize: RFValue(15),
  },

  subtotal__wrapper: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    width: "85%",
  },

  unavailable__container: {
    marginHorizontal: 20,
  },
  unavailable__header: {
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(15),

    marginBottom: 5,
  },

  whiteContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flexGrow: 1,
    paddingBottom: 30,
  },
});
