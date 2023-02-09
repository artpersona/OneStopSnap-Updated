import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../../../config';
import styles from './styles';
function ProductSearch({setIsVisible, products}) {
  const navigation = useNavigation();
  const [searchItem, setSearchItem] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(prod => {
        return (
          prod.name.toLowerCase().includes(searchItem.toLowerCase()) ||
          prod.product_category_name
            .toLowerCase()
            .includes(searchItem.toLowerCase()) ||
          prod.description.toLowerCase().includes(searchItem.toLowerCase())
        );
      }),
    );
  }, [products, searchItem]);

  const handlePress = () => {
    setIsVisible(false);
    navigation.navigate('ProductResult', {
      data: filteredProducts,
      keyword: searchItem,
    });
  };

  return (
    <View style={styles.input__container}>
      <View style={styles.input__wrapper}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Search Specific Product"
          onChangeText={text => setSearchItem(text)}
          placeholderTextColor="grey"
          value={searchItem}
          style={styles.textInputContainer}
          placeholderTextColor={Colors.subText}
          returnKeyType="search"
          onSubmitEditing={handlePress}
        />
        <TouchableOpacity style={styles.search__button}>
          <Icon
            name="search"
            size={15}
            color="black"
            style={styles.search__icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductSearch;
