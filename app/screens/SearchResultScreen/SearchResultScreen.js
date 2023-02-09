import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Theme, Layout } from "../../config";
import { ProductItem, CustomHeader, Spinner } from "../../components";

function SearchResultScreen({ route, navigation, location }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMerchant, setIsMerchant] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState(-1);
  const [responseData, setResponseData] = useState([]);
  const [catId, setCatId] = useState();

  useEffect(() => {
    if (route.params) {
      if (route.params.results && route.params.results[0] != "empty") {
        setResponseData(route.params.results);
      }
      setSearchQuery(route.params.filters.search);
      setLocationFilter(route.params.filters.location);
      setCategoryFilter(route.params.filters.category);
      setIsFiltered(route.params.isFiltered);
      setIsLoading(false);
      setIsMerchant(route.params?.isMerchant);
      setCatId(route.params?.category?.catId);
    }
  }, []);

  const onSearchHandler = () => {
    setIsLoading(true);

    const data = {
      keyword: searchQuery ? searchQuery : "",
      city: locationFilter === "all" ? "" : locationFilter,
      cat: catId ? catId : categoryFilter,
    };

    if (locationFilter || categoryFilter) {
      setIsFiltered(true);
    }

    if (data.keyword === "") {
      setIsMerchant(true);
    } else {
      setIsMerchant(false);
    }

    if (!locationFilter || data.keyword !== "") {
      data.longitude = location?.coords?.longitude;
      data.latitude = location?.coords?.latitude;
    }
  };

  const onResetFilterHandler = () => {
    navigation.navigate("Shop", {
      filters: {
        search: "",
        location: "",
        category: -1,
        isFiltered: "false",
      },
    });
  };

  //

  return (
    <View style={Theme.screenContainer}>
      <CustomHeader
        name={"Search Results"}
        bottomSheetDisplay={route.params?.category?.catId ? "none" : "flex"}
        bottomSheetHeight={
          route.params?.category?.catId ||
          route.params?.category?.catId !== undefined
            ? 400
            : 550
        }
        search={{
          get: searchQuery,
          set: setSearchQuery,
        }}
        location={{
          get: locationFilter,
          set: setLocationFilter,
        }}
        category={{
          get: categoryFilter,
          set: setCategoryFilter,
        }}
        filtered={{
          get: isFiltered,
          set: setIsFiltered,
        }}
        onSearch={onSearchHandler}
        onFilterReset={onResetFilterHandler}
      />

      {isLoading ? (
        <Spinner />
      ) : (
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.innerContainer}>
            <Text style={Theme.listTitle}>
              {route.params?.category?.catName
                ? route.params?.category?.catName
                : ""}
            </Text>
            <Text style={Theme.subText}>
              {responseData?.length && responseData !== null
                ? "About " + responseData?.length + " results"
                : "No result found"}
            </Text>

            <View style={Theme.rowWrap}>
              {isMerchant
                ? responseData.length
                  ? responseData?.map((item, index) => (
                      <ProductItem
                        key={index}
                        width={Layout.window.width}
                        imageUri={item.photo ? item.photo : item.service_image}
                        display_name={
                          item?.profile?.display_name
                            ? item?.profile?.display_name
                            : item?.display_name
                        }
                        // cat_name="Classes & Seminar"
                        cat_name={
                          !item?.address_line1
                            ? item?.profile?.address_line1
                            : item?.address_line1
                        }
                        price={82}
                        rating={
                          item.rating
                            ? parseInt(item.ratings, 10)
                            : item.profile?.average_rating == null
                            ? 0
                            : parseInt(item.profile?.average_rating, 10)
                        }
                        onPress={() => {
                          navigation.navigate("MerchantDetails", {
                            merchantId: item.user_id,
                            merchantProfileId: item.profile?.user_id,
                          });
                        }}
                      />
                    ))
                  : null
                : responseData.length
                ? responseData.map((item, index) => (
                    <View style={styles.categoryListContainer} key={index}>
                      {/* <CustomServices
                        width={Layout.window.width / 2 - 30}
                        height= {245}
                        imageUri={item.service_image}
                        display_name={item.service_name}
                        cost={item.service_amount}
                        type={item.service_type}
                        rating={item.service_rating}
                        onPress={() => {
                          
                          navigation.navigate("ServiceDetails", {
                            merchantId: item.user_id,
                            serviceId: item.service_id,
                            // staffs: merchant?.staffs,
                          });
                        }}
                      /> */}
                    </View>
                  ))
                : null}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default SearchResultScreen;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
  },
});
