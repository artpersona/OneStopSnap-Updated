import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import Modal from "react-native-modal";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

import HTML from "react-native-render-html";

function NotesModal({ isVisible, setIsVisible, data }) {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      backdropTransitionOutTiming={0}
      onBackButtonPress={() => setIsVisible(false)}
      style={styles.modal}
    >
      <ScrollView style={styles.modal__container}>
        <View style={styles.modal__header}>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={styles.header__icon}
          >
            <Icon name="arrow-back-ios" size={22} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.modal__headerText}>Notes</Text>
        </View>
        <View style={styles.modal__contents}>
          <View style={styles.wrapper}>
            <HTML
              source={data ? { html: data } : { html: "<h1>Loading Text</h1>" }}
              contentWidth={100}
              ignoredTags={["line-break"]}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

export default NotesModal;
