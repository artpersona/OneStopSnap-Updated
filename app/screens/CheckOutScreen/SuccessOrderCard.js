import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { AppContext } from "../../shared/context/AppContext";
import { RFValue } from "react-native-responsive-fontsize";

function SuccessOrderCard() {
  const { trackingCode } = useContext(AppContext);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("Shop");
  };
  return (
    <View style={styles.success__container}>
      <View style={styles.wrapper}>
        <View style={styles.header__container}></View>
        <View style={styles.content__container}>
          <Text style={styles.content__header}>
            Your order is being processed
          </Text>
          <View style={styles.image__container}>
            <Image
              source={require("../../assets/order_confirmed.png")}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
          <View style={styles.tracking__container}>
            <Text style={styles.tracking__code}>{trackingCode}</Text>
            <Text style={styles.tracking__text}>Tracking Code</Text>
          </View>
          <Text style={styles.confirmation__text}>
            This serves as your confirmation that we have received your order.
            Thank you for supporting!
          </Text>
        </View>

        <TouchableOpacity style={styles.next__button} onPress={handleBack}>
          <Text style={styles.next__text}>Return to dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SuccessOrderCard;
