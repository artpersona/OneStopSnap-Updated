import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { ConfigContext } from "../../shared/context/ConfigContext";
import Modal from "react-native-modal";
import styles from "./styles";

import LocationItem from "./LocationItem";

function LocationPickerModal({
  isVisible,
  setIsVisible,
  type,
  postEventFunction,
}) {
  const { appLocations, currentLocation } = useContext(ConfigContext);

  const handleSubmit = () => {
    postEventFunction();
    setIsVisible(false);
  };

  const [disabled, setDisabled] = useState(true);

  const checkDisable = () => {
    if (currentLocation != null) return setDisabled(false);
  };

  useEffect(() => {
    checkDisable();
  }, [currentLocation]);

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      backdropTransitionOutTiming={0}
      onBackButtonPress={() => setIsVisible(false)}
      style={styles.modal}
    >
      <View style={styles.modal__container}>
        <View style={styles.modal__header}>
          <Image source={require("../../assets/images/logo.png")} />
          <View style={styles.header__text}>
            <Text style={styles.provide__text}>Provide your location</Text>
            <Text style={styles.question__text}>
              Where do you want it delivered ?
            </Text>
          </View>
        </View>

        <View style={styles.location__container}>
          {appLocations.map((item) => (
            <LocationItem data={item} type={type} key={item.key} />
          ))}
        </View>
        <TouchableOpacity
          style={styles.confirm__button}
          onPress={handleSubmit}
          disabled={disabled}
        >
          <Text style={styles.confirm__text}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default LocationPickerModal;
