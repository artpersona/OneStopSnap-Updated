import React, {useState, useEffect, useContext} from 'react';
import {
  ImageBackground,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {Button} from 'react-native-elements';
import {Theme, Colors} from '../../../config';
import Icon from 'react-native-vector-icons/Feather';
import {useForm} from 'react-hook-form';
import {ResponseModal, ErrorMessage} from '../../../components';
import {isResponseSuccessful} from '../../../utils/utils/utils';
import {CustomInput} from '../../../components/Main';
import {AuthContext} from '../../../shared/context/AuthContext';
import {Storage} from '../../../utils';
import {Schema} from './schema';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ModalView from '../../../components/ModalView/ModalView';

function LoginScreen() {
  const navigation = useNavigation();
  const {userInfoRole, userInfoStore, adminAuth} = useContext(AuthContext);

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginErrors, setLoginErrors] = useState(null);
  const {register, setValue, handleSubmit, errors, triggerValidation} =
    useForm();

  const [icon, setIcon] = useState('eye-off');
  const [hidePassword, setHidePassword] = useState(true);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [token, setToken] = useState('');

  const [modalState, setModalState] = useState({
    description: '',
    logoName: '',
    showModal: false,
    title: '',
  });

  const onChangeIcon = () => {
    icon !== 'eye-off'
      ? (setIcon('eye-off'), setHidePassword(true))
      : (setIcon('eye'), setHidePassword(false));
  };

  useEffect(() => {
    Schema.map(field => register({name: field.name}, {...field.validations}));

    if (token && isAuthorized) {
      fetchCredentials();
    }
  }, [register, token]);

  const adminLogin = ({email, password}) => {
    setIsLoggingIn(true);
    adminAuth(email, password)
      .then(res => {
        if (userInfoRole == 'reseller') {
          setIsLoggingIn(false);
          navigation.navigate('Admin');
        } else {
        }
      })
      .catch(error => {
        Alert.alert('Sorry something wrong', error.message);
        setIsLoggingIn(false);
        const errorMessage = error.message;

        setModalState({
          showModal: true,
          logoName: 'error',
          description: errorMessage,
        });
      });
  };

  const fetchCredentials = () => {
    Auth.fetchUser(token)
      .then(response => {
        if (isResponseSuccessful(response) && response.data.result != null) {
          Storage.save('client', response.data.result.client);
          Storage.save('token', token.token);
          // navigation.navigate("Shop");
        }
      })
      .catch(error => {
        Alert.alert('Sorry something went wrong', error.message);
      });
  };

  return (
    <>
      <ResponseModal
        show={showResponseModal}
        title={'Success!'}
        subtitle={'Login Successful!'}
        onBackButtonPress={() => setShowResponseModal(false)}
      />
      <ModalView
        visible={modalState.showModal}
        description={modalState.description}
        onPress1={() => setModalState({showModal: false})}
        width="65%"
        animation="bounceIn"
        logoName={modalState.logoName}
      />
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/auth.png')}>
        <View
          style={{
            paddingHorizontal: 10,
            position: 'absolute',
            left: 0,
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name="chevron-left"
              size={30}
              color={Colors.white}
              style={{marginLeft: 10, marginTop: 34}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.formContainer}>
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={Theme.keyboardVerticalOffset}>
              <View style={Theme.center}>
                <Image
                  source={require('../../../assets/logo.png')}
                  style={[styles.img]}
                />
              </View>
              <Text style={Theme.headerText}>LOGIN ACCOUNT</Text>

              <View>
                {loginErrors && <ErrorMessage>{loginErrors}</ErrorMessage>}

                <CustomInput
                  label="Email Address"
                  keyboardType="email-address"
                  leftIcon={{name: 'mail', color: Colors.secondary}}
                  inputContainerStyle={[
                    Theme.inputContainer,
                    errors.email && Theme.inputContainerError,
                  ]}
                  onChangeText={input => (
                    setValue('email', input, true), triggerValidation(['email'])
                  )}
                  errorMessage={errors.email?.message}
                />

                <View style={{flexDirection: 'row'}}>
                  <CustomInput
                    label="Password"
                    leftIcon={{name: 'lock', color: Colors.secondary}}
                    secureTextEntry={hidePassword}
                    inputContainerStyle={[
                      Theme.inputContainer,
                      errors.password && Theme.inputContainerError,
                    ]}
                    inputStyle={Theme.inputTextWhite}
                    onChangeText={input => (
                      setValue('password', input, true),
                      triggerValidation(['password'])
                    )}
                    errorMessage={errors.password?.message}
                  />
                  <Icon
                    style={styles.passIcon}
                    name={icon}
                    size={20}
                    onPress={() => onChangeIcon()}
                  />
                </View>

                <Text
                  style={styles.textForgotPass}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  Forgot Password?
                </Text>
                <Button
                  title="LOGIN"
                  buttonStyle={Theme.buttonPrimary}
                  containerStyle={styles.buttonContainer}
                  titleStyle={Theme.center}
                  loading={isLoggingIn}
                  onPress={handleSubmit(adminLogin)}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default LoginScreen;
