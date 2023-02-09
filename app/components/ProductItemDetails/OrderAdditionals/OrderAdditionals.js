/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {AppContext} from '../../../shared/context/AppContext';
import {Theme, Colors} from '../../../config';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';

function OrderAdditionals({type, data}) {
  const {individualOrder, setIndividualOrder} = useContext(AppContext);

  const [toggleCheckBox, setToggleCheckBox] = useState(
    data.quantity ? true : false,
  );

  const [addOnAmount, setAddOnAmount] = useState(
    data.quantity ? data.quantity : 0,
  );

  const handleSelectOption = () => {
    let tempData = {...individualOrder};
    if (tempData.selectedOption) {
      tempData.subtotal -=
        parseInt(tempData.selectedOption.amount) * tempData.quantity;
      delete tempData.selectedOption;
    }
    tempData.selectedOption = data;
    tempData.subtotal += parseInt(data.amount) * tempData.quantity;
    setIndividualOrder(tempData);
  };

  const incrementAddOn = () => {
    setAddOnAmount(addOnAmount + 1);
    let currQuantity = addOnAmount + 1;
    let addOn = {
      amount: data.amount,
      is_active: data.is_active,
      name: data.name,
      quantity: currQuantity,
    };
    let tempData = {...individualOrder};
    // Code for changing total value
    let tempTotal = parseInt(individualOrder.subtotal);
    tempTotal += parseInt(data.amount) * individualOrder.quantity;
    tempData.subtotal = tempTotal;

    if (individualOrder.selectedAddOn) {
      if (individualOrder.selectedAddOn.some(item => item.name == data.name)) {
        tempData.selectedAddOn = tempData.selectedAddOn.map(item => {
          if (item.name == data.name) {
            item.quantity = currQuantity;
          }
          return item;
        });
        setIndividualOrder(tempData);
      } else {
        tempData.selectedAddOn.push(addOn);
        setIndividualOrder(tempData);
      }
    } else {
      tempData.selectedAddOn = [addOn];
      setIndividualOrder(tempData);
    }
  };

  const decrementAddOn = () => {
    if (addOnAmount != 1) {
      let currQuantity = addOnAmount - 1;
      setAddOnAmount(addOnAmount - 1);
      let tempData = {...individualOrder};

      // Code for changing the total value
      let tempTotal = parseInt(individualOrder.subtotal);
      tempTotal -= parseInt(data.amount);
      tempData.subtotal = tempTotal;

      tempData.selectedAddOn = tempData.selectedAddOn.map(item => {
        if (item.name === data.name) {
          item.quantity = currQuantity;
        }
        return item;
      });
      setIndividualOrder(tempData);
    } else {
      setToggleCheckBox(false);
      removeAddOn();
    }
  };

  const removeAddOn = () => {
    // modifyTotal("decrement", addOnAmount * data.amount);
    let tempData = {...individualOrder};
    let tempTotal = parseInt(individualOrder.subtotal);
    tempTotal -=
      parseInt(data.amount) * parseInt(addOnAmount) * individualOrder.quantity;
    tempData.subtotal = tempTotal;
    tempData.selectedAddOn = tempData.selectedAddOn.filter(
      item => item.name != data.name,
    );
    setIndividualOrder(tempData);
    setAddOnAmount(0);
  };

  const RadioButton = () => {
    return (
      <View style={styles.radio__container}>
        <TouchableOpacity
          style={styles.radioCircle}
          onPress={handleSelectOption}>
          {individualOrder.selectedOption.name == data.name && (
            <View style={styles.selectedRb} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {type == 'radio' ? (
        <TouchableOpacity
          style={[styles.wrapper, styles.wrapper__full]}
          onPress={handleSelectOption}>
          <View style={[styles.group, {left: 8}]}>
            <RadioButton />
            <Text style={styles.text}> {data.name}</Text>
          </View>
          <Text style={styles.price}>+ P{data.amount}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.quantity__wrapper}>
          <TouchableOpacity
            style={[styles.wrapper, styles.wrapper__full]}
            onPress={() => {
              !toggleCheckBox ? incrementAddOn() : removeAddOn();
              setToggleCheckBox(!toggleCheckBox);
            }}>
            <View style={styles.group}>
              <BouncyCheckbox
                isChecked={toggleCheckBox}
                onPress={() => {
                  !toggleCheckBox ? incrementAddOn() : removeAddOn();
                  setToggleCheckBox(!toggleCheckBox);
                }}
                disableBuiltInState
                iconStyle={{borderRadius: 0, borderColor: 'black'}}
                size={RFValue(15)}
                unfillColor="#FFFFFF"
                fillColor={Colors.primary}
              />
              <Text style={styles.text}>{data.name}</Text>
            </View>
            <View style={styles.group}>
              <Text style={styles.quantity__indicator}>{addOnAmount}</Text>
              <Text style={[styles.price, {marginLeft: 10}]}>
                + P{data.amount}
              </Text>
            </View>
          </TouchableOpacity>
          {toggleCheckBox && data?.is_multiple && (
            <View style={styles.quantityContainer}>
              <Button
                onPress={() => decrementAddOn()}
                style={[Theme.isQuarter, styles.minusIconContainer]}>
                <Icon name="minus" size={18} color="white" />
              </Button>
              <View style={[Theme.isHalf, styles.quantityValue]}>
                <Text>{addOnAmount}</Text>
              </View>
              <Button
                onPress={() => incrementAddOn()}
                style={[Theme.isQuarter, styles.plusIconContainer]}>
                <Icon name="plus" size={18} color="white" />
              </Button>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

export default React.memo(OrderAdditionals);
