import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../../config";

export default StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 19,
    backgroundColor: Colors.white,
    marginVertical: 10,
    flexGrow: 1,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  totalText: {
    fontSize: 10,
    textAlign: "center",
    color: Colors.darkestGrey,
  },
  totalValue: {
    fontSize: 14,
    color: Colors.header,
    fontWeight: "bold",
  },
  totalValueLatest: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "bold",
  },
  deliveredText: {
    marginHorizontal: 10,
    marginBottom: 10,
    color: Colors.secondary,
    fontSize: 14,
    textAlign: "left",
    fontWeight: "bold",
  },
  deliveredValue: {
    marginHorizontal: 10,
    color: Colors.darkGray,
  },
  restoName: {
    fontFamily: "OpenSans_semiBold",
    margin: 10,
    color: "white",
  },
  border: {
    borderBottomColor: "#ECF7FF",
    borderBottomWidth: 1,
  },
  statusText: {
    margin: 10,
    color: Colors.secondary,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  statusReadyText: {
    margin: 10,
    color: Colors.darkGreen,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  rowHeader: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label__container: {
    marginLeft: 10,
  },

  label__header: {
    color: "black",
    fontFamily: "OpenSans_semiBold",
  },
  storeStats__container: {
    marginTop: 1,
  },
  item__name: {
    fontFamily: "OpenSans",
    fontSize: 12,
  },
  item__current: {
    color: "#FEC636",
  },
  trackingText: {
    fontFamily: "OpenSans_semiBold",
  },
  details__container: {
    marginVertical: 15,
  },
  tracking__text: {
    fontSize: 16,
    justifyContent: "center",
  },
  step__container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  down__icon: {
    position: "absolute",
    right: 5,
  },
  details__clickable: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
});
