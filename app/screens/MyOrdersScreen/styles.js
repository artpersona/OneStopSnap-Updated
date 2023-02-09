import { StyleSheet } from "react-native";
import { Colors, Layout, Theme } from "../../config";

export default StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 19,
    backgroundColor: Colors.white,
    marginVertical: 5,
    flexGrow: 1,
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
    margin: 10,
  },

  headerText: {
    ...Theme.center,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    color: Colors.darkestGrey,
  },

  pastOrderContainer: {
    paddingTop: 10,
    paddingBottom: 100,
  },
  latestContainer: {
    paddingTop: 10,
    paddingBottom: 60,
  },


  

  dateContainer: {
    flex: 1,
    width: "30%",
    backgroundColor: Colors.darkGray,
    borderTopLeftRadius: 19,
    borderBottomLeftRadius: 19,
  },
  upcomingDateContainer: {
    flex: 1,
    width: "30%",
    backgroundColor: Colors.primaryButton,
    borderTopLeftRadius: 19,
    borderBottomLeftRadius: 19,
  },

  date: {
    fontSize: 24,
    lineHeight: 28,
    color: Colors.white,
    fontWeight: "500",
    textAlign: "center",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  time: {
    fontSize: 14,
    lineHeight: 16,
    color: Colors.white,
    opacity: 0.5,
    fontWeight: "bold",
    textAlign: "center",
  },
  detailsContainer: {
    width: "70%",
  },
  trackingText: {
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    color: Colors.darkestGrey,
    marginBottom: 10,
  },
  name: {
    flex: 1,
    alignSelf: "flex-start",
  },
  colKey: {
    width: "40%",
  },
  upcomingColKey: {
    color: Colors.primaryButton,
  },
  colValue: {
    width: "60%",
    marginLeft: 10,
  },
  rowContainer: {
    flexDirection: "row",
  },
  border: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  reviewContainer: {
    flex: 1,
    justifyContent: "center",
  },
  reviewText: {
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    textAlign: "center",
    color: Colors.primaryButton,
  },

  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: Layout.window.width - 50,
  },
  modalContentView: {
    paddingHorizontal: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
  modalTitle: {
    fontWeight: "500",
    fontSize: 24,
    color: Colors.primaryButton,
    textAlign: "left",
    // marginBottom:10
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  modalColValue: {
    color: Colors.subText,
    width: "60%",
    marginLeft: 30,
  },
  modalMerchantName: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 20,
    color: Colors.header,
    marginBottom: 10,
    marginTop: 20,
  },
  ratingContainer: {
    marginTop: 10,
  },
  ratingText: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.primaryButton,
    marginVertical: 10,
  },

  textAreaContainer: {
    height: 100,
    width: "100%",
    borderWidth: 1,
    borderColor: "#9D9D9D",
    borderRadius: 14,
    backgroundColor: Colors.white,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
  },

  buttonContainer: {
    marginTop: 30,
    marginBottom: 20,
    width: 276,
    alignSelf: "center",
  },
  textReview: {
    textAlign: "justify",
    paddingBottom: 20,
  },
});
