import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import styles from './styles';
import {Theme} from '../../../config';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppContext} from '../../../shared/context/AppContext';
import {getCurrentPrice} from '../../../utils/product.utility';
import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

function QuantityButton({containerStyle}) {
  const {individualOrder, setIndividualOrder} = useContext(AppContext);

  const [newStock, setNewStock] = useState(0);

  useEffect(() => {
    checkSoldOut(individualOrder.name);
  }, [newStock]);

  const checkSoldOut = name => {
    if (parseInt(newStock, 10) < 0) {
      Alert.alert(`${name} have been sold out`);
      return;
    }
  };

  const currentPrice = getCurrentPrice(individualOrder);

  const fetchTotalAddOns = addOns => {
    let total = 0;
    if (addOns) {
      addOns.map(item => {
        total += item.amount * item.quantity;
      });
    }

    return total;
  };
  const increment = () => {
    const optionPrice = individualOrder.selectedOption
      ? parseInt(individualOrder.selectedOption.amount)
      : 0;
    const addOnPrice = fetchTotalAddOns(individualOrder.selectedAddOn);

    let tempData = {...individualOrder};
    if (tempData.stock != 0) {
      if (tempData.quantity < tempData.limit) {
        tempData.quantity += 1;
        tempData.stock -= 1;
        tempData.subtotal += currentPrice + optionPrice + addOnPrice;
        setIndividualOrder(tempData);
      }
    } else {
      Alert.alert(`${tempData.name} have been sold out`);
    }
  };

  const decrement = () => {
    const optionPrice = individualOrder.selectedOption
      ? parseInt(individualOrder.selectedOption.amount)
      : 0;
    const addOnPrice = fetchTotalAddOns(individualOrder.selectedAddOn);
    let tempData = {...individualOrder};
    if (tempData.quantity != 1) {
      tempData.quantity -= 1;
      tempData.stock += 1;
      tempData.subtotal -= currentPrice + optionPrice + addOnPrice;
      setIndividualOrder(tempData);
    }
  };

  return (
    <View style={containerStyle}>
      <View style={[styles.quantityContainer]}>
        <TouchableOpacity
          onPress={() => decrement()}
          style={[Theme.isQuarter, styles.minusIconContainer]}>
          <Icon name="minus" size={RFValue(18)} color="white" />
        </TouchableOpacity>
        <View style={[Theme.isHalf, styles.quantityValue]}>
          <Text>{individualOrder.quantity}</Text>
        </View>
        <TouchableOpacity
          onPress={() => increment()}
          style={[Theme.isQuarter, styles.plusIconContainer]}>
          <Icon name="plus" size={RFValue(18)} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default QuantityButton;
