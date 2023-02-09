import React from "react";
import { View, Text } from "react-native";
import { Theme } from "../../../config";
import styles from "./styles";

const PastOrder = ({ order }) => {
  return (
    order && Object.keys(order)?.length && (
      <View style={styles.container}>
        <View style={Theme.row}>
          <View style={Theme.isSixtyPercent}>
            <Text style={styles.restoName}>{order.store_name}</Text>
            {/* <Text style={styles.deliveredValue}>Nov 5, 2020 10:00AM</Text> */}
            <Text style={styles.deliveredText}>{order.ordered_at}</Text>
          </View>

          <View style={[Theme.isFortyPercent, Theme.center]}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalValue}>₱ {order.total_goods}</Text>
          </View>
        </View>
      </View>
    )
  );
};

export default PastOrder;
