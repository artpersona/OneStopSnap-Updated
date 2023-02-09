import React, { useState, useEffect, useRef, useContext } from "react";
import { View, FlatList, Text } from "react-native";
import { Theme, Colors } from "../../config";
import styles from "./styles";
import {
  CustomHeader,
  Spinner,
  Empty,
  OrderSummaryButton,
  Advertisements,
} from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight } from "react-native-gesture-handler";
import { AppContext } from "../../shared/context/AppContext";
import Resto from "./RestoScreen/RestoScreen";
import { isTablet } from "../../utils/device.utility";
import { RFValue } from "react-native-responsive-fontsize";
function RestaurantListScreen({ route, navigation, location }) {
  const { allRestaurants, orders } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);

  const { data, filters } = route?.params;
  // new

  useEffect(() => {
    if (searchValue != "") {
    }
    setFilteredRestaurants(
      allRestaurants.filter((data) => {
        return data.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [allRestaurants, searchValue]);

  useEffect(() => {
    if (filters) {
      let filtered = filteredRestaurants.filter(
        (item) => item.city_tag == filters.key
      );
      setFilteredRestaurants(filtered);
    }
  }, [filters]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.restaurantListContainer} key={index}>
        <Resto
          key={index}
          id={item.id}
          imageUri={item.imageUri}
          name={item.name}
          onPress={() => {
            navigation.navigate("RestaurantScreen", item);
          }}
          minimumOrderActive={data && data.includes(item.id)}
        />
      </View>
    );
  };

  return !allRestaurants ? (
    <Spinner />
  ) : (
    <>
      <View style={Theme.screenContainer}>
        <CustomHeader
          showBackButton
          isShopScreen={true}
          showSearchButton
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          handleSearchSubmit={() => console.log("hello world!")}
        />
        <Advertisements />

        <View style={isTablet ? { marginTop: "5%" } : { marginTop: "5%" }}>
          <Text style={styles.title__text}>
            {filters ? filters.name : "Restaurants"}
          </Text>
          <FlatList
            contentContainerStyle={styles.restaurantScrollView}
            data={filteredRestaurants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListEmptyComponent={<Empty message="No restaurant found." />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}

export default RestaurantListScreen;
