/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {CustomDrawerContent} from '../components';
import {createStackNavigator} from '@react-navigation/stack';

import {
  RestaurantListScreen,
  RestaurantScreen,
  SearchResultScreen,
  MapScreen,
  ProfileScreen,
  MyOrdersScreen,
  ShopScreen,
  OrderSummaryScreen,
  ConfirmOrderScreen,
  CheckOutScreen,
  AboutUsScreen,
  SuccessOrderCard,
  LoginScreen,
  ProductResult,
  CategoryFilterScreen,
} from '../screens';
import {AuthContext} from '../shared/context/AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../config';
import {AppContext} from '../shared/context/AppContext';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const OrderStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const OrderStackScreen = () => {
  return (
    <OrderStack.Navigator
      initialRouteName="OrderSummary"
      screenOptions={{animationEnabled: true, headerShown: false}}>
      <OrderStack.Screen name="OrderSummary" component={OrderSummaryScreen} />
      <OrderStack.Screen name="ConfirmOrder" component={ConfirmOrderScreen} />
      <OrderStack.Screen name="CheckOut" component={CheckOutScreen} />
    </OrderStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Shop"
      screenOptions={{animationEnabled: true, headerShown: false}}>
      <HomeStack.Screen name="Shop">
        {page => <ShopScreen {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="RestaurantListScreen">
        {page => <RestaurantListScreen {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="RestaurantScreen">
        {page => <RestaurantScreen {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Results">
        {page => <SearchResultScreen {...page} />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Map" component={MapScreen} />
      <HomeStack.Screen name="LogIn" component={LoginScreen} />
      <HomeStack.Screen name="ProductResult" component={ProductResult} />
      <HomeStack.Screen
        name="CategoryFilterScreen"
        component={CategoryFilterScreen}
      />
    </HomeStack.Navigator>
  );
};

function HomeScreen() {
  return (
    <Drawer.Navigator
      options={{
        unmountInactiveRoutes: true,
      }}
      drawerPosition={'left'}
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{animationEnabled: true, headerShown: false}}
      initialRouteName="ShopLanding">
      <Drawer.Screen
        name="ShopLanding"
        options={{
          drawerLabel: 'Shop',
        }}
        component={TabbedHomeScreen}
      />

      <Drawer.Screen
        name="My Orders"
        component={MyOrdersScreen}
        options={{
          drawerLabel: 'My Orders',
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          drawerLabel: 'About Us',
        }}
      />
    </Drawer.Navigator>
  );
}

const TabbedHomeScreen = () => {
  const {loggedUser} = useContext(AuthContext);
  const {orders} = useContext(AppContext);

  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: 'whitesmoke',
      }}
      labeled={false}
      activeColor={Colors.primary}
      inactiveColor={Colors.lightGray}
      sceneAnimationEnabled={true}
      sceneAnimationType="shifting">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {loggedUser && (
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="user-alt" color={color} size={20} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Cart"
        component={OrderStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
          tabBarBadge: orders.length > 0 ? `${orders.length}` : null,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
