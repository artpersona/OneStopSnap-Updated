/* eslint-disable react-native/sort-styles */
import {StyleSheet, StatusBar} from 'react-native';
import {Colors} from '../../config';

import {RFValue} from 'react-native-responsive-fontsize';
const searchHeight = RFValue(40);

export default StyleSheet.create({
  action__wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  // eslint-disable-next-line react-native/no-color-literals
  area__text: {
    color: '#F28900',
    fontFamily: 'OpenSans',

    fontSize: RFValue(10),
    marginRight: 3,
  },
  cart__container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  cart__text: {
    color: Colors.white,
    fontFamily: 'OpenSans_bold',

    fontSize: RFValue(8),
  },
  clickable__area: {
    left: -10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    right: 0,
  },

  container: {
    height: RFValue(70),
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    zIndex: 4,
  },
  // eslint-disable-next-line react-native/no-color-literals
  count__container: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: RFValue(15),
    justifyContent: 'center',
    left: -10,
    top: -15,
    width: RFValue(15),
  },
  deliver__text: {
    fontFamily: 'OpenSans_semiBold',
    fontSize: RFValue(11),
  },
  // eslint-disable-next-line react-native/no-color-literals
  filterContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 44.5,
    elevation: 1,
    height: 60,
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    width: 60,
  },
  header__text: {
    color: Colors.white,

    fontFamily: 'OpenSans',
    fontSize: RFValue(15),
  },
  img: {
    borderRadius: 120 / 2,
    height: 120,
    width: 120,
  },
  inputContainer: {
    backgroundColor: Colors.lightestGray,
    fontSize: RFValue(13),
    fontWeight: '100',
    paddingLeft: 15,
    height: searchHeight,
  },

  linearGradient: {
    borderRadius: 40,
    height: 200,
    marginTop: -40,
  },
  noBackground: {
    height: 70,
    justifyContent: 'center',
    zIndex: 4,
  },
  page__header: {
    flexDirection: 'row',
    marginLeft: -10,
    marginRight: 10,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    top: -40,
  },

  searchComponentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 90,
  },

  searchContainer: {
    backgroundColor: Colors.lightestGray,
    borderColor: Colors.lightGray,
    borderRadius: RFValue(10),
    borderWidth: 1,
    height: searchHeight,
    left: -10,
    padding: 8,
    shadowColor: Colors.darkGray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  searchIcon: {
    // paddingRight: 10,
    margin: 10,
    marginRight: 20,
  },
  store__name: {
    color: Colors.white,
    fontFamily: 'OpenSans_semiBold',
    fontSize: RFValue(13),
    position: 'absolute',
    right: '50%',
  },

  textWelcome: {
    alignSelf: 'baseline',
    color: Colors.black,
    fontSize: RFValue(24),
    fontWeight: '500',
    height: 42,
    justifyContent: 'flex-end',
    lineHeight: 42,
  },

  wrapper: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },

  filter__badge: {
    alignItems: 'center',
    backgroundColor: Colors.error,
    borderRadius: 100,
    height: 20,
    justifyContent: 'center',
    position: 'absolute',
    right: -5,
    top: -10,
    width: 20,
  },
  badge__text: {
    color: Colors.white,
    fontSize: RFValue(9),
    fontWeight: 'bold',
  },
});
