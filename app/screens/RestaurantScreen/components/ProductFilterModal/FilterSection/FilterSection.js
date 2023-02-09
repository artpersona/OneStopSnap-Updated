import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles";
import FilterItem from "./FilterItem";
function FilterSection({ type, data, filter, setFilter }) {
  const renderItem = (data) => (
    <FilterItem
      data={data}
      filter={filter}
      setFilter={setFilter}
      type={type}
      key={data.item}
    />
  );

  const keyExtract = (item, index) => index.toString();
  return (
    <View style={styles.filterSection__container}>
      <Text style={styles.filterSection__header}>{type}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={keyExtract}
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={8} // Reduce initial render amount
        maxToRenderPerBatch={8} // Reduce number in each render batch
        updateCellsBatchingPeriod={50} // Increase time between renders
        windowSize={7} // Reduce the window size
      />
    </View>
  );
}

export default React.memo(FilterSection);
