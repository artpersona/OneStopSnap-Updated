/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
import { isTablet } from "../../utils/device.utility";
const containerWidth = isTablet ? "80%" : "90%";
const containerHeight = isTablet ? 250 : 70;
const imageSize = isTablet ? 160 : 85;
export default StyleSheet.create({
  addons__wrapper: {
    marginTop: 5,
  },

  bottom__container: {
    alignItems: "center",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingTop: 10,
    width: "95%",
  },

  container: {
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: Colors.primary,
    borderRadius: 19,
    borderWidth: 3,

    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    minHeight: containerHeight,
    width: containerWidth,
  },
  content__name: {
    flex: 2,
    fontSize: RFValue(9),
  },
  content__price: {
    color: "green",
    fontFamily: "OpenSans_bold",
    fontSize: RFValue(9),
    marginRight: "5%",
  },
  content__quantity: {
    color: Colors.darkestGrey,
    fontSize: RFValue(9),
    marginRight: "10%",
  },
  displayNameText: {
    color: "black",
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(10),
    marginLeft: "7%",
    marginRight: "5%",
    width: "80%",
  },
  image: {
    borderRadius: 500,
    height: imageSize,
    width: imageSize,
  },
  imageContainer: {
    alignSelf: "center",
    flex: 1,
    marginTop: "20%",
  },

  image__container: {
    alignSelf: "center",
    height: 200,
    paddingVertical: 10,
    width: 150,
  },

  image__remove: {
    alignSelf: "flex-end",
    marginHorizontal: 10,
    top: "-28%",
  },
  optional__container: {
    marginLeft: "15%",
    marginTop: 5,
  },

  options__wrapper: {
    marginBottom: 1,
  },

  photo__container: {
    alignSelf: "center",
    borderColor: "#dddddd",
    borderRadius: 19,
    borderWidth: 1,
    margin: 5,
    minHeight: 150,
    width: 170,
  },
  photo__orderText: {
    color: Colors.secondary,

    fontSize: RFValue(20),
    textAlign: "center",
  },
  photo__orderWrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  product__remove: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  quantityText: {
    color: "black",
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(13),
  },
  section__content: {
    alignItems: "center",
    flexDirection: "row",
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(9),
  },
  section__header: {
    color: "black",
    fontFamily: "OpenSans",
    fontSize: RFValue(8),
    opacity: 0.75,
    paddingRight: 6,
  },

  subTotalContainer: {
    alignItems: "flex-end",
    marginRight: 10,
  },
  subTotalPrice: {
    color: "black",
    fontFamily: "OpenSans_semiBold",
    fontSize: RFValue(10),
    fontWeight: "bold",
  },
  warning__text: {
    color: "red",
    fontSize: RFValue(8),
    opacity: 0.7,
    textAlign: "justify",
  },

  wrapper: {
    justifyContent: "center",
    paddingVertical: RFValue(10),
    width: "85%",
  },
});
