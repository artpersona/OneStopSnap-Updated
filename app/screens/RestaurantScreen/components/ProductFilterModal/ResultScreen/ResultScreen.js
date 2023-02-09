import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { CustomHeader } from "../../../../../components";
import ProductItem from "../../../../../components/ProductItem/ProductItem";
import { AppContext } from "../../../../../shared/context/AppContext";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
function ResultScreen({ route }) {
  const { setProductItemData } = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <>
      <CustomHeader isShopScreen={true} showBackButton />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.header__text}>
            {route.params.data.length} item's containing{" "}
            <Text style={styles.keyword__text}>{route.params.keyword} </Text>
            were found
          </Text>
          <FlatList
            data={route.params.data}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: "40%" }}
            renderItem={({ item, index }) => (
              <ProductItem
                key={index}
                type={"single"}
                product={item}
                onPress={() => {
                  setProductItemData(item);
                  navigation.navigate("ProductItemDetails", item);
                }}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

export default ResultScreen;
