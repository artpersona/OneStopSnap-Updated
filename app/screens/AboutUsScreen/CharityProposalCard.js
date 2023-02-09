import React, {useState} from 'react';
import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
import {Colors, Theme} from '../../config';
import {
  CustomCard,
  CustomHeader,
  Spinner,
  VirtualizedView,
} from '../../components';
import {Button} from 'react-native-elements';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import carouselImages from '../../assets/resto/plates';

function AboutUsScreen({navigation}) {
  return (
    <>
      <CustomCard headerTitle="Be our Charity or Business Partner">
        {/* TODO:: Continue */}
      </CustomCard>
    </>
  );
}

export default AboutUsScreen;
