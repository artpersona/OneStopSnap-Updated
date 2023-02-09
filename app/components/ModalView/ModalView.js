/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Logo = ({name, color}) => (
  <View style={styles.modal_info_logo}>
    <Ionicons name={name} size={60} color={color} />
  </View>
);

export default function ModalView(props) {
  return (
    <Modal
      animationType="none"
      transparent
      visible={props.visible}
      onRequestClose={() => {}}>
      <View style={styles.modal_container}>
        <Animatable.View
          animation={props.animation}
          style={[styles.modal_view, {width: props.width}]}>
          <Text style={styles.modal_info_title_text}>{props.title}</Text>
          <View style={{paddingTop: 0}}>{props.children}</View>
          {props.hasOwnProperty('logoName') ? (
            props.logoName === 'error' ? (
              <Logo name="ios-alert" color="#bb0000" />
            ) : props.logoName === 'sad' ? (
              <Logo name="ios-sad" color="#1E88E5" />
            ) : props.logoName === 'information' ? (
              <Logo name="ios-information-circle" color="#039BE5" />
            ) : props.logoName === 'success' ? (
              <Logo name="ios-checkmark-circle" color="#43A047" />
            ) : props.logoName === 'question' ? (
              <Logo name="question-circle" color="#1E88E5" />
            ) : props.logoName === 'warning' ? (
              <Logo name="ios-warning" color="#FFCA28" />
            ) : (
              <Logo name={props.logoName} size={60} color={props.logoColor} />
            )
          ) : null}
          <Text style={styles.modal_info_description_text}>
            {props.description}
          </Text>
          <View
            style={[
              styles.modal_info_button_holder,
              props.optionButton
                ? null
                : {alignItems: 'center', justifyContent: 'center'},
            ]}>
            {props.optionButton ? (
              <View style={{flex: 1, alignItems: 'flex-start'}}>
                <TouchableOpacity
                  onPress={props.onPress2}
                  style={[
                    styles.modal_info_button,
                    styles.modal_info_button_option,
                    props.optionButtonStyle,
                  ]}>
                  <Text style={(styles.button_text, props.okTextStyle)}>
                    {props.optionButtonName}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
            {props.hasOwnProperty('withoutOk') ? null : (
              <View>
                <TouchableOpacity onPress={() => props.onPress1()}>
                  <View style={styles.modal_info_button}>
                    <Text style={styles.button_text}>
                      {props.hasOwnProperty('ok_text')
                        ? props.ok_text
                        : props.hasOwnProperty('yes')
                        ? 'YES'
                        : props.hasOwnProperty('logout')
                        ? 'LOGOUT'
                        : 'OK'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Animatable.View>
      </View>
      {props.outerView}
    </Modal>
  );
}

export const ModalLoading = props => (
  <Modal
    animationType="none"
    transparent
    visible={props.visible}
    onRequestClose={() => {}}>
    <View style={styles.modal_container}>
      <View style={styles.modal_loading}>
        <View style={styles.ml_inner}>
          <View>
            <ActivityIndicator size="large" color="#1080D0" />
          </View>
          <View style={{marginLeft: 12}}>
            <Text style={styles.processing_text}>
              {props.hasOwnProperty('message')
                ? props.message
                : 'Please wait...'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  </Modal>
);

ModalView.propTypes = {
  props: PropTypes.object,
};

ModalView.defaultProps = {
  props: {},
};
