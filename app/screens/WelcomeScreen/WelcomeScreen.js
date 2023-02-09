import React, {useContext, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';

import {ConfigContext} from '../../shared/context/ConfigContext';
import LocationPickerModal from '../../components/LocationPickerModal/LocationPickerModal';

import styles from './styles';

function WelcomeScreen({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {currentLocation, initialMapUse} = useContext(ConfigContext);

  const handleChangeLocation = () => {
    setIsModalVisible(true);
  };

  const handleNext = () => {
    if (!initialMapUse) {
      // navigation.navigate('MapScreen');
      navigation.navigate('ShopStack');
    } else {
      navigation.navigate('ShopStack');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logo__container}>
          <Image source={require('../../assets/images/logo.png')} />
          <View style={styles.header__text_container}>
            <Text style={styles.logo__header}>Provide your location</Text>
            <Text style={styles.logo__subtext}>
              In order to proceed further, we recommend to let us know your
              location.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.location__button}
          onPress={handleChangeLocation}>
          <Text
            style={
              currentLocation
                ? [styles.location__select_text]
                : [styles.location__select_text, {opacity: 0.3}]
            }>
            {currentLocation ? currentLocation.name : 'Enter your location'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            currentLocation != null
              ? styles.next__button
              : [styles.next__button, {backgroundColor: '#DADADA'}]
          }
          onPress={() => handleNext()}
          disabled={currentLocation == null}>
          <Text style={styles.next__text}>Proceed</Text>
        </TouchableOpacity>
      </View>
      <LocationPickerModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        headerText={'Where do you want it delivered?'}
        postEventFunction={() => setIsModalVisible(false)}
      />
    </SafeAreaView>
  );
}

export default WelcomeScreen;
