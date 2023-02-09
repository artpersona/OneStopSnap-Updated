import React from 'react';
import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import EditSVG from '../../assets/svg/EditSVG';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';

function ProfileItem({data, dataKey, type, label, onPress}) {
  const handlePress = () => {
    onPress({field: label, type, data, dataKey});
    Keyboard.dismiss();
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.profile__container}>
        <View style={styles.form__container}>
          <Text style={styles.profile__label}>{label}</Text>
          <Text
            style={
              data
                ? styles.profile__text
                : [styles.profile__text, {opacity: 0.3}]
            }>
            {data ? data : `Enter ${label}`}
          </Text>
        </View>

        <EditSVG
          width={RFValue(20)}
          height={RFValue(20)}
          style={styles.edit__icon}
        />
      </View>
    </TouchableOpacity>
  );
}

export default ProfileItem;
