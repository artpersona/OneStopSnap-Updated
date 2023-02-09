import React, { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";

import { Colors, Theme } from "../../../config";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import StepIndicator from "react-native-step-indicator";
import PropTypes from "prop-types";
import { AppContext } from "../../../shared/context/AppContext";
import { useNavigation } from "@react-navigation/native";

const LatestOrder = ({ order }) => {
  // const { title, onPress } = props;
  const [currentIndex, setCurrentIndex] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(0);
  const [storeStatuses, setStoreStatuses] = useState([]);
  const [storePreparing, setStorePreparing] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    let tempStatus = [];
    let tempPrepare = [];
    allRestaurants.map((item) => {
      order.status.map((data) => {
        if (data.store_id == item.id) {
          tempStatus.push({ status: data.status, name: item.name });
        }
      });

      order.is_preparing.map((data) => {
        if (data.store_id == item.id) {
          tempPrepare.push({ status: data.status, name: item.name });
        }
      });
    });
    setStoreStatuses(tempStatus);
    setStorePreparing(tempPrepare);
  }, [order]);

  useEffect(() => {
    getCurrenStatus();
  }, [storeStatuses, storePreparing]);

  const { allRestaurants } = useContext(AppContext);

  const labels = [
    "Order Placed",
    "Order Processed",
    "Ready to Deliver",
    "Out for Delivery",
    "Delivered",
  ];

  const data = [
    { label: "Order Placed", status: true },
    { label: "Order Processed", status: false },
    { label: "Ready to Deliver", status: "ready" },
    { label: "Out for Delivery", status: "on_transit" },
    { label: "Delivered", status: "delivered" },
  ];

  const statuses = ["processing", "ready", "on_transit", "delivered"];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 27,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 5,
    stepStrokeCurrentColor: "#FEC636",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#F79346",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#F79346",
    separatorUnFinishedColor: "#aaaaaa",
    stepIndicatorFinishedColor: "#F79346",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#FEC636",
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: "#fe7013",
    stepIndicatorLabelFinishedColor: "#fe7013",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",

    labelAlign: "flex-start",
  };

  const getCurrenStatus = () => {
    let currentStatus = 0;
    let finishedCounter = 0;
    storeStatuses.map((item) => {
      const position = statuses.indexOf(String(item.status));
      if (
        item.status == "tocancel" ||
        item.status == "cancelled" ||
        item.status == "delivered"
      ) {
        currentStatus = 3;
        finishedCounter = finishedCounter + 1;
      }
      currentStatus =
        parseInt(position) > currentStatus ? parseInt(position) : currentStatus;
    });

    if (finishedCounter == storeStatuses.length) {
      currentStatus = 4;
    }

    setCurrentStatus(currentStatus + 1);
  };

  const renderLabel = ({ position, stepStatus, label, currentPosition }) => {
    return (
      <View style={styles.label__container}>
        <Text
          style={
            stepStatus == "current"
              ? [styles.label__header, { color: "#FEC636" }]
              : styles.label__header
          }
        >
          {label}
        </Text>
        <View style={styles.storeStats__container}>
          {position == 0 &&
            storeStatuses.map((item, index) => {
              return (
                <Text style={styles.item__name} key={index.toString()}>
                  {item.name}
                </Text>
              );
            })}

          {position == 1 &&
            storePreparing.map((item, index) => {
              if (
                item.status == data[position].status &&
                storeStatuses[index].status != "processing"
              )
                return (
                  <Text style={styles.item__name} key={index.toString()}>
                    {item.name}
                  </Text>
                );
              return (
                <Text style={[styles.item__name, styles.item__current]}>
                  {item.name}
                </Text>
              );
            })}

          {position != 1 &&
            position != 0 &&
            storeStatuses.map((item, index) => {
              if (
                (position == 4 && item.status == "tocancel") ||
                item.status == "cancelled"
              ) {
                return (
                  <Text
                    style={[styles.item__name, { color: "red" }]}
                    key={index.toString()}
                  >
                    {item.name}
                  </Text>
                );
              } else if (item.status == data[position].status)
                return (
                  <Text style={[styles.item__name, styles.item__current]}>
                    {item.name}
                  </Text>
                );
              else {
                return <Text style={styles.item__name}>{item.name}</Text>;
              }
            })}
        </View>
      </View>
    );
  };

  const handlePress = () => {
    setCurrentIndex(!currentIndex);
  };

  const handleOrderDetails = () => {
    navigation.navigate("OrderDetails", { order: order });
  };

  return (
    order &&
    Object.keys(order)?.length && (
      <View style={styles.container}>
        <View style={styles.rowHeader}>
          <Text style={styles.trackingText}>
            Tracking #: {order.tracking_code.toUpperCase()}
          </Text>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalValueLatest}>₱ {order.total_goods}</Text>
          </View>
        </View>

        <View style={styles.border} />
        <TouchableOpacity onPress={handleOrderDetails}>
          <View style={styles.details__clickable}>
            <Text style={styles.restoName}>Items Purchased</Text>
            <Icon2 name="receipt-long" size={30} color={"white"} />
          </View>
        </TouchableOpacity>

        <View style={styles.details__container}>
          <Text style={styles.deliveredValue}>{order.ordered_at}</Text>
          <Text style={styles.deliveredValue}>
            Payment Method : {order.payment_method}
          </Text>
          <Text style={styles.deliveredValue}>
            {order.payment_status && `Payment Status : ${order.payment_status}`}
          </Text>
        </View>

        <View style={{ borderBottomColor: "#FFBE30", borderBottomWidth: 1 }} />

        <TouchableOpacity
          // key={category}
          onPress={handlePress}
          style={styles.cardContainer}
          activeOpacity={0.9}
        >
          <View style={styles.restoName}>
            <View style={styles.step__container}>
              <Text style={styles.tracking__text}>Track Order</Text>
              <Icon
                name={!currentIndex ? "chevron-down" : "chevron-up"}
                size={30}
                color={Colors.secondary}
                style={styles.down__icon}
              />
            </View>
            {currentIndex && (
              <View style={{ height: 400 }}>
                <StepIndicator
                  customStyles={customStyles}
                  stepCount={5}
                  currentPosition={currentStatus}
                  labels={labels}
                  direction="vertical"
                  renderLabel={renderLabel}
                  renderStepIndicator={() => <View style={{ width: "100%" }} />}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    )
  );
};

LatestOrder.prototype;

LatestOrder.propTypes = {
  order: PropTypes.object,
};

LatestOrder.defaultProps = {
  order: {},
};

export default React.memo(LatestOrder);
