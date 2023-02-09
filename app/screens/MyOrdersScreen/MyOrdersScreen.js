import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Theme} from '../../config';
import {CustomHeader, Empty, Spinner, VirtualizedView} from '../../components';
import {sortBy} from 'lodash';

import styles from './styles';

import LatestOrder from './components/LatestOrder';
import {AuthContext} from '../../shared/context/AuthContext';
import {FirebaseContext} from '../../shared/context/FirebaseContext';

function MyOrdersScreen() {
  const {database} = useContext(FirebaseContext);
  const {loggedUser} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  // refactor

  const fetchOrders = () => {
    setIsLoading(true);
    if (loggedUser.email) {
      database()
        .ref('orders')
        .orderByChild('info/user_email')
        .equalTo(loggedUser.email)
        .on('value', snapshot => {
          const ordersObject = (snapshot && snapshot.val()) || {};

          let ordersArray =
            (ordersObject &&
              Object.entries(ordersObject) &&
              Object.entries(ordersObject).length &&
              Object.entries(ordersObject).map(item => {
                item[1].key = item[0];
                return item[1];
              })) ||
            [];
          ordersArray = sortBy(ordersArray, ['ordered_at'], ['desc']);
          setIsLoading(false);

          setOrders(ordersArray);
        });
    } else if (loggedUser.phoneNumber) {
      database()
        .ref('orders')
        .orderByChild('info/phone')
        .equalTo(loggedUser.phoneNumber)
        .on('value', snapshot => {
          const ordersObject = (snapshot && snapshot.val()) || {};

          let ordersArray =
            (ordersObject &&
              Object.entries(ordersObject) &&
              Object.entries(ordersObject).length &&
              Object.entries(ordersObject).map(item => {
                item[1].key = item[0];
                return item[1];
              })) ||
            [];
          ordersArray = sortBy(ordersArray, ['ordered_at'], ['desc']);
          setIsLoading(false);

          setOrders(ordersArray);
        });
    } else {
      setIsLoading(false);
      setOrders([]);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const renderLatestOrder = ({item}) => {
    return <LatestOrder order={item} />;
  };

  const keyExtract = item => {
    return item.tracking_code.toString();
  };

  return (
    <>
      <View style={Theme.screenContainer}>
        <CustomHeader showBackButton />
        {isLoading ? (
          <Spinner />
        ) : (
          <View style={Theme.screenInnerContainer}>
            <VirtualizedView>
              <Text
                style={[
                  Theme.listTitleLarge,
                  {paddingHorizontal: 0, marginVertical: '5%'},
                ]}>
                My Orders
              </Text>

              <View style={styles.latestContainer}>
                <FlatList
                  data={orders}
                  listKey={item => item.tracking_code.toString()}
                  keyExtractor={keyExtract}
                  renderItem={renderLatestOrder}
                  ListEmptyComponent={
                    <Empty message="No Latest Order found." />
                  }
                />
              </View>
            </VirtualizedView>
          </View>
        )}
      </View>
    </>
  );
}

export default React.memo(MyOrdersScreen);
