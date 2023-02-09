import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  ToastAndroid,
} from "react-native";
import Modal from "react-native-modal";
import ProductSearch from "./ProductSearch";
import FilterSection from "./FilterSection/FilterSection";
import styles from "./styles";
function ProductFilterModal({
  isVisible,
  setIsVisible,
  categories,
  filterCategories,
  setFilterCategories,
  filterSort,
  setFilterSort,
  products,
}) {
  const [tempFilter, setTempFilter] = useState([]);

  useEffect(() => {
    setTempFilter(filterCategories);
  }, []);

  const handleClearFilter = () => {
    setFilterCategories([]);
    setTempFilter([]);
    setFilterSort("product_category_name");
    ToastAndroid.show(`Filter cleared`, 3000);
  };

  const keyExtract = (index) => index.toString();
  const handleFilterApply = () => {
    setIsVisible(false);
    setFilterCategories(tempFilter);
  };

  const renderItem = ({ index }) => {
    return (
      <React.Fragment key={index.toString()}>
        <FilterSection
          type={"Categories"}
          data={categories}
          filter={tempFilter}
          setFilter={setTempFilter}
        />
        <View style={styles.options__group}>
          <TouchableOpacity
            style={styles.apply__button}
            onPress={handleFilterApply}
          >
            <Text style={styles.apply__text}>Apply Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClearFilter}>
            <Text style={styles.clear__text}>Clear All</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      backdropTransitionOutTiming={0}
      onBackButtonPress={() => setIsVisible(false)}
      style={styles.modal}
    >
      <View style={styles.modal__container}>
        <View style={styles.modal__header}>
          <View style={styles.header__wrapper}>
            <ProductSearch setIsVisible={setIsVisible} products={products} />
          </View>
        </View>
        <View style={styles.modal__content}>
          <View style={styles.content__wrapper}>
            <SectionList
              sections={[{ type: "categories", data: [categories] }]}
              renderItem={renderItem}
              keyExtractor={keyExtract}
              automaticallyAdjustContentInsets={false}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default React.memo(ProductFilterModal);
