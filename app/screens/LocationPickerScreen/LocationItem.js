import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ConfigContext } from "../../shared/context/ConfigContext";
import { AppContext } from "../../shared/context/AppContext";
import AwesomeAlert from "react-native-awesome-alerts";
import { Colors } from "../../config";
import { Storage } from "../../utils";
import { ModalLoading } from "../../components/ModalView/ModalView";
import styles from "./styles";

function LocationItem({ data, type }) {
  const {
    currentLocation,
    setCurrentLocation,
    setReferenceLocations,
    setCurrentMiniCategory,
    setCurrentCityCategory,
  } = useContext(ConfigContext);

  const { orders, setOrders } = useContext(AppContext);

  const [locationWarning, setLocationWarning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkCartLoad = () => {
    return (
      (orders != null && orders.length == 0) ||
      orders[0].location_key == data.key
    );
  };

  const locationHelperSelect = async () => {
    setIsLoading(true);
    setOrders([]);
    setCurrentLocation(data);
    updateRefLocation();

    setLocationWarning(false);
  };

  const handleSelect = () => {
    if (checkCartLoad()) {
      setIsLoading(true);
      Storage.save("currentLocation", data);
      setCurrentLocation(data);
      updateRefLocation();
    } else {
      setLocationWarning(true);
    }
  };

  const updateRefLocation = () => {
    setCurrentCityCategory(null);
    setCurrentMiniCategory(null);

    if (data.reference_location) {
      var locationData = Object.values(data.reference_location);
      setReferenceLocations(locationData);
    }
    setTimeout(function () {
      setIsLoading(false);
      clearTimeout();
    }, 1000);
  };

  const cancelPress = () => {
    setLocationWarning(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handleSelect}>
        <View style={styles.locationItem__container}>
          <View style={styles.locationItem__wrapper}>
            {type == "location" && (
              <View style={styles.image__container}>
                <Image
                  source={require("../../assets/map.png")}
                  style={styles.map__image}
                  resizeMode="contain"
                />
              </View>
            )}

            <View style={styles.locationItem__details}>
              <Text style={styles.locationItem__text}>{data.name}</Text>
              <Text style={styles.locationItem__subText}>{data.scope}</Text>
            </View>
          </View>
          <View style={styles.selected__container}>
            {currentLocation && currentLocation.name == data.name && (
              <Image
                source={require("../../assets/Check.png")}
                style={styles.map__image}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
      <AwesomeAlert
        show={locationWarning}
        showProgress={false}
        title="Location Change"
        message="Items on cart will be removed"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Confirm"
        confirmButtonColor={Colors.success}
        cancelButtonColor={Colors.error}
        onCancelPressed={cancelPress}
        onConfirmPressed={locationHelperSelect}
      />
      <ModalLoading visible={isLoading} loading message={"Updating Location"} />
    </>
  );
}

export default LocationItem;
