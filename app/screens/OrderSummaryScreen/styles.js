/* eslint-disable react-native/no-color-literals */
import {StyleSheet} from 'react-native';
import {Colors} from '../../config';
import {RFValue} from 'react-native-responsive-fontsize';
import {isTablet} from '../../utils/device.utility';

export default StyleSheet.create({
  buttonContainer: {
    alignSelf: 'flex-end',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    marginRight: 20,
    width: '70%',
  },
  buttonPrimary: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    borderRadius: RFValue(10),
    justifyContent: 'center',
    padding: RFValue(15),

    width: '100%',
  },
  closeModal__button: {
    backgroundColor: '#DD6B55',
  },
  confirmOrderContainer: {
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 20,
    width: '90%',
  },

  container: {
    flex: 1,
    // backgroundColor: Colors.white,
  },
  content__container: {
    alignSelf: 'center',
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    width: '100%',
  },
  content__header: {
    fontFamily: 'OpenSans_semiBold',
  },
  currLoc__container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    width: '80%',
  },
  currText: {
    fontSize: RFValue(12),
  },
  currText__container: {
    flexDirection: 'row',
    marginLeft: '3%',
    width: '100%',
  },
  header__container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    borderColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 10,
    width: 210,
  },

  modal__button: {
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  modal__buttonGroup: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 5,
  },
  modal__container: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  modal__content: {
    paddingHorizontal: 10,
  },
  modal__header: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: -5,
    paddingHorizontal: 10,
  },
  note__color: {
    backgroundColor: 'red',
    borderRadius: 5,
    elevation: 1,
    height: isTablet ? 30 : 15,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    width: isTablet ? 40 : 20,
  },
  note__container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 10,
  },

  proceedModal__button: {
    backgroundColor: '#FFBE30',
  },

  product__notes: {
    marginVertical: isTablet ? 10 : 5,
  },
  section__header: {
    alignSelf: 'center',
    fontFamily: 'OpenSans_semiBold',
    fontSize: RFValue(13),
  },
  section__separator: {
    alignSelf: 'center',
    backgroundColor: '#1080D0',
    height: 2,
    marginHorizontal: 20,
    marginVertical: 20,
    width: '90%',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: Colors.secondary,
    marginBottom: 5,
  },

  subTotalValues: {
    color: Colors.darkestGrey,
    fontSize: RFValue(14),
    lineHeight: 20,
    paddingHorizontal: 20,
  },

  submitReport__button: {
    backgroundColor: '#63a34b',
    color: 'white',
  },
  summary__header: {
    fontFamily: 'OpenSans_bold',
    fontSize: RFValue(15),
    marginBottom: RFValue(10),
    textAlign: 'center',
  },
  summary__subtitle: {
    fontFamily: 'OpenSans',
    fontSize: RFValue(11),
    marginRight: 10,
    textAlign: 'justify',
    width: '80%',
  },

  text__input: {
    backgroundColor: '#f1f3f6',
    borderRadius: 6,
    height: 100,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    width: '100%',
  },
});
