import React, {useState, useRef, useContext} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../../../shared/context/AuthContext';
import {useNavigation} from '@react-navigation/native';

function OTP({confirm}) {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const {customerAuth, auth} = useContext(AuthContext);

  async function confirmCode() {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        confirm.verificationId,
        code,
      );

      customerAuth(credential)
        .then(() => {
          navigation.navigate('Shop');
        })
        .catch(error => {
          Alert.alert('Sorry something went wrong', error.message);
        });
    } catch (error) {
      console.log('confirm 2 is: ', confirm.confirm);
      console.log('error is: ', error);
    }
  }

  const handleCodeChange = value => {
    if (/^\d+$/.test(value) || value === '') {
      setCode(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.container__header}>OTP Verification</Text>
      <Text style={styles.number__text}>Enter 6-digit OTP</Text>
      <TextInput
        keyboardType={'phone-pad'}
        underlineColorAndroid="transparent"
        style={styles.input__field}
        onChangeText={e => handleCodeChange(e)}
        maxLength={6}
      />
      <Text style={[styles.note__text, {marginTop: 25}]}>
        A 6-digit OTP will be sent via SMS to verify your number
      </Text>

      <TouchableOpacity
        style={[styles.next__button, styles.button__container]}
        onPress={confirmCode}>
        <Text style={styles.next__text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default OTP;
