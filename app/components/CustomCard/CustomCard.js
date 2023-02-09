/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

function CustomCard({children, headerTitle}) {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#60B414', Colors.white]} style={{flex: 1}}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'Shop'}]})
          }>
          <Icon
            name="close"
            size={30}
            color={Colors.white}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}>{headerTitle}</Text>
      <View style={styles.cardContainer}>{children}</View>
    </LinearGradient>
  );
}

CustomCard.defaultProps = {
  headerTitle: '',
};
export default CustomCard;
