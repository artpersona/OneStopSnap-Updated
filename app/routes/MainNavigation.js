import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  WelcomeScreen,
  HomeScreen,
  OnBoardingScreen,
  LoadingScreen,
  OrderDetailsScreen,
  LocationPickerScreen,
  SearchScreen,
  ResellerApplication,
  MapScreen,
  SuccessOrderCard,
} from '../screens';
import {
  LoginScreens,
  SignupScreen,
  PhoneLoginScreen,
  PhoneVerificationScreen,
} from '../screens/Auth';
import {ProductItemDetails} from '../components';
import {AuthContext} from '../shared/context/AuthContext';

function MainNavigation() {
  const Stack = createStackNavigator();
  const {loggedUser, initializing} = useContext(AuthContext);

  if (!initializing) {
    return (
      <Stack.Navigator
        initialRouteName={loggedUser ? 'Welcome' : 'OnBoarding'}
        screenOptions={{animationEnabled: false, headerShown: false}}>
        <Stack.Screen name="ShopStack">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        <Stack.Screen
          name="ProductItemDetails"
          component={ProductItemDetails}
        />
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
        <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} />
        <Stack.Screen
          name="PhoneVerification"
          component={PhoneVerificationScreen}
        />

        <Stack.Screen name="LocationPicker" component={LocationPickerScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="OrderSuccessScreen" component={SuccessOrderCard} />

        {!loggedUser && (
          <>
            <Stack.Screen name="LogIn" component={LoginScreens} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Apply" component={ResellerApplication} />
          </>
        )}
      </Stack.Navigator>
    );
  } else {
    return <LoadingScreen />;
  }
}

export default MainNavigation;
