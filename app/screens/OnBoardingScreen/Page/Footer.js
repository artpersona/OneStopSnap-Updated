import React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";

import SliderIndicator from "./SliderIndicator";
const Footer = ({ onPress, position }) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <View style={[styles.footer__container]}>
      <SliderIndicator position={position} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer__container: {
    backgroundColor: "white",
  },
});

export default Footer;
