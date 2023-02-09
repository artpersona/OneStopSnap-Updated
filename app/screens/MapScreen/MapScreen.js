/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import MapView, {Marker, Circle} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon} from 'react-native-elements';
import {deviceHeight, deviceWidth, isTablet} from '../../utils/device.utility';
// import { useNavigation } from "@react-navigation/core";
import {Colors} from '../../config';
import {RFValue} from 'react-native-responsive-fontsize';
import {ConfigContext} from '../../shared/context/ConfigContext';
export default function MapScreen({navigation}) {
  // const navigation = useNavigation();
  const mapRef = useRef();
  const googlePlacesRef = useRef(null);
  const [location, setLocation] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [errorMsg, setErrorMsg] = useState(null);
  const {setMapLocation} = useContext(ConfigContext);
  console.log(location);
  useEffect(() => {
    (async () => {
      Geolocation.getCurrentPosition(info => {
        setLocation({
          longitude: info.coords.longitude,
          latitude: info.coords.latitude,
        });
      });
    })();
  }, []);

  const navigateToShop = () => {
    setMapLocation(location);
    navigation.navigate('Shop');
  };

  useEffect(() => {
    if (location) {
      jumpBack();
    }
  }, [location]);

  const jumpBack = () => {
    mapRef.current.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    });
  };

  if (!location) {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* {loading && (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              zIndex: 2,
              opacity: 0.6,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="black" />
          </View>
        )} */}

        <GooglePlacesAutocomplete
          ref={googlePlacesRef}
          renderRightButton={() => (
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: 10,
              }}
              onPress={() => googlePlacesRef.current.clear()}>
              <Icon type="ionicon" name="ios-close-circle" />
            </TouchableOpacity>
          )}
          styles={{
            container: {
              flex: 0,
              marginTop: 20,
              borderBottomColor: 'red',
              borderBottomWidth: 1,
            },
            textInput: {
              fontSize: 14,
            },
          }}
          onPress={(data, details = null) => {
            // console.log("data  is: ", data);
            console.log('details  is: ', details.geometry.location);
            setLocation({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });
          }}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={'search'}
          query={{
            key: 'AIzaSyB_Ek0gcBjgYWYegOIx0bnBc0Q2cOlIa3Y',
            language: 'en',
            radius: 30000,
            location: `${location.latitude}, ${location.longitude}`,
          }}
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
        />

        <MapView.Animated
          showUserLocation={true}
          ref={mapRef}
          style={{height: deviceHeight, width: deviceWidth}}
          mapType="mutedStandard"
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          onPress={event => {
            setLocation({
              latitude: event.nativeEvent.coordinate.latitude,
              longitude: event.nativeEvent.coordinate.longitude,
            });
          }}>
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Origin"
              description="Origin"
              identifier="origin"
              draggable={true}
              onDragStart={e =>
                console.log('drag start', e.nativeEvent.coordinate)
              }
              onDragEnd={e => {
                console.log('drag end', e.nativeEvent.coordinate);
                setLocation({
                  longitude: e.nativeEvent.coordinate.longitude,
                  latitude: e.nativeEvent.coordinate.latitude,
                });
              }}
            />
          )}
          <Circle
            center={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            radius={100}
            fillColor="rgba(0, 0, 255, 0.1)"
            strokeColor="blue"
          />
        </MapView.Animated>

        <View
          style={{
            position: 'absolute',
            bottom: 120,
            right: 20,
            // width: "100%",
          }}>
          <TouchableOpacity
            style={{
              height: 60,
              width: 60,
              borderRadius: 60 / 2,
              backgroundColor: Colors.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={jumpBack}
            activeOpacity={0.4}>
            <MaterialIcons name="my-location" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: Colors.white,
            padding: 20,
          }}>
          <TouchableOpacity
            style={
              location != null
                ? styles.next__button
                : [styles.next__button, {backgroundColor: '#DADADA'}]
            }
            onPress={navigateToShop}
            disabled={location == null}>
            <Text style={styles.next__text}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // eslint-disable-next-line react-native/no-color-literals
  next__button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    borderRadius: isTablet ? 20 : 35,
    elevation: 2,
    justifyContent: 'center',
    padding: isTablet ? 20 : 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: '100%',
  },
  next__text: {
    color: Colors.white,
    fontFamily: 'OpenSans_semiBold',
    fontSize: RFValue(15),
  },
});
