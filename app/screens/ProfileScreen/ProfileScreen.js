import React, {useState, useContext, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  BackHandler,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Theme} from '../../config';
import {CustomHeader} from '../../components';
import styles from './styles';
import {AuthContext} from '../../shared/context/AuthContext';
import {ConfigContext} from '../../shared/context/ConfigContext';

import ModalView from '../../components/ModalView/ModalView';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileItem from './ProfileItem';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
import EditSVG from '../../assets/svg/EditSVG';
import AwesomeAlert from 'react-native-awesome-alerts';
import {Colors} from '../../config';
function ProfileScreen({navigation}) {
  const {loggedUser, editCustomerProfile, verifyPhoneNumber} =
    useContext(AuthContext);
  const {appLocations} = useContext(ConfigContext);

  const [modalState, setModalState] = useState({
    description: '',
    logoName: '',
    showModal: false,
    title: '',
  });

  // const

  const [activeField, setActiveField] = useState(null);
  const [activeData, setActiveData] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [editValue, setEditValue] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [backHandlerAlert, setBackHandlerAlert] = useState(false);
  const [updateValue, setUpdateValue] = useState({
    addressNotes: loggedUser?.addressNotes ? loggedUser.addressNotes : null,
    displayName: loggedUser?.displayName,
    fullAddress: loggedUser?.fullAddress ? loggedUser?.fullAddress : null,
    location_key: loggedUser?.location_key ? loggedUser?.location_key : null,
    otherPhone: loggedUser?.otherPhone ? loggedUser?.otherPhone : null,
    paymentMethod: 'COD',
    phoneNumber: loggedUser?.phoneNumber ? loggedUser?.phoneNumber : null,
  });

  const sheetRef = useRef(null);
  const fall = new Animated.Value(1);

  useEffect(() => {
    const backAction = () => {
      handleBackPress();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [isEditing]);

  const handleBackPress = () => {
    if (isEditing) {
      setBackHandlerAlert(true);
    } else {
      navigation.goBack();
    }
  };

  const handleSubmit = (type, value) => {
    setIsEditing(true);
    if (type == null) {
      if (
        (activeType === 'numeric' && editValue == null) ||
        (activeType === 'numeric' && editValue?.length < 7)
      ) {
        return setModalState({
          showModal: true,
          logoName: 'error',
          description: `Please provide valid phone number`,
        });
      } else if (
        (activeType !== 'numeric' && editValue == null) ||
        editValue?.length <= 0
      ) {
        return setModalState({
          showModal: true,
          logoName: 'error',
          description: `Please provide valid details`,
        });
      }
    }

    const field = type != null ? type : activeKey;
    const data = value != null ? value : editValue;

    if (field == 'phoneNumber') {
      verifyPhoneNumber(field, data)
        .then(() => {
          const tempUpdateValue = {...updateValue};
          tempUpdateValue[`${field}`] = data;
          setUpdateValue(tempUpdateValue);
          sheetRef.current.snapTo(1);
          ToastAndroid.show(`Profile Item Updated`, 3000);
        })
        .catch(err => {
          setModalState({
            showModal: true,
            logoName: 'error',
            description: `${err}`,
          });
        });
    } else {
      const tempUpdateValue = {...updateValue};
      tempUpdateValue[`${field}`] = data;
      setUpdateValue(tempUpdateValue);
      sheetRef.current.snapTo(1);
      ToastAndroid.show(`Profile Item Updated`, 3000);
    }
  };

  const handleProfileUpdate = () => {
    setBackHandlerAlert(false);

    editCustomerProfile(updateValue)
      .then(() => {
        setIsEditing(false);
        setModalState({
          showModal: true,
          logoName: 'success',
          description: `You have successfully updated your profile!`,
        });
      })
      .catch(err => {
        setModalState({
          showModal: true,
          logoName: 'error',
          description: `${err}`,
        });
      });
  };

  const handleSheetPress = ({field, type, data, dataKey}) => {
    setActiveField(field);
    setActiveData(data);
    setActiveType(type);

    setEditValue(data);
    setActiveKey(dataKey);
    sheetRef.current.snapTo(0);
  };

  const handleProfileChange = value => {
    if (activeType == 'numeric') {
      if (/^\d+$/.test(value) || value === '') {
        setEditValue(value);
      }
    } else {
      setEditValue(value);
    }
  };

  const locationChange = item => {
    handleSubmit('location_key', item.value);
  };

  const renderContent = () => (
    <View style={styles.panel}>
      <View style={styles.panel__wrapper}>
        <Text style={styles.panel__label}>Current {activeField}</Text>
        <Text
          style={
            activeData
              ? styles.panel__value
              : [styles.panel__value, {opacity: 0.5}]
          }>
          {activeData ? activeData : 'No Data'}
        </Text>
        <View style={styles.input__container}>
          <Text style={styles.panel__label}>New {activeField}</Text>

          <TextInput
            keyboardType={activeType}
            underlineColorAndroid="transparent"
            style={styles.input__field}
            onChangeText={e => handleProfileChange(e)}
            value={editValue}
            maxLength={activeType == 'numeric' ? 11 : 100}
          />

          <TouchableOpacity
            style={styles.confirm__button}
            onPress={handleSubmit}>
            <Text style={styles.confirm__text}>Apply Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={{overflow: 'hidden'}}>
      <View style={styles.header}>
        <View style={styles.header__wrapper}>
          <Text style={styles.header__text}>Update {activeField}</Text>
          <TouchableOpacity
            onPress={() => sheetRef.current.snapTo(1)}
            style={styles.close__icon}>
            <View style={{padding: 10}}>
              <Icon
                name="close-thick"
                size={23}
                onPress={() => sheetRef.current.snapTo(1)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <>
      <ModalView
        visible={modalState.showModal}
        description={modalState.description}
        onPress1={() => setModalState({showModal: false})}
        width="65%"
        animation="bounceIn"
        logoName={modalState.logoName}
      />
      <ScrollView style={Theme.screenContainer}>
        <CustomHeader showBackButton profilePress={handleBackPress} />
        <Animated.View
          style={[
            styles.container,
            {opacity: Animated.add(0.1, Animated.multiply(fall, 1.0))},
          ]}>
          <View style={styles.wrapper}>
            <View style={styles.image__container}>
              <Image
                source={
                  loggedUser?.photoURL
                    ? {
                        uri: loggedUser.photoURL,
                      }
                    : require('../../assets/avatar/noimage.jpg')
                }
                style={styles.img}
              />
              <View style={styles.userName__container}>
                <Text style={styles.name__text}>{loggedUser?.displayName}</Text>
                <View style={styles.updateIcons__container}>
                  <TouchableOpacity
                    onPress={() =>
                      handleSheetPress({
                        field: 'Name',
                        dataKey: 'displayName',
                        data: loggedUser?.displayName,
                      })
                    }>
                    {/* ({ field, type, data, dataKey }) */}
                    <EditSVG width={RFValue(20)} height={RFValue(20)} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.items__container}>
              <ProfileItem
                data={
                  updateValue?.phoneNumber ? updateValue?.phoneNumber : null
                }
                dataKey={'phoneNumber'}
                type={'numeric'}
                label={'Mobile Number'}
                onPress={handleSheetPress}
              />
              <ProfileItem
                data={updateValue?.otherPhone ? updateValue?.otherPhone : null}
                dataKey={'otherPhone'}
                type={'numeric'}
                label={'Other Phone Number'}
                onPress={handleSheetPress}
              />
              <Text
                style={[
                  styles.profile__label,
                  {marginBottom: '-1%', zIndex: 101},
                ]}>
                Baranggay
              </Text>

              <View style={{height: '10%', marginLeft: '-5%'}}>
                <DropDownPicker
                  items={appLocations.map((item, index) => {
                    const newArray = {
                      label: item.name,
                      value: item.key,
                    };
                    return newArray;
                  })}
                  containerStyle={{height: '100%', width: '105%'}}
                  itemStyle={{
                    justifyContent: 'flex-start',
                    color: '#9D9D9D',
                    fontFamily: 'OpenSans_bold',
                    fontSize: 17,
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={locationChange}
                  defaultValue={loggedUser?.location_key}
                  placeholderStyle={{
                    color: '#9D9D9D',
                    fontFamily: 'OpenSans_bold',
                    fontSize: RFValue(17),
                  }}
                  style={{borderColor: 'white'}}
                  selectedLabelStyle={{
                    fontFamily: 'OpenSans_bold',
                    fontSize: RFValue(16),
                  }}
                  arrowSize={20}
                  arrowColor="#FFBE30"
                />
              </View>

              {/* </View> */}

              <ProfileItem
                data={updateValue?.fullAddress ? updateValue.fullAddress : null}
                dataKey={'fullAddress'}
                label={'Address'}
                onPress={handleSheetPress}
              />
              <ProfileItem
                data={
                  updateValue?.addressNotes ? updateValue.addressNotes : null
                }
                dataKey={'addressNotes'}
                label={'Address Landmark'}
                onPress={handleSheetPress}
              />
              {/* <ProfileItem
                data={
                  updateValue.paymentMethod ? updateValue.paymentMethod : null
                }
                dataKey={"paymentMethod"}
                label={"Mode of Payment"}
                onPress={handleSheetPress}
              /> */}
              <Text
                style={[
                  styles.profile__label,
                  {marginBottom: '-1%', zIndex: 101},
                ]}>
                Mode Of Payment
              </Text>

              <View style={{height: '10%', marginLeft: '-5%'}}>
                <DropDownPicker
                  items={appLocations.map((item, index) => {
                    const newArray = {
                      label: 'COD',
                      value: 'COD',
                    };
                    return newArray;
                  })}
                  containerStyle={{height: '100%', width: '105%'}}
                  itemStyle={{
                    justifyContent: 'flex-start',
                    color: '#9D9D9D',
                    fontFamily: 'OpenSans_bold',
                    fontSize: 17,
                  }}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={locationChange}
                  defaultValue={'COD'}
                  placeholderStyle={{
                    color: '#9D9D9D',
                    fontFamily: 'OpenSans_bold',
                    fontSize: RFValue(17),
                  }}
                  style={{borderColor: 'white'}}
                  selectedLabelStyle={{
                    fontFamily: 'OpenSans_bold',
                    fontSize: RFValue(16),
                  }}
                  arrowSize={20}
                  arrowColor="#FFBE30"
                  disabled
                />
              </View>

              <TouchableOpacity
                style={styles.next__button}
                onPress={handleProfileUpdate}>
                <Text style={styles.next__text}>Update Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ScrollView>

      <BottomSheet
        ref={sheetRef}
        snapPoints={['45%', 0]}
        initialSnap={1}
        borderRadius={30}
        enabledContentGestureInteraction={true}
        renderContent={renderContent}
        renderHeader={renderHeader}
        callbackNode={fall}
      />
      <AwesomeAlert
        show={backHandlerAlert}
        showProgress={false}
        title="Unsaved Changes"
        message="You still have unsaved changes!"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Discard"
        confirmText="Save Changes"
        confirmButtonColor={Colors.success}
        cancelButtonColor={Colors.error}
        onCancelPressed={() => {
          navigation.goBack();
          setBackHandlerAlert(false);
        }}
        onConfirmPressed={handleProfileUpdate}
      />
    </>
  );
}

export default React.memo(ProfileScreen);
