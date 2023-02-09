import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {deviceWidth, deviceHeight} from '../../utils/device.utility';
import FastImage from 'react-native-fast-image';
import {AppContext} from '../../shared/context/AppContext';

import styles from './styles';
function Advertisements() {
  const {advertisements} = useContext(AppContext);
  const testDATA = [
    {
      uri: 'https://api.watsons.com.ph/medias/Watsons-Banner-SBO-1005x420px.jpg?context=bWFzdGVyfHJvb3R8MjkxMTYzNHxpbWFnZS9qcGVnfGhiOS9oY2IvOTM1MDQxNDgyNzU1MC9XYXRzb25zIEJhbm5lciBTQk8gMTAwNXg0MjBweC5qcGd8YmNiZDgwODM1YjkxODY1OTBmYWUzODM1OWRjNDU3MTEzZTY0ZDdhYThiYmQ2MzEwNDc5NzQzYjE3YzNlODAwOQ',
    },
    {
      uri: 'https://thefoodiegeek.net/wp-content/uploads/2020/05/9a3333b3f4bc4ea2bc0ac3b0c226e9c6-e1623142963976-870x400.jpeg',
    },
    {
      uri: 'https://dairyqueen.com.ph/wp-content/uploads/2021/01/FP-DQ-BOM-Frozen-Latte-Fest-Website-Banner-1200x547-01-01.png',
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay={true}
        autoplayDelay={3}
        autoplayLoop
        paginationStyleItem={styles.pagination__item}
        paginationDefaultColor="#fff"
        index={0}
        data={testDATA}
        removeClippedSubviews={false}
        renderItem={({item}) => {
          if (item?.uri) {
            return (
              // eslint-disable-next-line react-native/no-inline-styles
              <View style={{width: deviceWidth, height: deviceHeight / 4.5}}>
                <FastImage
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={{
                    uri: item.uri,
                    priority: FastImage.priority.normal,
                  }}
                />
              </View>
            );
          }
        }}
        onChangeIndex={({index}) => setCurrIndex(index)}
      />

      <View style={styles.indicator__container}>
        {testDATA.map((item, index) => {
          return (
            <View
              style={
                index == currIndex ? styles.selectedCircle : styles.normalCircle
              }
              key={index.toString()}
            />
          );
        })}
      </View>
    </View>
  );
}

export default Advertisements;
