import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

import {ConfigContext} from '../../shared/context/ConfigContext';
import IconSVG from '../../assets/svg/IconSVG';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {RFValue} from 'react-native-responsive-fontsize';

import LocationItem from './LocationItem';
import styles from './styles';

function LocationPickerScreen({navigation}) {
  const {appLocations, currentLocation} = useContext(ConfigContext);

  const handleSubmit = () => {
    navigation.navigate('Shop');
  };

  const [disabled, setDisabled] = useState(true);

  const checkDisable = () => {
    if (currentLocation != null) return setDisabled(false);
  };

  useEffect(() => {
    checkDisable();
  }, [currentLocation]);

  return (
    <View style={[styles.modal, {paddingTop: StatusBar.currentHeight}]}>
      <View style={styles.modal__container}>
        <View style={styles.modal__header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Shop')}
            style={styles.header__icon}>
            <Icon name="arrow-back-ios" size={RFValue(22)} color="white" />
          </TouchableOpacity>

          <Text style={styles.modal__headerText}>
            Where do you want it delivered?
          </Text>
        </View>
        <View style={styles.location__header}>
          <View style={styles.location__wrapper}>
            <IconSVG width={RFValue(19)} height={RFValue(19)} />

            <Text style={styles.currLocation__text}> Location: </Text>

            {currentLocation == null && (
              <Text style={styles.choose__text}>Choose a location</Text>
            )}
            {currentLocation != null && (
              <Text style={styles.activeLocation__text}>
                {currentLocation.name}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.location__container}>
          {appLocations.map(item => (
            <LocationItem data={item} type={'location'} key={item.key} />
          ))}
        </View>
        <TouchableOpacity
          style={styles.confirm__button}
          onPress={handleSubmit}
          disabled={disabled}>
          <Text style={styles.confirm__text}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LocationPickerScreen;
