import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import styles from './styles';
import NumberInput from './PhonePages/NumberInput';

const d = Dimensions.get('window');

function PhoneLoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.davao__text}>One Stop</Text>
        <Text style={styles.market__text}>Snap</Text>
      </View>

      <View style={{height: d.height / 1.5, backgroundColor: 'white'}}>
        <View style={styles.wrapper}>
          <NumberInput />
        </View>
      </View>
    </View>
  );
}

export default PhoneLoginScreen;
