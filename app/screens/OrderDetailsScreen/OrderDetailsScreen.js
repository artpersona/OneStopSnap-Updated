import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import OrderItemCard from "./components/OrderItemCard";
import { CustomHeader, VirtualizedView } from "../../components";
function OrderDetailsScreen({ route }) {
  const { order } = route.params;
  const renderItems = ({ item }) => {
    return <OrderItemCard data={item} />;
  };

  const keyExtract = (item, index) => {
    return index.toString();
  };

  return (
    <>
      <CustomHeader showBackButton />

      <VirtualizedView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.tracking__container}>
              <Text style={styles.tracking__text}>Tracking #: 4KUMWC9L</Text>
            </View>
            <View style={styles.line__separator} />
            <View style={styles.details__container}>
              <Text style={styles.details__header}>Order Details</Text>
              <View style={styles.details__content}>
                <Text>Purchased from: </Text>
                <Text>Hokkaido</Text>
              </View>
              <View style={styles.details__content}>
                <Text>Delivery address: </Text>
                <Text>Matina Pangi</Text>
              </View>
            </View>
            <View style={styles.line__separator} />

            <View style={styles.details__container}>
              <View style={styles.details__content}>
                <Text>Subtotal</Text>
                <Text>₱ {order.total_goods}</Text>
              </View>
              <View style={styles.details__content}>
                <Text>Delivery Charge: </Text>
                <Text>₱ {order.total_shipping.customerTotal}</Text>
              </View>
              <View style={[styles.details__content, { marginTop: 10 }]}>
                <Text
                  style={{
                    fontFamily: "OpenSans_semiBold",
                    fontSize: 15,
                  }}
                >
                  Total:{" "}
                </Text>
                <Text>
                  ₱{" "}
                  {(
                    parseFloat(order.total_goods) +
                    parseFloat(order.total_shipping.customerTotal)
                  ).toFixed(2)}
                </Text>
              </View>
            </View>
            <View style={styles.line__separator} />

            <FlatList
              data={order.items}
              listKey={(item, index) => index.toString()}
              keyExtractor={keyExtract}
              renderItem={renderItems}
            />
          </View>
        </View>
      </VirtualizedView>
    </>
  );
}

export default OrderDetailsScreen;
