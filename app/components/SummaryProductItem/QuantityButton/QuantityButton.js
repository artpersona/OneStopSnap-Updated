import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Theme} from '../../../config';
import Icon from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';
import ModalView from '../../ModalView/ModalView';
import styles from './styles';
import {
  getTotalAddonsAndOptions,
  getCurrentPrice,
} from '../../../utils/product.utility';

function QuantityButton({
  containerStyle,
  product,
  productStocks,
  removeOrder,
  subtotal,
  setSubtotal,
  placeholderOrders,
  setPlaceHolderOrders,
  tempTotalGoods,
  setTempTotalGoods,
  index,
  setProductStocks,
}) {
  const [quantityCounter, setQuantityCounter] = useState(product.quantity);
  const [soldOutModal, setSoldOutModal] = useState(false);
  const increment = () => {
    if (checkSoldOut()) {
      let tempOrders = [...placeholderOrders];
      let itemQuantity = quantityCounter + 1;

      tempOrders[index].quantity = itemQuantity;

      setQuantityCounter(itemQuantity);
      let prodStocks = {...productStocks};
      prodStocks[product.item_key] = prodStocks[product.item_key] - 1;

      setProductStocks(prodStocks);

      computeSubtotal('increment');
    } else {
      setSoldOutModal(true);
    }
  };
  const decrement = () => {
    let itemQuantity = quantityCounter - 1;
    if (quantityCounter == 1) {
      let computedTotalGoods = tempTotalGoods - subtotal;
      setTempTotalGoods(computedTotalGoods);
      removeOrder();
    } else {
      let prodStocks = {...productStocks};
      prodStocks[product.item_key] = prodStocks[product.item_key] + 1;

      setProductStocks(prodStocks);
      computeSubtotal('decrement');
      setQuantityCounter(itemQuantity);
    }
  };

  const checkSoldOut = () => {
    return productStocks[`${product.item_key}`] > 0;
  };

  const computeSubtotal = operation => {
    const addOnsAndOptions = getTotalAddonsAndOptions(product);
    let computedTotal = 0;
    let computedTotalGoods = tempTotalGoods;
    const productPrice =
      getCurrentPrice(product) +
      addOnsAndOptions.totalOptions +
      addOnsAndOptions.totalAddOns;
    if (operation === 'increment') {
      computedTotal = parseInt(subtotal) + productPrice;
      computedTotalGoods += productPrice;
    } else {
      computedTotal = parseInt(subtotal) - productPrice;
      computedTotalGoods -= productPrice;
    }

    setSubtotal(computedTotal);
    setTempTotalGoods(computedTotalGoods);
  };

  useEffect(() => {
    let tempOrders = [...placeholderOrders];
    if (tempOrders[index] != undefined) {
      tempOrders[index].quantity = quantityCounter;
      tempOrders[index].subtotal = subtotal;
      tempOrders[index].stock = productStocks[`${product.item_key}`];
      setPlaceHolderOrders(tempOrders);
    }
  }, [quantityCounter]);

  return (
    <View style={containerStyle}>
      <View style={[styles.quantityContainer]}>
        <TouchableOpacity onPress={decrement} style={styles.minusIconContainer}>
          <Icon name="minus" size={RFValue(18)} color="white" />
        </TouchableOpacity>
        <View style={[Theme.isHalf, styles.quantityValue]}>
          <Text>{quantityCounter}</Text>
        </View>
        <TouchableOpacity onPress={increment} style={styles.plusIconContainer}>
          <Icon name="plus" size={RFValue(17)} color="white" />
        </TouchableOpacity>
      </View>
      <ModalView
        visible={soldOutModal}
        description={'Item sold out!'}
        onClose={() => {
          setSoldOutModal(false);
        }}
        ok_text="Confirm"
        onPress1={() => {
          setSoldOutModal(false);
        }}
        okTextStyle={{color: '##FEC636'}}
        width="85%"
        animationIn="fadeIn"
        animationOut="fadeOut"
        logoName="warning"
      />
    </View>
  );
}

export default React.memo(QuantityButton);
