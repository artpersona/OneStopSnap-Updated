/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import { ConfigContext } from "../../../shared/context/ConfigContext";
import CategoryItem from "./CategoryFilterItem";
function CategoryScreen({ type }) {
  const {
    cityWideCategories,
    miniCategories,
    currentCityCategory,
    currentMiniCategory,
  } = useContext(ConfigContext);

  const renderItemCity = ({ item }) => {
    return (
      <CategoryItem
        item={item}
        current={currentCityCategory}
        type={"city"}
        key={item.key}
      />
    );
  };

  const renderItemMini = ({ item }) => {
    return (
      <CategoryItem
        item={item}
        current={currentMiniCategory}
        type={"mini"}
        key={item.key}
      />
    );
  };

  return (
    <View style={styles.category__wrapper}>
      {type == "city" ? (
        <FlatList
          data={cityWideCategories}
          renderItem={renderItemCity}
          removeClippedSubviews={true} // Unmount components when outside of window
          initialNumToRender={13} // Reduce initial render amount
          maxToRenderPerBatch={8} // Reduce number in each render batch
          updateCellsBatchingPeriod={50} // Increase time between renders
          windowSize={7} // Reduce the window size
          style={{ width: "90%", height: "100%", backgroundColor: "white" }}
        />
      ) : (
        <FlatList
          data={miniCategories}
          renderItem={renderItemMini}
          removeClippedSubviews={true} // Unmount components when outside of window
          initialNumToRender={8} // Reduce initial render amount
          maxToRenderPerBatch={8} // Reduce number in each render batch
          updateCellsBatchingPeriod={50} // Increase time between renders
          windowSize={7} // Reduce the window size
          contentContainerStyle={{
            alignContent: "space-between",
            paddingBottom: "60%",
          }}
          style={{
            width: "90%",
            height: "100%",
            backgroundColor: "white",
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

export default CategoryScreen;
