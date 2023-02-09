import React, { useContext, createContext } from "react";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../config";
import GlobalContext from "../../shared/context/GlobalContext";
import styles from "./styles";
// import { Input } from "react-native-elements";

function RowDetails(props) {
  const isEditable = useContext(GlobalContext);
  let input = <Text style={styles.textDescription}>{props.value}</Text>;

  if (isEditable) {
    input = (
      <TextInput
        keyboardType={props?.keyboardType}
        underlineColorAndroid="transparent"
        onChangeText={props.changed}
        defaultValue={props.value != "Not available" ? props.value : ""}
        placeholder={props.description}
        style={styles.editableInput}
        maxLength={props?.maxLength}
      ></TextInput>
    );
  }

  return (
    <View style={[styles.container, props.styles]}>
      <View style={styles.rowOne}>
        <Icon
          name={props.iconName}
          size={15}
          color={Colors.secondary}
          style={styles.icon}
        />
      </View>
      <View style={styles.rowTwo}>{input}</View>
    </View>
  );
}

export default RowDetails;
