import { Dimensions, StyleSheet } from "react-native";

const d = Dimensions.get("window");

export default StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    width: d.width,
    height: d.height,
  },
});
