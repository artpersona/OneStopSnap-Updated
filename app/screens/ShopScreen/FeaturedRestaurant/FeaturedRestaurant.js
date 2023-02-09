/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
function FeaturedRestaurant({imageUri, name, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        flex: 1,
        elevation: 3,
        marginHorizontal: 5,
      }}>
      <ImageBackground
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/001/349/622/non_2x/bubble-tea-in-milk-splash-advertisement-banner-free-vector.jpg',
        }}
        style={styles.container}
        imageStyle={{opacity: 0.9}}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.89)']}
          style={styles.info__container}>
          <View style={styles.info__wrapper}>
            <View style={styles.image__container}>
              <FastImage
                style={styles.image}
                source={{
                  uri: imageUri,
                  priority: FastImage.priority.normal,
                }}
              />
            </View>
            <View style={styles.text__container}>
              <Text style={styles.promotion__text}>We Offer 15% off</Text>
              <Text style={styles.name__text}>{name}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default FeaturedRestaurant;
