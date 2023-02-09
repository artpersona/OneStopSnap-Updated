import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { ConfigContext } from "../../../shared/context/ConfigContext";
import styles from "./styles";
function CategoryFilterItem({ item, current, type }) {
  const { setCurrentCityCategory, setCurrentMiniCategory } =
    useContext(ConfigContext);

  const handleSelectCategory = () => {
    let tempCat = [...current];
    let tempIndex = null;
    let exists = false;
    if (type == "city") {
      setCurrentMiniCategory([]);
      if (tempCat.length > 0) {
        tempCat.map((data, index) => {
          if (data.key == item.key) {
            exists = true;
            tempIndex = index;
          }
        });

        if (exists) {
          tempCat.splice(tempIndex, 1);
          return setCurrentCityCategory(tempCat);
        }
      }
      tempCat.push(item);
      return setCurrentCityCategory(tempCat);
    } else {
      setCurrentCityCategory([]);

      if (tempCat.length > 0) {
        tempCat.map((data, index) => {
          if (data.key == item.key) {
            exists = true;
            tempIndex = index;
          }
        });

        if (exists) {
          tempCat.splice(tempIndex, 1);
          return setCurrentMiniCategory(tempCat);
        }
      }

      tempCat.push(item);
      return setCurrentMiniCategory(tempCat);
    }
  };
  return (
    <TouchableOpacity
      style={styles.item__container}
      onPress={handleSelectCategory}
    >
      <Text style={styles.item__text}>{item.name}</Text>
      <Checkbox
        status={
          current.length > 0 && current.some((data) => data.key == item.key)
            ? "checked"
            : "unchecked"
        }
        color="#F6B323"
        onPress={handleSelectCategory}
      />
    </TouchableOpacity>
  );
}

export default CategoryFilterItem;
