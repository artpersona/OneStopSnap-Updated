/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import ModalView from '../../../components/ModalView/ModalView';
import {RFValue} from 'react-native-responsive-fontsize';
import {isTablet, deviceWidth} from '../../../utils/device.utility';
import {productPreview} from '../../../utils/utils/preview.util';
import {Button} from 'react-native-elements';

import {Colors} from '../../../config';
const d = Dimensions.get('window');

const Product = ({product}) => {
  const navigation = useNavigation();
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const preview = {
    uri: product?.preview ? product.preview : productPreview,
  };
  const uri = product?.file;
  const [currentPrice, setCurrentPrice] = useState(null);
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

  const redirect = () => {
    navigation.navigate('ProductItemDetails', {item: product});
    // alert('clicked!');
  };

  useEffect(() => {
    setCurrentPrice(getCurrentPrice);
  }, [product]);

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={redirect}>
        {product?.storePrice != currentPrice && (
          <View style={styles.promoBanner__double}>
            <Text style={styles.promoBanner__double_text}>
              {(
                ((parseInt(product.storePrice) - parseInt(currentPrice)) /
                  parseInt(product.storePrice)) *
                100
              ).toFixed(0)}
              % off
            </Text>
          </View>
        )}

        <View
          style={[
            styles.item__info,
            {
              flexDirection: 'column',
            },
          ]}>
          <TouchableOpacity onPress={redirect}>
            <FastImage
              style={styles.image}
              source={{
                uri: uri,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>

          <View style={styles.info__container}>
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

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            marginTop: '3%',
            position: 'absolute',
            bottom: 0,
          }}>
          <View style={styles.price__container}>
            <Text style={styles.price__text}>
              Phps {parseInt(currentPrice).toFixed(2)}
            </Text>
          </View>
          {product?.storePrice == currentPrice ? (
            <Text style={[styles.stocks__text, {fontSize: RFValue(10)}]}>
              {product.stock} left
            </Text>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.regularPrice__text}>
                ₱ {product.storePrice}
              </Text>
              <Text style={[styles.stocks__text, {fontSize: RFValue(12)}]}>
                {product.stock} left
              </Text>
            </View>
          )}
          <Button
            title="Purchase"
            buttonStyle={styles.purchaseContainer}
            containerStyle={[
              styles.buttonContainer,
              {marginBottom: '15%', marginTop: '5%'},
            ]}
            titleStyle={styles.button__text}
            onPress={redirect}
          />
        </View>
      </TouchableOpacity>

      <ModalView
        visible={loginModalVisible}
        description={'You need to login in order to proceed with your oder!'}
        onClose={() => {}}
        ok_text="Confirm"
        onPress1={() => {
          setLoginModalVisible(false);
          navigation.navigate('Signup');
        }}
        // eslint-disable-next-line react-native/no-color-literals
        okTextStyle={{color: '#FEC636'}}
        width="85%"
        animationIn="fadeIn"
        animationOut="fadeOut"
      />
    </>
  );
};

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  buttonContainer: {
    alignSelf: 'center',
    borderRadius: 30,
    elevation: 2,
    marginTop: '1.5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: '100%',
  },
  button__text: {
    color: Colors.white,
    fontSize: RFValue(12.5),
  },
  // eslint-disable-next-line react-native/no-color-literals
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 3,
    marginVertical: RFValue(2),
    minHeight: isTablet ? d.height / 2.3 : d.height / 2.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    width: '90%',
  },
  image: {
    borderRadius: 20,
    height: RFValue(80),
    marginTop: '20%',
    width: RFValue(90),
  },
  info__container: {
    width: '80%',
  },
  item__info: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name__text: {
    fontFamily: 'OpenSans_bold',
    fontSize: RFValue(12),
    marginVertical: '10%',
    width: '80%',
  },
  price__container: {
    // width: "43%",
    alignSelf: 'center',
    borderRadius: 16,
  },
  price__text: {
    color: Colors.primary,
    fontFamily: 'OpenSans_semiBold',
    fontSize: RFValue(12),
  },
  promoBanner__double: {
    backgroundColor: Colors.promo,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    left: 0,
    paddingHorizontal: 15,
    paddingVertical: 5,
    position: 'absolute',
    top: 5,
    zIndex: 100,
  },
  promoBanner__double_text: {
    color: Colors.white,
    fontFamily: 'OpenSans_semiBold',
    fontSize: RFValue(12),
  },

  purchaseContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: '7%',
  },

  regularPrice__text: {
    color: Colors.black,
    fontFamily: 'OpenSans',
    fontSize: RFValue(12),
    opacity: 0.5,
    textDecorationLine: 'line-through',
  },

  stocks__text: {
    alignSelf: 'flex-end',
    fontFamily: 'OpenSans_semiBold',
    left: 0,
  },
});

export default React.memo(Product);
