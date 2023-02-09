import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Modal from "react-native-modal";

function ConfirmationModals({ isVisible, setIsVisible, onPress, data }) {
  const handlePress = () => {
    setIsVisible(false);
    setTimeout(function () {
      onPress();
    }, 500);
  };
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionOutTiming={0}
      onBackButtonPress={() => setIsVisible(false)}
    >
      <View style={styles.modal__container}>
        <ScrollView>
          <Text style={styles.modal__header}>
            Minimum purchase amount not met!
          </Text>
          <View style={styles.separator}></View>
          <View style={styles.modal__content}>
            <View>
              {data.map((item, index) => (
                <View style={styles.content__container} key={index.toString()}>
                  <Text style={styles.content__header}>{item.name}</Text>
                  <Text style={{ color: "red" }}>
                    ₱ {item.amount} <Text style={{ fontSize: 11 }}> min. </Text>
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.modal__buttonGroup}>
              <TouchableOpacity
                onPress={handlePress}
                style={[styles.proceedModal__button, styles.modal__button]}
              >
                <Text style={{ color: "white" }}>Continue Shopping</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setIsVisible(false)}
                style={[styles.closeModal__button, styles.modal__button]}
              >
                <Text style={{ color: "white" }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default ConfirmationModals;
