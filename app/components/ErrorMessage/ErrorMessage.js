import React from "react";
import { Text } from "react-native-elements";

import styles from "./styles";

function ErrorMessage(props) {
  return <Text style={styles.errorMessage}>{props.children}</Text>;
}

export default ErrorMessage;
