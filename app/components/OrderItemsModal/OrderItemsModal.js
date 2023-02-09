import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  StatusBar,
} from "react-native";

import Modal from "react-native-modal";
import styles from "./styles";

import Icon from "react-native-vector-icons/MaterialIcons";
import { RFValue } from "react-native-responsive-fontsize";
import { AppContext } from "../../shared/context/AppContext";
import { getTotalByStoresObject } from "../../utils/product.utility";
import OrderItem from "./OrderItem";

function OrderItemsModal({ isVisible, setIsVisible, ordersWithSection }) {
  const { allRestaurants, orders } = useContext(AppContext);
  const totalPerStore = getTotalByStoresObject(orders);
  const renderItem = ({ item, index }) => {
    return <OrderItem data={item} key={index.toString()} />;
  };

  const renderSectionHeader = ({ section: { title } }) => {
    const displayTitle = allRestaurants.find(({ id }) => id == title);
    return (
      <View style={styles.header__row}>
        <View style={styles.header__row_wrapper}>
          <Text style={styles.header__text}>{displayTitle?.name}</Text>
          <Text style={styles.subhead__text}>
            Php {totalPerStore[`${title}`].toFixed(2)}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      backdropTransitionOutTiming={0}
      onBackButtonPress={() => setIsVisible(false)}
      style={styles.modal}
    >
      <View style={styles.modal__container}>
        <StatusBar backgroundColor="#61dafb" />
        <View style={styles.modal__header}>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            style={styles.header__icon}
          >
            <Icon name="arrow-back-ios" size={RFValue(22)} color="black" />
          </TouchableOpacity>

          <Text style={styles.modal__headerText}>Ordered Products</Text>
        </View>
        <View style={styles.location__header}>
          <View style={styles.location__wrapper}></View>
        </View>
        <View style={styles.location__container}>
          <SectionList
            sections={ordersWithSection}
            // keyExtractor={keyExtractor}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
          />
        </View>
      </View>
    </Modal>
  );
}

export default OrderItemsModal;
