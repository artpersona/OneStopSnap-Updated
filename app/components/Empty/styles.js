import { StyleSheet } from "react-native";

import { Colors } from "../../config";

export default StyleSheet.create({
  buttonRetry: {
    backgroundColor: Colors.secondary,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: Colors.greyDarker,
    paddingVertical: 16,
    textAlign: "center",
  },
});
