/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  SectionList,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {Theme, Colors} from '../../config';
import {
  CustomHeader,
  SummaryProductItem,
  VirtualizedView,
  Spinner,
} from '../../components';
import {Button} from 'react-native-elements';

import styles from './styles';
import {AppContext} from '../../shared/context/AppContext';
import {AuthContext} from '../../shared/context/AuthContext';
import {ConfigContext} from '../../shared/context/ConfigContext';
import ModalView from '../../components/ModalView/ModalView';
import ConfirmationModal from './ConfirmationModals';
import Icon from 'react-native-vector-icons/AntDesign';

import moment from 'moment';
import {
  getOrderStoreIds,
  getTotalByStores,
  groupProductsMini,
} from '../../utils/product.utility';

import {isTablet} from '../../utils/device.utility';
import {ModalLoading} from '../../components/ModalView/ModalView';
import {Storage} from '../../utils';

const TotalComponent = ({navigation, openStoreItems, displayOrders}) => {
  const {
    orders,
    setOrders,
    totalShipping,
    totalGoods,
    tempTotalGoods,
    setTempTotalGoods,
    placeholderOrders,
    allRestaurants,
    copyQuantityFromOrdersToProducts,
    voucherTotal,
  } = useContext(AppContext);

  useEffect(() => {
    setTempTotalGoods(totalGoods);
  }, [totalGoods]);

  const {loggedUser} = useContext(AuthContext);

  const [minPriceModal, setMinPriceModal] = useState(false);
  const [minPriceModalData, setMinPriceModalData] = useState([]);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const confirmOrder = () => {
    const status = checkPrice();
    if (status == true) {
      return setMinPriceModal(true);
    }

    if (!loggedUser) return setLoginModalVisible(true);
    let orderList = [...placeholderOrders];
    console.log('orderlist is: ', orderList[0]);
    orderList = orderList.map(item => {
      return item;
    });
    setOrders(orderList);
    Storage.save('orders', orderList);
    copyQuantityFromOrdersToProducts();
    return navigation.navigate('ConfirmOrder', {
      openStoreData: openStoreItems,
      ordersWithSection: displayOrders,
    });
  };

  const checkPrice = () => {
    const belowMinimum = [];
    const totalPerStore = getTotalByStores(placeholderOrders);
    const storeIds = getOrderStoreIds(placeholderOrders);
    let modalValue = false;
    const tempResto = allRestaurants.filter(item => storeIds.includes(item.id));

    tempResto.map(item => {
      totalPerStore.map(data => {
        if (
          data.store_id == item.id &&
          parseInt(data.total) < parseInt(item.min_order)
        ) {
          modalValue = true;
          belowMinimum.push({
            id: item.id,
            name: item.name,
            amount: item.min_order,
          });
        }
      });
    });

    setMinPriceModalData(belowMinimum);
    return modalValue;
  };

  const minPriceModalPress = () => {
    const storeIDs = minPriceModalData.map(item => {
      return item.id;
    });
    navigation.reset({
      index: 0,
      routes: [{name: 'RestaurantListScreen', params: {data: storeIDs}}],
    });
    return navigation.navigate('RestaurantListScreen', {
      data: storeIDs,
    });
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        position: 'absolute',
        zIndex: 10000,
        bottom: 0,
        minHeight: isTablet ? 200 : 140,
      }}>
      <View style={[Theme.rowSpaceBetween, {paddingTop: 20}]}>
        <Text style={Theme.listTitle}>TOTAL</Text>
        <Text style={Theme.listTitle}>
          Php{' '}
          {(
            parseInt(tempTotalGoods) +
            (totalShipping && totalShipping.cummulativeTotal
              ? parseInt(totalShipping.cummulativeTotal)
              : 0) -
            voucherTotal
          ).toFixed(2)}
        </Text>
      </View>

      <Button
        title="Checkout"
        buttonStyle={styles.buttonPrimary}
        containerStyle={styles.confirmOrderContainer}
        titleStyle={Theme.center}
        onPress={confirmOrder}
        disabled={orders.length < 1 || placeholderOrders?.length < 1}
      />

      <ModalView
        visible={loginModalVisible}
        description={'You need to login in order to proceed with your order!'}
        onClose={() => {}}
        ok_text="Confirm"
        onPress1={() => {
          setLoginModalVisible(false);
          navigation.navigate('Signup');
        }}
        okTextStyle={{color: Colors.primary}}
        width="85%"
        animationIn="fadeIn"
        animationOut="fadeOut"
      />
      <ConfirmationModal
        isVisible={minPriceModal}
        setIsVisible={setMinPriceModal}
        onPress={minPriceModalPress}
        data={minPriceModalData}
      />
    </View>
  );
};

function OrderSummaryScreen({navigation}) {
  const {
    orders,
    cartOrders,
    setCartOrders,
    setOrders,
    allRestaurants,
    placeholderOrders,
    setPlaceHolderOrders,
    copyQuantityFromOrdersToProducts,
    setProductStocks,
    tempTotalGoods,
    totalGoods,
  } = useContext(AppContext);
  const {saveCustomerOrder, loggedUser} = useContext(AuthContext);

  const {currentLocation} = useContext(ConfigContext);

  const [modalState, setModalState] = useState({
    message: '',
    logoName: '',
    showModal: false,
  });

  const [loading, setLoading] = useState(true);

  const [displayOrders, setDisplayOrders] = useState(null);
  const [openStoreItems, setOpenStoreItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentTime = moment().format('h:mma');
  const separateOrders = () => {
    const storeIds = getOrderStoreIds(orders);

    const openStores = [];

    allRestaurants.map(item => {
      const storeClosingTime = moment(item.store_shift_end).format('h:mma');

      const startTime = moment(currentTime, 'h:mma');
      const closeTime = moment(storeClosingTime, 'h:mma');
      if (
        storeIds.includes(item.id) &&
        item.storeOpen == 'open' &&
        startTime.isBefore(closeTime)
      ) {
        openStores.push(item.id);
      }
    });

    let openOrders = [];

    let tempoOrders =
      cartOrders.length > orders.length ? [...cartOrders] : [...orders];
    tempoOrders = tempoOrders.map((item, index) => {
      const key = item.key;
      item.index = index;
      item.item_key = key;
      item.key = index;
      if (openStores.includes(item.store_id)) {
        item.index = index;
        item.openStore = true;
        openOrders.push(item);
      } else {
        item.openStore = false;
      }
      return item;
    });

    generateProductStocks(tempoOrders);

    setOpenStoreItems(openOrders);
    tempoOrders = groupProductsMini(tempoOrders, 'store_id');
    setDisplayOrders(tempoOrders);
    setLoading(false);
  };

  const generateProductStocks = data => {
    let productStocks = {};
    data.map(item => {
      if (productStocks[`${item.item_key}`] == undefined) {
        productStocks[`${item.item_key}`] = item.stock;
      } else {
        if (item.stock < productStocks[`${item.item_key}`])
          productStocks[`${item.item_key}`] = item.stock;
      }
    });
    setProductStocks(productStocks);
  };

  useEffect(() => {
    setPlaceHolderOrders(orders);

    if (displayOrders == null) {
      if (
        cartOrders.length > 0 &&
        cartOrders[0].location_key == currentLocation.key &&
        orders.length == 0
      ) {
        setOrders(cartOrders);
      }
      separateOrders();
    } else {
      const tempOrders = groupProductsMini(orders, 'store_id');
      setDisplayOrders(tempOrders);
    }
  }, [orders]);

  useEffect(() => {
    const backAction = () => {
      handleBackPress();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [placeholderOrders]);

  const handleBackPress = () => {
    if (placeholderOrders) {
      if (
        tempTotalGoods !== totalGoods ||
        placeholderOrders.length != orders.length
      ) {
        setIsLoading(true);

        let orderList = [...placeholderOrders];
        orderList = orderList.map(item => {
          item.key = item.item_key;
          return item;
        });
        setOrders(orderList);
        setCartOrders(orderList);
        setPlaceHolderOrders(orderList);
        if (loggedUser) saveCustomerOrder(orderList);
        Storage.save('orders', orderList);
        copyQuantityFromOrdersToProducts();

        setTimeout(function () {
          setIsLoading(false);
          clearTimeout();
          navigation.goBack();
        }, 1500);
      } else {
        navigation.goBack();
      }
    } else {
      navigation.goBack();
    }
  };

  const renderItem = ({item, index, section: {title}}) => {
    return (
      <SummaryProductItem
        product={item}
        key={item?.index?.toString()}
        index={item.index}
        displayIndex={index}
        isCartOrder={cartOrders.length > orders.length}
        setDisplayOrders={setDisplayOrders}
        displayOrders={displayOrders}
        placeholderOrders={placeholderOrders}
        setPlaceHolderOrders={setPlaceHolderOrders}
        title={title}
      />
    );
  };

  const renderSectionHeader = ({section: {title, data}}) => {
    const displayTitle = allRestaurants.find(({id}) => id == title);
    if (data.length > 0) {
      return (
        <TouchableOpacity
          style={styles.header__container}
          onPress={() => navigation.navigate('RestaurantScreen', displayTitle)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '3%',
            }}>
            <Text style={styles.section__header}>{displayTitle?.name}</Text>
            <Icon
              name="right"
              size={14}
              color="black"
              style={{marginLeft: 10}}
            />
          </View>
        </TouchableOpacity>
      );
    } else {
      return <></>;
    }
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ModalView
        visible={modalState.showModal}
        description={modalState.message}
        onPress1={() => {
          setModalState({showModal: false});
        }}
        width="65%"
        title={modalState.title}
        animation="bounceIn"
        logoName={modalState.logoName}
        logoColor="#ffdd00"
      />
      <TotalComponent
        navigation={navigation}
        openStoreItems={openStoreItems}
        displayOrders={displayOrders}
      />
      <VirtualizedView containerStyle={{backgroundColor: 'white'}}>
        <View style={[Theme.screenContainer, {marginBottom: 270}]}>
          <CustomHeader
            showBackButton
            backPress={setIsLoading}
            setCartOrders={setCartOrders}
            setPlaceHolderOrders={setPlaceHolderOrders}
          />

          <Text style={styles.summary__header}>Shopping Cart</Text>

          {loading || !displayOrders ? (
            <Spinner />
          ) : (
            <SectionList
              sections={displayOrders}
              // keyExtractor={keyExtractor}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
            />
          )}
        </View>
      </VirtualizedView>
      <ModalLoading visible={isLoading} loading message={'Saving Changes'} />
    </View>
  );
}

export default OrderSummaryScreen;
