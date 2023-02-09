import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Colors } from "../../config";
import styles from './styles';

function Spinner() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

export default Spinner;