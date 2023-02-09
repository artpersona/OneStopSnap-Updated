import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { Colors, Theme } from "../../config";

function Empty(props) {
  const { message } = props;
  return (
    <View style={styles.container}>
      <Text
        style={[
          Theme.center,
          { marginVertical: 30, color: Colors.darkGray, textAlign: "center" },
        ]}
      >
        {message}
      </Text>
    </View>
  );
}

export default Empty;
