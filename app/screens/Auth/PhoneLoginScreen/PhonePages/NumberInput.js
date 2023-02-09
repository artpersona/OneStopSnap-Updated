import React, {useState, useRef, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import PhoneInput from 'react-native-phone-number-input';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-elements';

function NumberInput() {
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [confirm, setConfirm] = useState(null);

  const sendVerification = async () => {
    if (valid) {
      setButtonLoading(true);
      try {
        const confirmation = await auth().signInWithPhoneNumber(formattedValue);

        setConfirm(confirmation);
      } catch (e) {
        setButtonLoading(false);
        alert('Error in number input');
      }
    } else {
      setValid(false);
    }
  };

  const onChangeText = text => {
    setValid(phoneInput.current?.isValidNumber(text));
    setValue(text);
  };

  const onChangeFormattedText = text => {
    setFormattedValue(text);
  };

  useEffect(() => {
    console.log('change in status');
    if (confirm)
      navigation.navigate('PhoneVerification', {
        confirm: confirm,
      });
  }, [confirm]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Text style={styles.number__text}>Phone Verification</Text>
        <Text style={[styles.note__text, {marginTop: 5}]}>
          A 6-digit OTP will be sent via SMS to verify your number
        </Text>
      </View>

      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="PH"
        layout="first"
        onChangeText={onChangeText}
        onChangeFormattedText={onChangeFormattedText}
        containerStyle={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
        disableArrowIcon={false}
        textInputProps={{
          keyboardType: 'phone-pad',
          placeholder: 'Enter Number',
          maxLength: 10,
        }}
      />

      <Button
        title="Next"
        titleStyle={styles.next__text}
        buttonStyle={styles.next__button}
        containerStyle={styles.button__container}
        raised
        loading={buttonLoading}
        loadingStyle={styles.loading__style}
        onPress={sendVerification}
        disabled={!valid}
      />
    </KeyboardAvoidingView>
  );
}

export default NumberInput;
