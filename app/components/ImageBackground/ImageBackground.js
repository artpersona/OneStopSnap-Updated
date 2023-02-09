import React from 'react';
import {ImageBackground as Background} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

function ImageBackground({children}) {
  return (
    <Background
      style={styles.backgroundImage}
      source={require('../../assets/bg.png')}
      resizeMode={FastImage.resizeMode.cover}>
      {children}
    </Background>
  );
}

export default ImageBackground;
