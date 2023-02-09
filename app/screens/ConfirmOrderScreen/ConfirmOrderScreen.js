import React, { useState, useEffect, useRef, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { Theme, Layout, Colors } from "../../config";
import { CustomHeader } from "../../components";
import { Button } from "react-native-elements";
import { Checkbox } from "react-native-paper";
import styles from "./styles";
import { AppContext } from "../../shared/context/AppContext";
import AwesomeAlert from "react-native-awesome-alerts";

function ShopScreen({ navigation, route }) {
  const [checked, setChecked] = useState(false);
  const [removeChecked, setRemoveChecked] = useState(false);
  const { setOrders, orders } = useContext(AppContext);
  const { openStoreData, ordersWithSection } = route.params;

  const [confirmAlert, setConfirmAlert] = useState(false);

  const removeClosedStoreOders = () => {
    setOrders(openStoreData);
    setConfirmAlert(false);
    navigation.navigate("CheckOut", { ordersWithSection: ordersWithSection });
  };

  const handleConfirmPress = () => {
    if (checked) {
      if (removeChecked) {
        return setConfirmAlert(true);
      }
      navigation.navigate("CheckOut", { ordersWithSection: ordersWithSection });
    }
  };
  return (
    <>
      <ScrollView
        scrollEventThrottle={16}
        style={{ backgroundColor: Colors.white }}
      >
        <View style={[Theme.screenContainer]}>
          <CustomHeader showBackButton />

          <View style={styles.wrapper}>
            <Text style={[Theme.listTitleLarge, { marginHorizontal: 0 }]}>
              Confirm Order
            </Text>
            <Text style={styles.header__notes_text}>
              To practice contactless delivery, we encourage you to pay via
              Gcash or bank transfer. If via cash, please pay the exact amount
              as much as possible.
            </Text>

            <Text style={[styles.header__notes_text, { fontWeight: "bold" }]}>
              Pay via Gcash or bank transfer before cut-off time for orders &
              get P20 cash refund upon delivery.
            </Text>
            {/* TODO:: Clarify this */}
            <Text style={styles.header__notes_text}>
              I am aware that I (buyer) will be purchasing fruits and vegetables
              that are SURPLUS PRODUCTS from farmers (Class B/C) and that they
              may differ, especially in terms of appearance, when compared to
              products solid in supermarkets (Class A).
            </Text>

            <Text style={styles.header__notes_text}>
              In line with being #ZeroWaste, please prepare a container or bag
              so the items can be transferred upon delivery. If you don't have
              your own, you can buy our bayong at P300 only.
            </Text>

            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 20,
                borderTopWidth: 1,
                borderColor: Colors.primary,
                textAlign: "justify",
              }}
            />

            <View style={styles.checkbox__container}>
              <Checkbox
                color={Colors.darkGreen}
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text style={styles.term__text}>
                I have read and understood the statements above and will proceed
                with the order.
              </Text>
            </View>
            {/* {openStoreData && openStoreData.length < orders.length && (
              <View style={styles.checkbox__container}>
                <Checkbox
                  color={Colors.darkGreen}
                  status={removeChecked ? "checked" : "unchecked"}
                  onPress={() => {
                    setRemoveChecked(!removeChecked);
                  }}
                />
                <Text style={styles.remove__text}>
                  Remove orders from closed stores.
                </Text>
              </View>
            )} */}

            <Button
              title="GO TO CHECKOUT"
              buttonStyle={Theme.buttonPrimary}
              containerStyle={styles.confirmOrderContainer}
              titleStyle={[Theme.center, styles.confirmOrder__text]}
              // loading={isLoggingIn}
              disabled={!checked}
              onPress={handleConfirmPress}
            />
          </View>
        </View>
      </ScrollView>

      <AwesomeAlert
        show={confirmAlert}
        showProgress={false}
        title="Remove Items"
        message="Items from closed stores will be removed!"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        cancelButtonColor={Colors.error}
        confirmText="Proceed"
        confirmButtonColor="#63a34b"
        onCancelPressed={() => {
          setConfirmAlert(false);
        }}
        onConfirmPressed={removeClosedStoreOders}
      />
    </>
  );
}

export default ShopScreen;
