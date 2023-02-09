/* eslint-disable react-native/sort-styles */
import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../config";
import { RFValue } from "react-native-responsive-fontsize";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default StyleSheet.create({
  button_text: {
    color: Colors.white,
    fontSize: RFValue(14),
    fontFamily: "OpenSans",
  },
  ml_inner: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
  },
  // eslint-disable-next-line react-native/no-color-literals
  modal_container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.30)",
    height,
    justifyContent: "center",
    width,
  },
  // eslint-disable-next-line react-native/no-color-literals
  modal_content_header: {
    backgroundColor: "#0A8DF2",
    borderBottomColor: "#ececec",
    borderBottomWidth: 0.5,
    justifyContent: "center",
    width: "100%",
  },
  modal_info_button: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    minWidth: 75,
    padding: 7,
  },
  modal_info_button_holder: {
    flexDirection: "row",
    marginTop: 10,
  },
  // eslint-disable-next-line react-native/no-color-literals
  modal_info_button_option: {
    backgroundColor: "#0A8DF2",
  },
  // eslint-disable-next-line react-native/no-color-literals
  modal_info_description_text: {
    textAlign: "center",
    fontSize: RFValue(14),
    // fontFamily: 'Poppins-Regular',
    paddingTop: 5,
    marginVertical: 5,
    color: "#333",
    fontFamily: "OpenSans",
  },
  modal_info_logo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  modal_info_title_text: {
    textAlign: "center",
    fontSize: RFValue(16),
    // fontFamily: 'Poppins-Medium',
    fontWeight: "400",
    color: Colors.secondary,
    fontFamily: "OpenSans",
  },
  modal_loading: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 80,
    justifyContent: "center",
    maxWidth: 350,
    width: "70%",
  },
  // eslint-disable-next-line react-native/no-color-literals
  modal_view: {
    backgroundColor: "#F7FBFF",
    borderRadius: 10,
    maxWidth: 400,
    minHeight: 100,
    padding: 18,
  },
  processing_text: {
    // fontFamily: 'Poppins-Medium',
    fontSize: RFValue(16),
    fontFamily: "OpenSans",
  },
  th_row: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  th_row_center: {
    alignItems: "center",
    flex: 4,
  },
  th_row_left: {
    flex: 1,
    marginLeft: 15,
  },
  th_row_right: {
    alignItems: "flex-end",
    flex: 1,
    marginRight: 15,
  },
  title_text: {
    fontSize: RFValue(16),
    fontFamily: "OpenSans",
    // fontFamily: 'Poppins-Medium',
    color: Colors.white,
  },
});
