import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import {Theme, Colors} from '../../config';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';

import {ScrollView} from 'react-native-gesture-handler';

import QuantityButton from './QuantityButton/QuantityButton';

import {AppContext} from '../../shared/context/AppContext';

import OrderAdditionals from './OrderAdditionals/OrderAdditionals';
import {getCurrentPrice} from '../../utils/product.utility';
import NotesModal from './NotesModal/NotesModal';
import {RFValue} from 'react-native-responsive-fontsize';
import {isTablet} from '../../utils/device.utility';
import FastImage from 'react-native-fast-image';

const ProductItemDetails = ({navigation, route}) => {
  const [productDetails, setProductDetails] = useState({});
  const [currentPrice, setCurrentPrice] = useState(0);
  const [optionsActive, setOptionsActive] = useState([]);
  const [addonsActive, setAddOnsActive] = useState([]);

  const [loading, setLoading] = useState(true);

  const {item, isSummaryItem, index} = route.params;

  const {
    setIndividualOrder,
    individualOrder,
    addOrderAdditionals,
    addOrderSummary,
  } = useContext(AppContext);

  const uri = productDetails.file;

  useEffect(() => {
    setIndividualOrder([]);
    if (item) {
      setOptionsActive(fetchActiveOptions(item));
      setAddOnsActive(fetchActiveAddons(item));
      setProductDetails(item);
      let tempData = JSON.parse(JSON.stringify(item));
      if (!isSummaryItem) {
        delete tempData.selectedAddOn;
        delete tempData.selectedOption;
      }

      let currPrice = getCurrentPrice(item);
      if (tempData.options) {
        currPrice += parseInt(tempData.options[0].amount);
        tempData.selectedOption = tempData.options[0];
      }
      if (!isSummaryItem) {
        tempData.subtotal = currPrice;
        tempData.quantity = 1;
        tempData.stock -= 1;
      }

      setIndividualOrder(tempData);
      setCurrentPrice(currPrice);
      setLoading(false);
    }
  }, [item]);

  const handleAddIndividualOrder = () => {
    addOrderAdditionals(individualOrder);
    ToastAndroid.show(`Order assigned`, 3000);
    navigation.goBack();
  };

  const handleUpdateSummaryOrder = () => {
    addOrderSummary(individualOrder, index);
    ToastAndroid.show(`Order updated`, 3000);
    navigation.goBack();
  };

  const fetchActiveAddons = data => {
    if (data.addons) {
      if (data.selectedAddOn) {
        return data.addons.filter(item => {
          for (let i = 0; i < data.selectedAddOn.length; i++) {
            if (
              data.selectedAddOn[i].name == item.name &&
              item.is_active == true
            ) {
              item.quantity = data.selectedAddOn[i].quantity;
            }
          }
          return item.is_active == true;
        });
      }
      return data.addons.filter(item => {
        return item.is_active == true;
      });
    }
    return [];
  };

  const fetchActiveOptions = data => {
    if (data.options) {
      return data.options.filter(item => {
        return item.is_active == true;
      });
    }
    return [];
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const backAction = () => {
      goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const [notesVisible, setNotesVisible] = useState(false);

  return (
    <>
      {individualOrder.stock >= 0 && (
        <View
          style={{
            height: isTablet ? 120 : 100,
            backgroundColor: 'white',
            width: '100%',
            position: 'absolute',
            zIndex: 10,
            bottom: 0,
            borderColor: 'whitesmoke',
            borderTopWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
          }}>
          <View style={styles.quantity__wrapper}>
            <QuantityButton
              containerStyle={[Theme.center]}
              product={productDetails}
              quantityDisplay={productDetails.quantity}
            />
          </View>
          <TouchableOpacity
            style={
              optionsActive.length > 0 && !individualOrder.selectedOption
                ? [styles.submit__button, {backgroundColor: Colors.lightGray}]
                : styles.submit__button
            }
            disabled={
              optionsActive.length > 0 && !individualOrder.selectedOption
            }
            onPress={
              isSummaryItem
                ? handleUpdateSummaryOrder
                : handleAddIndividualOrder
            }>
            <Text style={styles.submit__text}>
              {isSummaryItem ? 'Update Order' : 'Add to Cart'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView
        scrollEventThrottle={16}
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <>
            <View style={styles.greenContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={goBack}>
                  <Icon
                    name="close"
                    size={RFValue(30)}
                    color={Colors.white}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.whiteContainer}>
              {loading ? (
                <ActivityIndicator size="large" color="#1080D0" />
              ) : (
                <>
                  <View style={styles.imageContainer}>
                    <FastImage
                      style={styles.img}
                      source={{
                        uri: uri,
                        headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </View>
                  <View style={styles.name__row}>
                    <Text style={styles.productName}>
                      {productDetails.name}
                    </Text>
                    <Text style={styles.price__text}>
                      Php {parseInt(currentPrice).toFixed(2)}
                    </Text>
                  </View>

                  {productDetails.notes != '' && (
                    <View style={styles.info__container}>
                      <TouchableOpacity onPress={() => setNotesVisible(true)}>
                        <Icon2
                          name="question"
                          size={RFValue(28)}
                          color={Colors.white}
                        />
                      </TouchableOpacity>
                    </View>
                  )}

                  <View style={styles.additionals}>
                    {optionsActive.length > 0 && (
                      <View style={{marginBottom: 20}}>
                        <View style={styles.additionals__header}>
                          <Text style={styles.additionals__header_sub}>
                            Options
                          </Text>
                          {/* <Text style={styles.additionals__header_tag}>
                            Select one
                          </Text> */}
                        </View>
                        <View style={styles.additionals__contents}>
                          {optionsActive.map(option => {
                            return (
                              <OrderAdditionals
                                key={option.name}
                                type={'radio'}
                                data={option}
                              />
                            );
                          })}
                        </View>
                      </View>
                    )}

                    {addonsActive.length > 0 && (
                      <>
                        <View style={styles.additionals__header}>
                          <Text style={styles.additionals__header_sub}>
                            Add Ons
                          </Text>
                          {/* <Text style={styles.additionals__header_tag}>
                            Optional
                          </Text> */}
                        </View>
                        <View style={styles.additionals__contents}>
                          {addonsActive.map(addon => {
                            return (
                              <OrderAdditionals
                                key={addon.name}
                                data={addon}
                                type={'checkbox'}
                              />
                            );
                          })}
                        </View>
                      </>
                    )}
                  </View>
                  <View style={styles.subtotal__wrapper}>
                    <Text style={styles.bottom__text}>Subtotal</Text>
                    <Text style={styles.subtotal__total}>
                      ₱{' '}
                      {individualOrder.subtotal
                        ? individualOrder.subtotal
                        : currentPrice}
                    </Text>
                  </View>
                </>
              )}
            </View>
          </>
        </View>
      </ScrollView>

      <NotesModal
        isVisible={notesVisible}
        setIsVisible={setNotesVisible}
        data={productDetails.notes}
      />
    </>
  );
};

export default React.memo(ProductItemDetails);
