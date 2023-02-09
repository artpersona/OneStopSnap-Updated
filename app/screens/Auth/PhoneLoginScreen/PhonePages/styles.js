import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {isTablet} from '../../../../utils/device.utility';
import {Colors} from '../../../../config';
const d = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: d.height / 12,
    flex: 1,
  },

  container__header: {
    fontSize: 22,
    fontFamily: 'OpenSans_bold',
    marginBottom: 30,
  },

  number__text: {
    fontFamily: 'OpenSans_semiBold',
    color: 'black',
    textAlign: 'center',
    fontSize: RFValue(17),
    marginBottom: '5%',
  },

  note__text: {
    fontFamily: 'OpenSans',
    color: '#9D9D9D',
    fontSize: RFValue(11),
    textAlign: 'justify',
  },

  next__button: {
    alignSelf: 'center',
    width: '100%',
    padding: RFValue(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: RFValue(10),
  },
  next__text: {
    fontSize: RFValue(15),
    color: 'white',
    fontFamily: 'OpenSans_semiBold',
  },
  loading__style: {
    height: RFValue(26),
  },

  input__field: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'whitesmoke',
  },

  button__container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
