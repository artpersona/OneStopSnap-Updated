import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import {useForm} from 'react-hook-form';
import {Input} from 'react-native-elements';
import {Schema} from './schema';
import {AppContext} from '../../shared/context/AppContext';
// import MultiSelect from "react-native-multiple-select";
import ModalView from '../../components/ModalView/ModalView';
import {RFValue} from 'react-native-responsive-fontsize';

function ResellerApplication({navigation}) {
  const d = Dimensions.get('window');
  const {register, setValue, handleSubmit, errors, triggerValidation} =
    useForm();

  const {submitResellerApplicaton, resellerCategories} = useContext(AppContext);

  const [selectedItems, setSelectedItems] = useState([]);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const onSelectedCategoryChange = data => {
    setSelectedItems(data);
  };

  useEffect(() => {
    Schema.map(field => register({name: field.name}, {...field.validations}));
  }, [register]);

  const submitApplication = data => {
    data.status = 'processing';
    data.reseller_category_keys = selectedItems;
    submitResellerApplicaton(data)
      .then(() => setSuccessModalVisible(true))
      .catch(err => Alert.alert('Sorry something went wrong', error.message));
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.davao__text}>Davao</Text>
        <Text style={styles.market__text}>Market</Text>
      </View>

      <KeyboardAvoidingView style={{height: '100%', backgroundColor: 'white'}}>
        <View style={styles.wrapper}>
          <Text style={styles.wrapper__header}>Apply for Reseller</Text>
          <View style={styles.form__container}>
            <View style={styles.form__group}>
              <Text style={styles.form__label}>Store Name</Text>
              <Input
                inputContainerStyle={styles.form__input}
                renderErrorMessage={true}
                errorMessage={errors.store_name?.message}
                onChangeText={input => {
                  setValue('store_name', input, true);
                }}
                inputStyle={styles.inputStyle}
              />
            </View>
            <View style={styles.form__group}>
              <Text style={styles.form__label}>Proprietor Name</Text>
              <Input
                inputContainerStyle={styles.form__input}
                renderErrorMessage={true}
                errorMessage={errors.proprietor_name?.message}
                onChangeText={input => {
                  setValue('proprietor_name', input, true);
                }}
                inputStyle={styles.inputStyle}
              />
            </View>
            <View style={styles.form__group}>
              <Text style={styles.form__label}>Choose Category</Text>
              {/* <MultiSelect
                hideTags
                items={resellerCategories}
                uniqueKey="key"
                onSelectedItemsChange={onSelectedCategoryChange}
                selectedItems={selectedItems}
                selectText="Pick Categories"
                searchInputPlaceholderText="Search Items..."
                altFontFamily="OpenSans"
                tagRemoveIconColor="#1080D0"
                // tagBorderColor="#1080D0"
                tagTextColor="#1080D0"
                selectedItemTextColor="#1080D0"
                selectedItemIconColor="#1080D0"
                itemTextColor="#000"
                itemFontFamily="OpenSans"
                itemFontSize={RFValue(13)}
                displayKey="name"
                searchInputStyle={[styles.dropdown__text, { color: "#1080D0" }]}
                submitButtonColor="#1080D0"
                submitButtonText="Select Categories"
                fontSize={RFValue(11)}
                hideSubmitButton
                styleTextDropdown={styles.dropdown__text}
                fontFamily={"OpenSans"}
                styleDropdownMenu={styles.dropdown__container}
                styleTextDropdownSelected={styles.dropdown__text}
              /> */}
            </View>
            <View style={styles.form__group}>
              <Text style={styles.form__label}>Contact Number 1</Text>
              <Input
                inputContainerStyle={styles.form__input}
                renderErrorMessage={true}
                onChangeText={input => {
                  setValue('phone1', input, true);
                }}
                errorMessage={errors.phone1?.message}
                inputStyle={styles.inputStyle}
              />
            </View>
            <View style={styles.form__group}>
              <Text style={styles.form__label}>Contact Number 2</Text>
              <Input
                inputContainerStyle={styles.form__input}
                renderErrorMessage={true}
                onChangeText={input => {
                  setValue('phone2', input, true);
                }}
                errorMessage={errors.phone2?.message}
                inputStyle={styles.inputStyle}
              />
            </View>
            <View style={styles.form__group}>
              <Text style={styles.form__label}>Store Address</Text>
              <Input
                inputContainerStyle={styles.form__input}
                renderErrorMessage={true}
                errorMessage={errors.store_address?.message}
                onChangeText={input => {
                  setValue('store_address', input, true);
                }}
                inputStyle={styles.inputStyle}
              />
            </View>

            <TouchableOpacity
              style={
                selectedItems.length == 0
                  ? [styles.next__button, {backgroundColor: '#DADADA'}]
                  : styles.next__button
              }
              onPress={handleSubmit(submitApplication)}
              disabled={selectedItems.length == 0}>
              <Text style={styles.next__text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
      <ModalView
        visible={successModalVisible}
        description={
          'Your application was succcesfully sent! We will contact you after reviewing your submission'
        }
        onClose={() => {}}
        ok_text="Confirm"
        onPress1={() => {
          setSuccessModalVisible(false);
          navigation.navigate('Signup');
        }}
        okTextStyle={{color: '#FEC636'}}
        width="85%"
        animationIn="fadeIn"
        animationOut="fadeOut"
      />
    </ScrollView>
  );
}

export default ResellerApplication;
