import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../config';
import CustomHeader from '../CustomHeader';

function HeaderSearch(props) {
  return (
    <>
      <View style={{flex: 1}}>
        <LinearGradient
          colors={['#FF8662', '#BB0065']}
          style={styles.headerContainer}>
          <View style={{flex: 3}}>
            <CustomHeader />
          </View>

          <View style={{flex: 1, bottom: 5}}>
            <Text style={styles.textWelcome}>{props.name}</Text>
          </View>

          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View style={styles.searchContainer}>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Search"
                    style={styles.inputContainer}
                    placeholderTextColor={Colors.subText}
                  />

                  <Icon
                    name="ios-search"
                    size={26}
                    color="#E0227D"
                    style={{marginRight: 10, margin: 10}}
                  />
                </View>
              </View>
              <View style={styles.settingsContainer}>
                <Image source={require('../../assets/icons/settings.png')} />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: '90%',
    paddingTop: 15,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  textWelcome: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
    lineHeight: 42,
    marginHorizontal: 32,
    alignSelf: 'baseline',
    justifyContent: 'flex-end',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 44.5,
    height: 60,
    width: '70%',
    marginRight: 9,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  settingsContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 44.5,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 15,
    fontWeight: '100',
    fontSize: 18,
    lineHeight: 21,
    zIndex: 100,
  },
  inputMainContainer: {
    flex: 1,
    // top: 50,
    flexDirection: 'row',
  },
});

export default HeaderSearch;
