import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

function LocationItem({ data }) {
  return (
    <View style={styles.locationItem__wrapper}>
      <View style={styles.locationItem__details}>
        <Text style={styles.locationItem__text}>{data.name}</Text>
        <Text style={styles.locationItem__subText}>
          Quantity: {data.quantity}
        </Text>
      </View>
      <Text style={styles.price__text}>Php {data.subtotal.toFixed(2)}</Text>
    </View>
  );
}

export default LocationItem;
