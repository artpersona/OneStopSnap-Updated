/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../../config';
import styles from './styles';

function ProductItem({type, product}) {
  const [currentPrice, setCurrentPrice] = useState(null);
  const navigation = useNavigation();
  const d = Dimensions.get('window');
  const uri = product?.file;

  const getCurrentPrice = () => {
    if (product.is_price_margin) {
      if (product.discount_status == 'on') {
        return product.discountSellingPrice;
      } else {
        return product.price;
      }
    } else {
      if (product.discount_status == 'on') {
        return product.discountPrice != ''
          ? product.discountPrice
          : product.storePrice;
      } else {
        return product.storePrice;
      }
    }
  };

  const handleButtonPress = () => {
    navigation.push('ProductItemDetails', {item: product});
  };

  useEffect(() => {
    setCurrentPrice(getCurrentPrice);
  }, [product]);

  if (type === 'single') {
    return (
      <View
        style={
          product?.isSelected
            ? [styles.container, styles.selected__product]
            : [styles.container]
        }>
        <View style={styles.item__info}>
          <View style={styles.info__container}>
            <Text style={styles.name__text}>{product.name}</Text>
            <View style={[styles.price__container, {marginTop: '5%'}]}>
              <Text
                style={
                  product?.storePrice != currentPrice
                    ? [styles.price__text, {color: '#1080D0'}]
                    : styles.price__text
                }>
                Php {currentPrice}
              </Text>
              {product?.storePrice != currentPrice && (
                <Text style={styles.regularPrice__text}>
                  Php {product.storePrice}
                </Text>
              )}
            </View>
          </View>
          <TouchableOpacity onPress={handleButtonPress}>
            <FastImage
              style={styles.image}
              source={{
                uri: uri,
                priority: FastImage.priority.normal,
              }}
              // resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={
            product.stock <= 0
              ? [
                  styles.purchase__container,
                  {backgroundColor: Colors.lightGray},
                ]
              : styles.purchase__container
          }
          onPress={handleButtonPress}
          disabled={product.stock <= 0}>
          <Icon name="plus" size={RFValue(23)} color={'white'} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={
          product?.isSelected
            ? [
                styles.container,
                {minHeight: d.height / 2.8},
                styles.selected__product,
              ]
            : [styles.container, {minHeight: d.height / 2.8}]
        }>
        <View style={styles.promoBanner__double}>
          <Text style={styles.promoBanner__double_text}>Promo</Text>
        </View>
        <View
          style={[
            styles.item__info,
            {
              flexDirection: 'column',
              minHeight: d.height / 3.95,
            },
          ]}>
          <TouchableOpacity onPress={handleButtonPress}>
            <FastImage
              style={styles.image}
              source={{
                uri: uri,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>

          <View
            style={[
              styles.info__container,
              {
                width: '80%',
                alignSelf: 'center',
                marginLeft: 0,
                marginVertical: d.height / 35,
              },
            ]}>
            <Text
              style={[
                styles.name__text,
                {
                  fontSize: RFValue(12),
                  textAlign: 'center',
                  width: '100%',
                },
              ]}
              numberOfLines={3}>
              {product.name}
            </Text>
          </View>
        </View>

        <View style={[styles.purchase__container, {marginTop: '5%'}]}>
          <View style={styles.price__container}>
            <Text
              style={
                product?.storePrice == currentPrice
                  ? [
                      styles.price__text,
                      {
                        fontSize: RFValue(13),
                        bottom: '-13%',
                        position: 'absolute',
                      },
                    ]
                  : [
                      styles.price__text,
                      {
                        fontSize: RFValue(15),
                        position: 'absolute',
                        left: '80%',
                        top: -20,
                        color: '#1080D0',
                      },
                    ]
              }>
              ₱ {currentPrice}
            </Text>
          </View>
          {product?.storePrice == currentPrice ? (
            <Text style={[styles.stocks__text, {fontSize: RFValue(12)}]}>
              {product.stock} left
            </Text>
          ) : (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.regularPrice__text}>
                ₱ {product.storePrice}
              </Text>
              <Text style={[styles.stocks__text, {fontSize: RFValue(12)}]}>
                {product.stock} left
              </Text>
            </View>
          )}

          {product.stock <= 0 ? (
            <Button
              title="SOLD OUT"
              containerStyle={[
                styles.buttonContainer,
                {marginBottom: '5%', marginTop: '5%'},
              ]}
              disabled
              disabledStyle={styles.soldOutContainer}
              buttonStyle={styles.purchaseContainer}
              disabledTitleStyle={styles.button__text}
            />
          ) : (
            <Button
              title="PURCHASE"
              buttonStyle={styles.purchaseContainer}
              containerStyle={[
                styles.buttonContainer,
                {marginBottom: '5%', marginTop: '5%'},
              ]}
              titleStyle={styles.button__text}
              onPress={handleButtonPress}
            />
          )}
        </View>
      </View>
    );
  }
}

export default React.memo(ProductItem);
