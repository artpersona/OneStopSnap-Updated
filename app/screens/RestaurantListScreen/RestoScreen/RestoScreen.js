import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
function RestoScreen({id, imageUri, name, onPress, minimumOrderActive}) {
  return (
    <TouchableOpacity
      style={
        minimumOrderActive
          ? [styles.container, {backgroundColor: '#1080D0'}]
          : styles.container
      }
      onPress={onPress}>
      <View style={styles.wrapper}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
          }}
          source={{
            uri: 'https://stories.starbucks.com/uploads/2020/06/Starbucks-Virtual-Backgrounds-Olive-Way-Seattle.jpg',
          }}
          resizeMode={FastImage.resizeMode.cover}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.5)']}
            style={styles.info__container}>
            <View style={styles.shop__info}>
              <Text
                style={
                  minimumOrderActive
                    ? [styles.name__text, {color: 'white'}]
                    : styles.name__text
                }>
                {name}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default RestoScreen;
