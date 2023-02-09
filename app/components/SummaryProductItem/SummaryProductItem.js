/* eslint-disable react-native/no-inline-styles */
import React, {useState, useMemo, useContext} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from './styles';
import {AppContext} from '../../shared/context/AppContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/AntDesign';

import ImageViewer from 'react-native-image-zoom-viewer';
import AwesomeAlert from 'react-native-awesome-alerts';
import {RFValue} from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

const SummaryProductItem = ({
  product,
  index,
  isCartOrder,
  setDisplayOrders,
  displayOrders,

  displayIndex,
  title,
}) => {
  const preview = {
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAMACAIAAAA12IJaAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAPf0lEQVR4nO3XIQEAIADAMKAU/WuhaAHiW4Lbz3P2AAAAGtbvAAAA4B0DAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAgxAAAAECIAQAAgBADAAAAIQYAAABCDAAAAIQYAAAACDEAAAAQYgAAACDEAAAAQIgBAACAEAMAAAAhBgAAAEIMAAAAhBgAAAAIMQAAABBiAAAAIMQAAABAiAEAAIAQAwAAACEGAAAAQgwAAACEGAAAAAgxAAAAEGIAAAAg5AJqwwgrud2jWgAAAABJRU5ErkJggg==',
  };
  const uri = product.file;

  const optionsActive = product.selectedOption ? 1 : 0;
  const addonsActive = product.selectedAddOn ? 1 : 0;
  const optionalActive = optionsActive != 0 || addonsActive != 0;
  const navigation = useNavigation();
  const [confirmAlert, setConfirmAlert] = useState(false);
  const [subtotal, setSubtotal] = useState(product.subtotal);

  const [showImage, setShowImage] = useState(false);
  const images = [
    {
      url: product.uri,
    },
  ];

  const {
    setTempTotalGoods,
    tempTotalGoods,
    placeholderOrders,
    setPlaceHolderOrders,
  } = useContext(AppContext);

  const removeOrder = () => {
    if (!product.image) {
      let computedTotalGoods = tempTotalGoods - subtotal;
      setTempTotalGoods(computedTotalGoods);
    }

    let displayList = [...displayOrders];
    displayList.map(item => {
      if (item.title == title) {
        item.data.splice(displayIndex, 1);
      }
      return item;
    });

    let orderList = [...placeholderOrders];
    orderList.splice(index, 1);
    setDisplayOrders(displayList);
    setPlaceHolderOrders(orderList);
  };
  const handleRemoveOrder = () => {
    setConfirmAlert(false);
    removeOrder();
  };

  const moveToProductDetails = () => {
    navigation.navigate('ProductItemDetails', {
      item: product,
      isSummaryItem: true,
      index,
    });
  };

  return useMemo(() => {
    if (!product.image) {
      return (
        <>
          <TouchableOpacity
            style={styles.container}
            onPress={moveToProductDetails}>
            {!isCartOrder && (
              <TouchableOpacity
                style={styles.product__remove}
                onPress={() => setConfirmAlert(true)}>
                <View style={{padding: 5}}>
                  <Icon name="close" size={RFValue(18)} color="black" />
                </View>
              </TouchableOpacity>
            )}
            <View style={styles.wrapper}>
              <View
                style={{
                  width: '65%',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.quantityText}>
                      {product && product.quantity}x
                    </Text>
                    <Text style={styles.displayNameText}>
                      {product && product.name}
                    </Text>
                  </View>
                  <Text style={styles.subTotalPrice}>
                    Php {product.subtotal}
                  </Text>
                </View>

                {optionalActive && (
                  <View style={styles.optional__container}>
                    {optionalActive != 0 && (
                      <View style={styles.options__wrapper}>
                        <Text style={styles.section__header}>Options</Text>

                        <View style={styles.section__content}>
                          <Text style={styles.content__name}>
                            {product.selectedOption.name}
                          </Text>
                          <Text style={styles.content__price}>
                            + ₱{product.selectedOption.amount}
                          </Text>
                        </View>
                      </View>
                    )}
                    {addonsActive != 0 && (
                      <View style={styles.addons__wrapper}>
                        <Text style={styles.section__header}>Add-ons</Text>
                        {product.selectedAddOn.map((item, index) => {
                          return (
                            <View
                              style={styles.section__content}
                              key={index.toString()}>
                              <Text style={styles.content__name}>
                                {item.name}
                              </Text>
                              <Text style={styles.content__quantity}>
                                x{item.quantity}
                              </Text>
                              <Text style={styles.content__price}>
                                + ₱{item.quantity * item.amount}
                              </Text>
                            </View>
                          );
                        })}
                      </View>
                    )}
                  </View>
                )}

                {/* <View
                  style={
                    !isCartOrder
                      ? styles.bottom__container
                      : [
                          styles.bottom__container,
                          { justifyContent: "flex-end" },
                        ]
                  }
                >
                  {!isCartOrder && (
                    <QuantityButton
                      containerStyle={styles.onContainer}
                      product={product}
                      quantityDisplay={product.quantity}
                      index={index}
                      product={product}
                      productStocks={productStocks}
                      removeOrder={removeOrder}
                      subtotal={subtotal}
                      setSubtotal={setSubtotal}
                      placeholderOrders={placeholderOrders}
                      setPlaceHolderOrders={setPlaceHolderOrders}
                      tempTotalGoods={tempTotalGoods}
                      setTempTotalGoods={setTempTotalGoods}
                      key={index}
                      setProductStocks={setProductStocks}
                    />
                  )}

                </View> */}
              </View>
              {!product.openStore && (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    marginTop: '5%',
                    marginBottom: '2%',
                  }}>
                  <EvilIcons
                    name="exclamationcircle"
                    size={RFValue(17)}
                    color="#ff4d4d"
                    style={{marginRight: '5%', opacity: 0.7}}
                  />
                  <Text style={styles.warning__text}>
                    This shop is not available for delivery at the moment. Order
                    will be delivered on the next store hours
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          <AwesomeAlert
            show={confirmAlert}
            showProgress={false}
            title="Remove Order"
            message="Order will be removed from your list"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Confirm Removal"
            confirmButtonColor="#ff4d4d"
            onCancelPressed={() => {
              setConfirmAlert(false);
            }}
            onConfirmPressed={handleRemoveOrder}
          />
        </>
      );
    } else {
      return (
        <>
          <View
            style={
              product.openStore
                ? [styles.container, {backgroundColor: '#dff7ef'}]
                : [styles.container, {backgroundColor: '#ffe8db'}]
            }>
            <View style={styles.photo__container}>
              <TouchableOpacity
                style={styles.image__container}
                onPress={() => setShowImage(true)}>
                <FastImage
                  style={{width: '100%', height: '100%'}}
                  source={{
                    uri: product.uri,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>

              <Modal
                visible={showImage}
                transparent={true}
                onRequestClose={() => setShowImage(false)}>
                <ImageViewer imageUrls={images} />
              </Modal>
            </View>
            <View style={styles.photo__orderWrapper}>
              <TouchableOpacity
                style={styles.image__remove}
                onPress={() => setConfirmAlert(true)}>
                <Icon name="close" size={RFValue(22)} color="#ff4d4d" />
              </TouchableOpacity>
              <Text style={styles.photo__orderText}>Photographic Order</Text>
            </View>
          </View>
          <AwesomeAlert
            show={confirmAlert}
            showProgress={false}
            title="Remove Order"
            message="Order will be removed from your list"
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Confirm Removal"
            confirmButtonColor="#ff4d4d"
            onCancelPressed={() => {
              setConfirmAlert(false);
            }}
            onConfirmPressed={handleRemoveOrder}
          />
        </>
      );
    }
  }, [
    product,
    confirmAlert,
    subtotal,
    tempTotalGoods,
    placeholderOrders,
    images,
  ]);
};

export default React.memo(SummaryProductItem);
