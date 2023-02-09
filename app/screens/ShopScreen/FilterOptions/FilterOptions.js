import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { RFValue } from "react-native-responsive-fontsize";
import styles from "./styles";
import { Colors } from "../../../config";
import { ConfigContext } from "../../../shared/context/ConfigContext";
function FilterOptions({ item, mini }) {
  const { currentMiniCategory, setCurrentMiniCategory } =
    useContext(ConfigContext);

  const navigation = useNavigation();
  const navigateToRestaurantList = () => {
    navigation.navigate("RestaurantListScreen", { filters: item });
  };

  const handleFilterRemoval = () => {
    let tempCat = [...currentMiniCategory];
    let tempIndex = null;
    let exists = false;

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
    setCurrentMiniCategory(tempCat);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigateToRestaurantList}
      disabled={mini}
    >
      {mini && (
        <TouchableOpacity
          style={styles.remove__icon}
          onPress={handleFilterRemoval}
        >
          <Icon name="close" size={RFValue(15)} color={Colors.error} />
        </TouchableOpacity>
      )}

      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default FilterOptions;
