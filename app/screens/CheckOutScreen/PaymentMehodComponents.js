import React from "react";
import { View, Text } from "react-native";
function PaymentMehodComponents(setIsCod, paymentMethodValue) {
  switch (paymentMethodValue.toUpperCase()) {
    case "GCASH":
      return (
        <View style={styles.paymentNotes}>
          <Text style={styles.paymentNoteHeader}>GCASH</Text>
          <Text>Gcash #: 09456231547</Text>
        </View>
      );
    case "PAYMAYA":
      return (
        <View style={styles.paymentNotes}>
          <Text style={styles.paymentNoteHeader}>PayMaya</Text>
          <Text>PayMaya #: 09456231547</Text>
        </View>
      );
    case "BANKTRANSFER":
      return (
        <View style={styles.paymentNotes}>
          <Text style={styles.paymentNoteHeader}>Sureplus</Text>
          <Text>Account Name: Sureplus Inc.</Text>
          <Text>Account #: 12345</Text>
        </View>
      );
    case "COD":
      return true;
  }
}

export default PaymentMehodComponents;
