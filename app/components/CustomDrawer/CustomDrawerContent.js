/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import LinearGradient from 'react-native-linear-gradient';
import {View, Image, Button, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import {Storage} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../shared/context/AuthContext';
import {AppContext} from '../../shared/context/AppContext';
import {ModalLoading} from '../../components/ModalView/ModalView';
import {Colors} from '../../config';

function CustomDrawerContent(props) {
  const {state, descriptors, navigation, style} = props;
  let lastGroupName = '';
  let newGroup = true;

  const {loggedUser, setToken, setLoggedUser, saveCustomerOrder, logout} =
    useContext(AuthContext);
  const {orders, setOrders, setCartOrders} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    saveCustomerOrder(orders);

    try {
      setLoggedUser(null);
      setOrders([]);
      setCartOrders([]);
      await Storage.removeUserData();
      await Storage.removeItem('orders');

      await logout(
        setTimeout(() => {
          navigation.reset({index: 0, routes: [{name: 'Welcome'}]});
        }, 1000),
      );
    } catch (e) {
      console.log(' custom drawer content error ', e);
    }
    setToken('');
  };

  return (
    <LinearGradient colors={[Colors.primary, Colors.primary]} style={{flex: 1}}>
      <View style={styles.iconContainer}>
        {/* START:: Close drawer button */}
        <View style={styles.buttonContainer}>
          {/* <Button
            transparent
            activeOpacity={0.5}
            onPress={() => navigation.closeDrawer()}>
            <Icon
              name="chevron-left"
              size={40}
              color="#FFF"
              style={(styles.closeIcon, style)}
            />
          </Button> */}
        </View>
      </View>

      <View style={styles.profileContainer}>
        {loggedUser ? (
          <>
            <View style={styles.imageContainer}>
              <Image
                source={
                  loggedUser?.photoURL
                    ? {
                        uri: loggedUser.photoURL,
                      }
                    : require('../../assets/avatar/noimage.jpg')
                }
                style={styles.image}
              />
            </View>

            <View style={styles.drawerItemContainer}>
              <Text style={styles.userName}>{loggedUser.displayName}</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.loginText}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  navigation.navigate('Signup');
                  navigation.closeDrawer();
                }}>
                <Text style={styles.userName}>Login </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      <View style={styles.border} />

      {loggedUser ? (
        <DrawerContentScrollView {...props} style={{paddingHorizontal: 20}}>
          {state.routes.map((route, index) => {
            const {drawerLabel, activeTintColor, groupName} =
              descriptors[route.key].options;

            if (lastGroupName !== groupName) {
              newGroup = true;
              lastGroupName = groupName;
            } else newGroup = false;
            return (
              <React.Fragment key={route.key}>
                {newGroup ? (
                  <View style={styles.sectionContainer} key={index}>
                    <Text key={groupName} style={styles.sectionHeader}>
                      {groupName}
                    </Text>
                    {groupName && <View style={styles.sectionLine} />}
                  </View>
                ) : null}
                <DrawerItem
                  key={route.key}
                  label={`${drawerLabel}`}
                  labelStyle={styles.labelStyle}
                  focused={
                    state.index ===
                    state.routes.findIndex(e => e.name === route.name)
                  }
                  activeTintColor={activeTintColor}
                  onPress={() => navigation.navigate(route.name)}
                />
              </React.Fragment>
            );
          })}

          {/* <DrawerItemList {...props} labelStyle={styles.labelStyle} /> */}
          <DrawerItem
            label="Log Out"
            labelStyle={styles.labelStyle}
            onPress={handleLogout}
          />
        </DrawerContentScrollView>
      ) : null}

      <ModalLoading visible={isLoading} loading message={'Logging Out'} />
    </LinearGradient>
  );
}

export default React.memo(CustomDrawerContent);
