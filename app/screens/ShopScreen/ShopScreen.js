import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import {Theme, Layout, Colors} from '../../config';
import {
  RestaurantList,
  CustomHeader,
  Spinner,
  Advertisements,
} from '../../components';

import styles from './styles';
import {AppContext} from '../../shared/context/AppContext';
import {AuthContext} from '../../shared/context/AuthContext';
import {ConfigContext} from '../../shared/context/ConfigContext';
import ModalView from '../../components/ModalView/ModalView';
import NetInfo from '@react-native-community/netinfo';
import UpdateList from './UpdateList/UpdateList';
import FeaturedResto from './FeaturedRestaurant/FeaturedRestaurant';
import {shuffle} from '../../utils/product.utility';
import FilterOptions from './FilterOptions/FilterOptions';
import {isTablet} from '../../utils/device.utility';
function ShopScreen({navigation}) {
  const {featuredRestaurants, allRestaurants, fetchAllRestaurants, newsFeed} =
    useContext(AppContext);

  const {
    currentLocation,
    currentCityCategory,
    currentMiniCategory,
    cityWideCategories,
  } = useContext(ConfigContext);

  const {loggedUser} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef();

  const [isVisible, setIsVisible] = useState(false);
  let y = 0;
  const [searchValue, setSearchValue] = useState('');
  const [modalState, setModalState] = useState({
    logoName: '',
    showModal: false,
    description: '',
  });

  const [noNetModal, setNoNetModal] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setNoNetModal(true);
      } else {
        if (currentLocation != null) fetchAllRestaurants();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [currentLocation, currentCityCategory, currentMiniCategory, loggedUser]);

  useEffect(() => {
    checkProfile();
  }, [loggedUser]);

  const getNetInfo = () => {
    setNoNetModal(false);

    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        setNoNetModal(true);
      } else {
        if (currentLocation != null) fetchAllRestaurants();
        setNoNetModal(false);
      }
    });
  };

  const checkProfile = () => {
    if (
      loggedUser &&
      (loggedUser?.phoneNumber == undefined ||
        loggedUser?.location_key == undefined)
    ) {
      setModalState({
        showModal: true,
        title: `Hey ${
          loggedUser && loggedUser.displayName !== null
            ? loggedUser.displayName
            : 'there'
        }!`,
        description: `Please complete your personal details for a better experience!`,
      });
    }
  };

  const renderAllRestaurant = ({item, index}) => {
    if (index < 6) {
      return (
        <View style={styles.categoryListContainer}>
          <RestaurantList
            width={Layout.window.width}
            imageUri={item.imageUri}
            name={item.name}
            onPress={() => {
              navigation.navigate('RestaurantScreen', item);
            }}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  const renderFeaturedRestaurant = ({item, index}) => {
    return (
      <FeaturedResto
        imageUri={item.imageUri}
        name={item.name}
        onPress={() => {
          navigation.navigate('RestaurantScreen', item);
        }}
      />
    );
  };

  const moveToProfile = () => {
    setModalState({showModal: false});
    navigation.navigate('Profile');
  };

  const handleScroll = event => {
    y = event.nativeEvent.contentOffset.y;
  };

  const DATA = [
    {title: 'ads', data: [0], name: 'Ads'},

    {title: 'featured', data: [0], name: 'Featured Shops'},
    {title: 'all', data: [1], name: 'All Restaurants'},
    {title: 'product', data: [2], name: 'Featured Products'},
  ];

  const renderItem = ({section, item}) => {
    if (section.title == 'featured') {
      return (
        <>
          {allRestaurants == null ? (
            <Spinner />
          ) : (
            <>
              <View>
                {allRestaurants.length == 0 ? (
                  <Text
                    style={[
                      Theme.center,
                      {marginVertical: 30, color: Colors.darkGray},
                    ]}>
                    No Restaurants Found
                  </Text>
                ) : (
                  <FlatList
                    contentContainerStyle={styles.categoryScrollView}
                    data={featuredRestaurants}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderFeaturedRestaurant}
                    legacyImplementation={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                )}
              </View>
            </>
          )}
        </>
      );
    } else if (section.title == 'all') {
      return (
        <>
          {allRestaurants == null ? (
            <Spinner />
          ) : (
            <>
              <View>
                {allRestaurants.length == 0 ? (
                  <Text
                    style={[
                      Theme.center,
                      {marginVertical: 30, color: Colors.darkGray},
                    ]}>
                    No Restaurants Found
                  </Text>
                ) : (
                  <FlatList
                    contentContainerStyle={[
                      styles.categoryScrollView,
                      {paddingHorizontal: 0},
                    ]}
                    data={shuffle(allRestaurants)}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderAllRestaurant}
                    legacyImplementation={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={!isTablet}
                    snapToAlignment={'center'}
                    scrollEventThrottle={32}
                  />
                )}
              </View>
            </>
          )}
        </>
      );
    } else if (section.title == 'ads') {
      return <Advertisements />;
    } else {
      return (
        <>
          {newsFeed == null ? (
            <Spinner />
          ) : newsFeed.length > 0 ? (
            <UpdateList feeds={newsFeed} key={0} />
          ) : (
            <Text
              style={[
                Theme.center,
                {marginVertical: 30, color: Colors.darkGray},
              ]}>
              No Featured Products Found
            </Text>
          )}
        </>
      );
    }
  };

  const renderSectionHeader = ({section: {title, name}}) => {
    if (title != 'all' && title != 'ads') {
      return (
        <Text
          style={[Theme.listTitle, {marginTop: title == 'product' ? 20 : 10}]}>
          {name}
        </Text>
      );
    } else if (title != 'ads') {
      return (
        <View style={[Theme.rowSpaceBetween, {marginTop: 20}]}>
          <Text style={Theme.listTitle}>All Restaurants</Text>
          <View style={styles.viewAll__container}>
            <Text
              style={Theme.listTitleSmall}
              onPress={() => navigation.navigate('RestaurantListScreen', {})}>
              View All
            </Text>
          </View>
        </View>
      );
    }
  };

  const handleSearchSubmit = () => {
    if (searchValue != '') {
      navigation.navigate('SearchScreen', {data: searchValue});
      setSearchValue('');
    }
  };
  setTimeout(function () {
    setIsLoading(false);
    clearTimeout();
  }, 500);

  if (isLoading) {
    return (
      <>
        <CustomHeader
          isShopScreen={true}
          primaryColor={true}
          showSearchButton={true}
          showFilter={true}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchSubmit={handleSearchSubmit}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="#1080D0" />
        </View>
      </>
    );
  } else {
    return (
      <>
        <ModalView
          visible={modalState.showModal}
          description={modalState.description}
          ok_text="Ok"
          onPress1={() => moveToProfile()}
          width="85%"
          title={modalState.title}
          animation="bounceIn"
          // logoName={modalState.logoName}
          logoColor="#ffdd00"
        />

        <ModalView
          visible={noNetModal}
          description="Can't connect to internet. Please refresh the app or try again later."
          // description="The server encountered an unexpected error. Please refresh the app or try again later."
          ok_text="Refresh"
          onPress1={getNetInfo}
          width="85%"
          title="Opps, something went wrong"
          animation="bounceIn"
          logoName="error"
          logoColor="#ffdd00"
        />

        <CustomHeader
          isShopScreen={true}
          primaryColor={false}
          showSearchButton
          showFilter={true}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchSubmit={handleSearchSubmit}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <View style={styles.container} renderToHardwareTextureAndroid={true}>
          <View
            style={{
              marginBottom: '2%',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <View style={styles.topFilters}>
              <FlatList
                data={
                  currentMiniCategory.length > 0
                    ? currentMiniCategory
                    : cityWideCategories
                }
                renderItem={({item, index}) => {
                  return (
                    <FilterOptions
                      item={item}
                      key={index.toString()}
                      mini={currentMiniCategory.length > 0}
                    />
                  );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{paddingHorizontal: '5%'}}
                ItemSeparatorComponent={() => (
                  <View style={{paddingHorizontal: '0.5%'}} />
                )}
              />
            </View>
          </View>

          <SectionList
            stickyHeaderIndices={[0]}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            sections={DATA}
            ref={scrollRef}
            onScroll={handleScroll}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* <FAB
          style={styles.fab}
          icon="arrow-up"
          color={"white"}
          onPress={onPressTouch}
        /> */}
      </>
    );
  }
}

export default React.memo(ShopScreen);
