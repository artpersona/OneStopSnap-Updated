import React from "react";
import { View, Text, Image, Alert } from "react-native";
import { Button, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import Modal from "react-native-modal";
import { Colors } from "../../config";
import styles from "./styles";

function ResponseModal({ navigation, show, error, loading, title, subtitle, onBackButtonPress }) {
  let source = null;
  let color = null;
  let imgStyles = styles.img;
  let modalStyles = styles.modalView;

  if (loading) {
      source=require("../../assets/images/icons/success.png");
      imgStyles = styles.loadingImage;
      modalStyles = styles.loadingModalView;
      color = Colors.primaryButton
  } else {
    if (error) {
      source=require("../../assets/images/icons/error.png");
      color = Colors.error;
    } else {
      source=require("../../assets/images/icons/success.png");
      color = Colors.success;
    }
  }

  const image = <Image source={source} style={imgStyles} />;
  const imageText = (
    <Text style={{ ...styles.title, color: color}}>{title}</Text>
  );

  return (
    <>
      <Modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        transparent={true}
        isVisible={show}
        onRequestClose={false}
        onBackButtonPress={() => {
          navigation.navigate("LogIn");
        }}
      >
        <View style={styles.centeredView}>
          <View style={modalStyles}>
            <Button
              type="clear"
              buttonStyle={{ alignSelf: "flex-end" }}
              onPress={() => onBackButtonPress()}
              icon={<Icon name="x" size={24} color="black" />}
            />
            <View style={styles.modalContentView}>
              {image}
              <View>
                {imageText}
                <Text style={styles.subtitle}>{subtitle}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ResponseModal;
