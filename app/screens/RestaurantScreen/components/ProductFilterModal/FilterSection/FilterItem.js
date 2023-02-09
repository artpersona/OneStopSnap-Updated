import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";

import styles from "./styles";
function FilterItem({ data, filter, setFilter, type }) {
  const onPress = () => {
    let tempFilter = [...filter];
    if (!filter.includes(data.item)) {
      tempFilter.push(data.item);
    } else {
      const itemIndex = filter.indexOf(data.item);
      tempFilter.splice(itemIndex, 1);
    }
    setFilter(tempFilter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.item__name}>
        {type == "Sort" ? data.item.name : data.item}
      </Text>

      <Checkbox
        status={filter.includes(data.item) ? "checked" : "unchecked"}
        color="#F6B323"
        uncheckedColor="#FFBE30"
        onPress={onPress}
      />
    </View>
  );
}

export default FilterItem;
