/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Product from "./Product";
import { splitArray } from "../../../utils/product.utility";

export default function UpdateList({ feeds }) {
  const [renderDoubleItems, setRenderDoubleItems] = useState([]);

  useEffect(() => {
    const data = splitArray(feeds);
    setRenderDoubleItems(data);
  }, [feeds]);

  const keyExtracts = (item, index) => index.toString();

  const renderItemDouble = ({ item }) => (
    <View style={{ flexDirection: "row", wudth: "100%", marginVertical: "3%" }}>
      <View style={{ width: "50%" }}>
        <Product product={item[0]} key={item[0].id} />
      </View>
      {item.length > 1 && (
        <View style={{ width: "50%" }}>
          <Product product={item[1]} key={item[1].id} />
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.updateList}>
      <FlatList
        data={renderDoubleItems}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={3}
        updateCellsBatchingPeriod={300} // Increase time between renders
        windowSize={7} // Reduce the window size
        keyExtractor={keyExtracts}
        renderItem={renderItemDouble}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  updateList: {
    height: "100%",
    paddingVertical: 5,
  },
});
