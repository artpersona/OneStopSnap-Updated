import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import styles from "./styles";

const Page = ({ item }) => {
  const { width } = useWindowDimensions();
  const { imageSrc, title } = item;
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.image__container}>
        <Image source={imageSrc} style={[styles.image, { width }]} />
      </View>

      <View style={styles.title__container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Page;
