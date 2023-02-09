import React from 'react';
import {StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FirebaseProvider from '../../shared/context/FirebaseContext';
import ConfigProvider from '../../shared/context/ConfigContext';
import AppProvider from '../../shared/context/AppContext';
import AuthProvider from '../../shared/context/AuthContext';
import PromoProvider from '../../shared/context/PromoContext';
import {MainNavigation} from '../../routes/';
import {Colors} from '../../config';

export default function Main() {
  // TODO:: Transfer here the homestack from homescreen

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={Colors.primary}
      />
      <FirebaseProvider>
        <ConfigProvider>
          <AuthProvider>
            <AppProvider>
              <PromoProvider>
                <NavigationContainer>
                  <MainNavigation />
                  {/* <Text>Hello World!</Text> */}
                </NavigationContainer>
              </PromoProvider>
            </AppProvider>
          </AuthProvider>
        </ConfigProvider>
      </FirebaseProvider>
      {/* <MainNavigation /> */}
    </>
  );
}
