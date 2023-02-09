import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
function RadioButton({ onPress, selected, setSelected, label, value }) {
  const handlePress = () => {
    setSelected(value);
    // onPress();
  };
  return (
    <View style={styles.container}>
      <View style={styles.radio__container}>
        <TouchableOpacity style={styles.radioCircle} onPress={handlePress}>
          {selected == value && <View style={styles.selectedRb} />}
        </TouchableOpacity>
      </View>
      <Text style={styles.label__text}>{label}</Text>
    </View>
  );
}

export default RadioButton;
