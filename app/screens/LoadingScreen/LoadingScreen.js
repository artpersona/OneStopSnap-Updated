import React from "react";
import { View, ActivityIndicator } from "react-native";
function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#FEC636" />
    </View>
  );
}

export default LoadingScreen;
