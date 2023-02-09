/* eslint-disable react/no-children-prop */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CategoryScreen from "./CategoryScreen/CategoryScreen";
import { CustomHeader } from "../../components";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { deviceHeight, isTablet } from "../../utils/device.utility";
import { ConfigContext } from "../../shared/context/ConfigContext";

const Tab = createMaterialTopTabNavigator();
function CategoryFilterScreen() {
  const navigation = useNavigation();
  const handleClose = () => {
    navigation.goBack();
  };

  const {
    currentCityCategory,
    currentMiniCategory,
    setCurrentCityCategory,
    setCurrentMiniCategory,
  } = useContext(ConfigContext);

  const filtersActive =
    currentCityCategory.length > 0 || currentMiniCategory.length > 0;

  const handleRemoveFilters = () => {
    setCurrentCityCategory([]);
    setCurrentMiniCategory([]);
  };
  return (
    <>
      <CustomHeader showBackButton />
      <View style={styles.modal}>
        <View style={styles.modal__container}>
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: {
                fontFamily: "OpenSans_semiBold",
                fontSize: RFValue(11),
                margin: 0,
                padding: 0,
              },
              indicatorStyle: {
                backgroundColor: "#F6B323",
              },
            }}
            swipeEnabled={true}
          >
            <Tab.Screen
              name="Mini Categories"
              children={() => (
                <CategoryScreen type="mini" handleClose={handleClose} />
              )}
            />
          </Tab.Navigator>
        </View>

        <View
          style={{
            width: "100%",
            position: "absolute",
            zIndex: 10,
            bottom: 0,
            borderColor: "whitesmoke",
            borderTopWidth: 2,
            minHeight: isTablet ? deviceHeight / 4 : deviceHeight / 3.8,
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: "7%",
              alignItems: "center",
            }}
          >
            {filtersActive && (
              <TouchableOpacity onPress={handleRemoveFilters}>
                <Text
                  style={{
                    color: "#FFBD30",
                    marginRight: "5%",
                    fontFamily: "Roboto_medium",
                  }}
                >
                  Clear All
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={
                filtersActive
                  ? [styles.next__button, { width: "70%" }]
                  : [styles.next__button, { alignSelf: "center" }]
              }
              onPress={handleClose}
            >
              <Text style={styles.next__text}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default CategoryFilterScreen;
