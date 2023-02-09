import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const OrderSummaryButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      containerStyle={styles.container}
    >
      <Text style={styles.textSummary}>Order Summary</Text>
    </TouchableOpacity>
  );
};

OrderSummaryButton.propTypes = {
  // type: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

OrderSummaryButton.defaultProps = {
  onPress: null,
};

export default OrderSummaryButton;
