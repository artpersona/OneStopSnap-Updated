import { StyleSheet } from "react-native";
import { Colors } from "../../config";

export default StyleSheet.create({
  img: {
    alignSelf: "center",
    width: 90,
    height: 90,
  },
  loadingImage: {
    alignSelf: "center",
    width: '80%',
    height: '60%',
  },
  subtitle: {
    color: Colors.header,
    textAlign: "center",
  },
  title: {
    marginVertical: 15,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 48,
    lineHeight: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
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
    width: 300,
    height: 300,
  },
  loadingModalView: {
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
    width: 300,
    height: 370,
  },
  modalContentView: {
    // margin: 20,
    // padding: 35,
    alignItems: "center",
  },

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
