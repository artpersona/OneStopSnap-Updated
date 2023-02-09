/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation, DrawerActions} from '@react-navigation/native';
import {ConfigContext} from '../../shared/context/ConfigContext';
import {AppContext} from '../../shared/context/AppContext';
import {AuthContext} from '../../shared/context/AuthContext';
import LocationPickerModal from '../../components/LocationPickerModal/LocationPickerModal';
import {RFValue} from 'react-native-responsive-fontsize';
import {Storage} from '../../utils';
import styles from './styles';
import {Colors, Theme} from '../../config';
import {TextInput} from 'react-native-gesture-handler';

function CustomHeader({
  showBackButton,
  isAboutUs,
  profilePress,
  showSearchButton,
  primaryColor,
  storeName,
  searchValue,
  setSearchValue,
  handleSearchSubmit,
  setCartOrders,
  setPlaceHolderOrders,
  showFilter,
  backPress,
}) {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {saveCustomerOrder, loggedUser} = useContext(AuthContext);
  const {currentLocation, currentMiniCategory} = useContext(ConfigContext);
  const {
    placeholderOrders,
    tempTotalGoods,
    totalGoods,
    setOrders,
    copyQuantityFromOrdersToProducts,
    orders,
  } = useContext(AppContext);

  const navColor = primaryColor ? 'white' : 'black';
  const handleBackPress = () => {
    if (placeholderOrders) {
      console.log(placeholderOrders.length, ' - ', orders.length);
      if (
        tempTotalGoods !== totalGoods ||
        placeholderOrders.length != orders.length
      ) {
        backPress(true);

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
          backPress(false);
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
  const navigateToFilterScreen = () => {
    navigation.navigate('CategoryFilterScreen');
  };

  return (
    <View
      style={
        isAboutUs
          ? styles.noBackground
          : primaryColor
          ? [styles.container, {backgroundColor: Colors.primary}]
          : [styles.container, {backgroundColor: 'white'}]
      }>
      <View style={styles.wrapper}>
        <View style={styles.action__wrapper}>
          {showBackButton && (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={profilePress ? profilePress : handleBackPress}>
              <View style={styles.clickable__area}>
                <Icon3
                  name="chevron-thin-left"
                  size={RFValue(24)}
                  color={navColor}
                />
              </View>
            </TouchableOpacity>
          )}
          {!showBackButton && (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                console.log('clicked!');
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
              style={{padding: 5}}>
              <View style={styles.clickable__area}>
                <Icon name="navicon" size={RFValue(26)} color={navColor} />
              </View>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.store__name}>{storeName}</Text>
        {showSearchButton && (
          <View
            style={
              showFilter
                ? [styles.searchContainer, {width: '75%'}]
                : [styles.searchContainer, {width: '85%'}]
            }>
            <View
              style={[
                Theme.row,
                {alignItems: 'center', justifyContent: 'space-between'},
              ]}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="What are you looking for?"
                onChangeText={text => setSearchValue(text)}
                value={searchValue}
                style={styles.inputContainer}
                placeholderTextColor={Colors.subText}
                onSubmitEditing={handleSearchSubmit}
              />

              {!searchValue ? (
                <Icon
                  name="search"
                  size={RFValue(18)}
                  color="black"
                  style={Theme.searchIcon}
                />
              ) : (
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => setSearchValue('')}>
                  <Icon
                    name="close"
                    size={RFValue(18)}
                    color="black"
                    style={Theme.searchIcon}
                  />
                </TouchableHighlight>
              )}
            </View>
          </View>
        )}

        {showFilter && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={navigateToFilterScreen}
            style={styles.clickable__area}>
            <View>
              <MaterialCommunityIcons
                name="tune"
                size={RFValue(26)}
                color={navColor}
              />
              {currentMiniCategory.length > 0 && (
                <View style={styles.filter__badge}>
                  <Text style={styles.badge__text}>
                    {currentMiniCategory.length}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>

      <LocationPickerModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        headerText={currentLocation == null ? 'CATEGORY' : 'DELIVER TO'}
        type={'location'}
        postEventFunction={() => setIsModalVisible(false)}
      />
    </View>
  );
}

CustomHeader.defaultProps = {
  showBackButton: false,
  isAboutUs: false,
};
export default CustomHeader;
