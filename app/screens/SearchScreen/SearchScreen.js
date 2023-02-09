import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { AppContext } from "../../shared/context/AppContext";
import Resto from "../RestaurantListScreen/RestoScreen/RestoScreen";
import styles from "./styles";
function SearchScreen({ route, navigation }) {
  const { data } = route.params;
  const { allRestaurants } = useContext(AppContext);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    let tempData = [...allRestaurants];
    tempData = tempData.filter((item) => {
      const searchString = data.toUpperCase();
      const itemName = item.name.toUpperCase();
      return itemName.includes(searchString) && item;
    });

    setFilteredRestaurants(tempData);
  }, [data]);
  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.header__container}>
            <Text style={styles.header__text}>
              {filteredRestaurants.length} restaurants with "
              <Text style={{ fontWeight: "bold" }}> {data}</Text>"
            </Text>
          </View>
          <FlatList
            data={filteredRestaurants}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: "20%" }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View key={index} style={{ marginVertical: "2%" }}>
                <Resto
                  key={index}
                  id={item.id}
                  imageUri={item.imageUri}
                  name={item.name}
                  onPress={() => {
                    navigation.navigate("RestaurantScreen", item);
                  }}
                  minimumOrderActive={route.params?.data.includes(item.id)}
                />
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

export default SearchScreen;
