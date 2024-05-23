/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Animated} from 'react-native';

import Page from './Page/Page';
import SliderIndicator from './Page/SliderIndicator';
import {useNavigation} from '@react-navigation/native';
import styles from './Page/styles';
import DATA from './Data';
import {Colors} from '../../config';

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index || currentIndex);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const slidesRef = useRef(null);

  const navigation = useNavigation();

  const scrollToNext = () => {
    console.log('as');
    if (currentIndex < DATA.length - 1) {
      console.log('index is: ', currentIndex);
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate('Welcome');
    }
  };

  const onSkipPress = () => {
    navigation.navigate('Welcome');
  };

  const renderItem = ({item}) => <Page item={item} />;

  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={{backgroundColor: Colors.white}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <SliderIndicator data={DATA} scrollX={scrollX} />
      <View style={styles.buttons__container}>
        <TouchableOpacity style={styles.next__button} onPress={scrollToNext}>
          <Text style={styles.next__text}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSkipPress}>
          <Text style={styles.skip__text}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
