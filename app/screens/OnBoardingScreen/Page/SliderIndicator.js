import React from "react";
import { View, Animated, useWindowDimensions } from "react-native";
import styles from "./styles";

function SliderIndicator({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.circle__container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [width / 30, width / 10, width / 30],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[
              styles.circle,
              { width: dotWidth, opacity, height: width / 30 },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

export default SliderIndicator;
