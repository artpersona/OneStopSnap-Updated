import { StyleSheet } from "react-native";
import { Colors } from "../../../config";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
    minHeight: 150,
    borderColor: "#dddddd",
    borderRadius: 19,
    backgroundColor: "#F5FBFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  quantityButtonContainer: {
    // zIndex: 10,
    // backgroundColor: "red",
  },
  imageContainer: {
    flex: 1,
    alignSelf: "center",
    marginTop: "20%",
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  displayNameText: {
    fontFamily: "OpenSans_semiBold",
    paddingTop: 20,
    paddingRight: 6,
    fontSize: 13,
    lineHeight: 16,
    color: "black",
    width: "90%",
  },
  subTotalContainer: {
    alignItems: "flex-end",
    marginRight: 10,
  },
  subTotalPrice: {
    fontFamily: "OpenSans_semiBold",
    color: "black",
    fontSize: 14,
  },
  optional__container: {
    marginTop: 5,
  },

  options__wrapper: {
    marginBottom: 5,
  },
  section__header: {
    fontFamily: "OpenSans",
    paddingRight: 6,
    fontSize: 10.5,
    lineHeight: 16,
    opacity: 0.75,
    color: "black",
  },

  section__content: {
    fontFamily: "OpenSans_semiBold",
    flexDirection: "row",
    alignItems: "center",
    fontSize: 11,
  },

  content__name: {
    flex: 2,
    fontSize: 12,
  },
  content__quantity: {
    fontSize: 11,
    color: Colors.darkestGrey,
    marginRight: "10%",
  },
  content__price: {
    fontFamily: "OpenSans_bold",
    fontSize: 11,
    marginRight: "5%",
    color: "green",
  },
  photo__container: {
    alignSelf: "center",
    width: 170,
    minHeight: 150,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 19,
    margin: 5,
  },
  image__container: {
    alignSelf: "center",
    width: 150,
    height: 200,
    paddingVertical: 10,
  },
  photo__orderText: {
    fontSize: 20,

    textAlign: "center",
    color: Colors.secondary,
  },
  photo__orderWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  product__remove: {
    alignSelf: "flex-end",
    marginHorizontal: 10,
    top: "-20%",
  },
  image__remove: {
    alignSelf: "flex-end",
    marginHorizontal: 10,
    top: "-28%",
  },
  bottom__container: {
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "95%",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  product__quantity: {
    position: "absolute",
    right: 10,
    top: 10,
    fontFamily: "OpenSans_bold",
    color: "#1080D0",
    fontSize: 15,
  },
});
