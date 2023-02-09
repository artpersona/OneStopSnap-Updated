import React from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import PropTypes from "prop-types";

function RestaurantList({ imageUri, onPress }) {
  let image = { uri: imageUri };
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Image style={styles.imageSize} source={image} />
    </TouchableOpacity>
  );
}

{
  /* <Image style={styles.imageSize} source={image} /> */
}
RestaurantList.propTypes = {
  imageUri: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  isList: PropTypes.bool,
  name: PropTypes.string,
};

RestaurantList.defaultProps = {
  onClick: null,
  isList: false,
  name: "",
};

export default RestaurantList;
{
  /* <Image source={require("../../assets/resto/pizza.jpg")} style={styles.imageSize} resizeMode="contain" /> */
}
