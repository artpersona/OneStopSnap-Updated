import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconSVG from '../assets/svg/IconSVG';
import LocationPickerModal from '../../components/LocationPickerModal/LocationPickerModal';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
function LocationInfo({currentLocation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.locationInfo__container}>
        <IconSVG width={RFValue(30)} height={RFValue(30)} />
        <View style={styles.text__container}>
          <Text style={styles.locationInfo__text}>
            Shops shown here delivers to{' '}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'LocationPicker'}],
              })
            }>
            <Text
              style={[
                styles.locationInfo__text,
                {
                  fontFamily: 'OpenSans_bold',
                  color: '#FFBE30',
                },
              ]}>
              {currentLocation?.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <LocationPickerModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        headerText={'DELIVER TO'}
        type={'location'}
        postEventFunction={() => setIsModalVisible(false)}
      />
    </>
  );
}

export default LocationInfo;
