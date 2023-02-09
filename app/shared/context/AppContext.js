import React, {createContext, useEffect, useState, useContext} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';

import {FirebaseContext} from './FirebaseContext';
import {AuthContext} from './AuthContext';
import {ConfigContext} from './ConfigContext';
import {Storage} from '../../utils';
import {
  generateRandomString,
  getOrderStoreIds,
  getStoresInfo,
  getTotalByStores,
} from '../../utils/product.utility';

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [trackingCode, setTrackingCode] = useState();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cartOrders, setCartOrders] = useState([]);
  const [areProductsLoaded, setAreProductsLoaded] = useState(false);

  const [totalGoods, setTotalGoods] = useState(0);
  const [tempTotalGoods, setTempTotalGoods] = useState(0);
  const [totalShipping, setTotalShipping] = useState(null);

  const [activeStores, setActiveStores] = useState([]);
  const [storesCategories, setStoresCategories] = useState([]);
  const [restaurantProducts, setRestaurantProducts] = useState([]);
  const [individualOrder, setIndividualOrder] = useState([]);

  const [allRawRestaurants, setRawRestaurants] = useState(null);
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [featuredRestaurants, setFeaturedRestaurants] = useState(null);
  const [isSuccessSubmitOrder, setIsSuccessSubmitOrder] = useState(false);

  const [locationBranches, setLocationBranches] = useState(null);

  const [resellerCategories, setResellerCategories] = useState([]);
  const [placeholderOrders, setPlaceHolderOrders] = useState(null);

  const [productStocks, setProductStocks] = useState({});

  const [activeVouchers, setActiveVouchers] = useState([]);
  const [voucherTotal, setVoucherTotal] = useState(0);

  const [advertisements, setAdvertisements] = useState([]);

  // Sureplus Notif
  const [newsFeed, setNewsFeed] = useState(null);
  const [modalState, setModalState] = useState({
    message: '',
    logoName: '',
    showModal: false,
  });

  const {database, storage} = useContext(FirebaseContext);
  const {loggedUser, saveCustomerOrder} = useContext(AuthContext);
  const {
    currentLocation,
    currentCityCategory,
    currentMiniCategory,
    mapLocation,
  } = useContext(ConfigContext);

  const [productItemData, setProductItemData] = useState({});

  const addOrderImage = (image, store) => {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      let store_id = store.key;
      let orderList = {...orders};

      orderList = [
        ...orders,
        {
          image: true,
          name: image.uri,
          uri: image.uri,
          store_id,
        },
      ];
      resolve();
      setOrders([...orderList]);
      setCartOrders([...orderList]);

      Storage.save('orders', orderList);
    });
  };

  useEffect(() => {
    // loadLocation();
    fetchResellerCategories();
    fetchRestaurantsData();
    fetchAdvertisements();
  }, []);

  useEffect(() => {
    if (loggedUser && loggedUser?.orders) {
      setOrders(loggedUser.orders);
      setCartOrders(loggedUser.orders);
    }
  }, [loggedUser]);

  const updateOrderStock = () => {
    products.map(product => {
      const updatedOrders = orders.map(order => {
        if (order.key === product.key) {
          order = {...order, stock: product.stock};
        }
        return order;
      });
      Storage.save('orders', updatedOrders);
      setCartOrders(updatedOrders);

      return setOrders(updatedOrders);
    });
  };

  const fetchStore = id => {
    console.log('id is: ', id);
    return new Promise((resolve, reject) => {
      database()
        .ref('categories')
        .orderByChild('key')
        .equalTo(String(id))
        .on('value', snapshot => {
          if (snapshot.val()) {
            const storeObject = snapshot.val();
            let storeArray = Object.entries(storeObject).map(item => {
              item[1].key = item[0];
              return item[1];
            });
            resolve(storeArray[0]);
          }
          reject('error this');
        });
    });
  };

  const fetchProducts = () => {
    database()
      .ref('products')
      .once('value', async snapshot => {
        if (snapshot.val()) {
          const productsObject = await snapshot.val();

          let productsArray = Object.entries(productsObject).map(item => {
            item[1].key = item[0];
            return item[1];
          });

          if (productsArray.length > 0) {
            productsArray = productsArray.map(product => {
              let tempOrder = {};
              tempOrder = _.find(orders, order => order.key === product.key);
              product = {
                ...product,
                quantity: (tempOrder && tempOrder.quantity) || 0,
                main_stock: product?.stock,
              };
              return product;
            });
          }

          if (
            areProductsLoaded ||
            activeStores.length > 0 ||
            locationBranches
          ) {
            locationProducts(activeStores, locationBranches, productsArray);
          } else {
            setProducts(productsArray);
          }
        } else {
          setProducts([]);
        }
      });
  };

  const locationProducts = (
    stores = activeStores,
    primaryKeys = locationBranches,
    tempProducts = [...products],
  ) => {
    tempProducts = tempProducts.map(product => {
      if (stores.includes(product.store_id)) {
        let tempStocks = primaryKeys[`${product.store_id}`];

        product = {
          ...product,
          stock: product.main_stock[`${tempStocks}`],
          stock_branch: tempStocks,
        };
      }

      return product;
    });

    // stock: product.stock[`${tempStocks}`],
    setProducts(tempProducts);
    setAreProductsLoaded(true);
  };

  const updateProducts = (key, quantity, stock) => {
    const isSelected = quantity != 0;
    const updatedList = products.map(product => {
      if (product.key === key)
        product = {...product, quantity, stock, isSelected};
      return product;
    });
    setProducts(updatedList);
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchStoresCategory = () => {
    const dbRef = database().ref('categories');
    dbRef.on('value', snapshot => {
      const result = snapshot.val();

      const response = Object.keys(result).map(e => {
        // if (index === 0) {
        // }
        result[e].key = e;
        return result[e];
      });

      setStoresCategories(response);
    });
  };

  const getAllFeeds = () => {
    let feedProducts = null;
    if (products) {
      feedProducts = products.filter(
        item =>
          item.newsfeed === 'on' &&
          item.stock != 0 &&
          allRestaurants &&
          allRestaurants.filter(e => e.id === item.store_id).length > 0,
      );
    }

    var feedsFromShops = [];
    // allRestaurants?.forEach((shop) => {
    //   var newsfeed = shop.newsfeed;
    //   if (newsfeed !== undefined) {
    //     var feedOne = formatNewsfeed(newsfeed, shop.key);
    //     feedsFromShops = feedsFromShops.concat(feedOne);
    //   }
    // });

    feedsFromShops = feedsFromShops.filter(
      item => item.newsfeed_status === 'Enabled',
    );

    var finalFeeds = feedsFromShops
      .concat(feedProducts)
      .sort(
        (x, y) => new Date(y.newsfeed_update) - new Date(x.newsfeed_update),
      );

    return finalFeeds;
  };

  const getShopInfo = id => {
    if (id) {
      var shop = allRestaurants?.find(shop => shop.id === id);

      if (shop) return {name: shop.name, file: shop.imageUri};
    }
  };

  const fetchAllRestaurants = () => {
    setAreProductsLoaded(false);
    let response = [...allRawRestaurants];
    response = response.filter(
      item =>
        item.location_keys && item.location_keys.includes(currentLocation.key),
    );

    if (currentCityCategory.length > 0) {
      response = response.filter(item => {
        return currentCityCategory.some(data => data.key == item.city_tag);
      });
    }

    if (currentMiniCategory.length > 0) {
      response = response.filter(item => {
        // return item.mini_tag === currentMiniCategory.key;
        return currentMiniCategory.some(data => data.key == item.mini_tag);
      });
    }

    const primaryBranches = {};
    const tempStores = [];

    response.map(store => {
      tempStores.push(store.id);
      const data = store.location[currentLocation.key];
      const prodKey =
        data?.primary_branch != undefined ? data.primary_branch : store.id;
      primaryBranches[store.id] = prodKey;
    });
    setLocationBranches(primaryBranches);
    setActiveStores(tempStores);

    let featuredResto = [...response];
    featuredResto = featuredResto.filter(item => item.is_featured == true);
    locationProducts(tempStores, primaryBranches);
    setFeaturedRestaurants(featuredResto);
    setAllRestaurants(response);
  };

  const fetchRestaurantsData = () => {
    const dbRef = database().ref('categories').orderByChild('location_key');

    dbRef.on('value', snapshot => {
      const result = snapshot.val();
      if (result) {
        var response = Object.keys(result).map(e => {
          const restaurantList = {
            imageUri: result[e].file,
            id: (result[e].key = e),
            name: result[e].name,
            address: {
              name: result[e].address,
              longitude: result[e].longitude,
              latitude: result[e].latitude,
            },
            location_keys: result[e].location_keys,
            city_tag: result[e].city_tag,
            mini_tag: result[e].mini_tag,
            is_featured: result[e].is_featured,
            store_shift_start: result[e].store_shift_start,
            store_shift_end: result[e].store_shift_end,
            storeOpen: result[e].storeOpen,
            store_address: result[e].store_address,
            store_barangay: result[e].store_barangay,
            store_load: result[e].store_load,
            min_order: result[e].min_order,
            free_del_amount: result[e].free_del_amount,
            toggle_free_del_amount: result[e].toggle_free_del_amount,
            location: result[e].location,
            store_banners: result[e].store_banners,
          };
          result[e].key = e;
          return restaurantList;
        });

        setRawRestaurants(response);
      } else {
        setRawRestaurants([]);
      }
    });
  };

  const copyQuantityFromOrdersToProducts = () => {
    const list = products.map(product => {
      if (orders && orders.length) {
        var arrObj = [];
        let tempOrders = [...orders];
        tempOrders = tempOrders.sort((a, b) => {
          return a.stock - b.stock;
        });
        tempOrders.map(order => {
          if (!arrObj.includes(order.name)) {
            arrObj.push(order.name);
            if (product.key == order.key) {
              product = {...product, stock: order.stock};
            }
          }
        });
      }
      return product;
    });
    setProducts(list);
  };

  useEffect(() => {
    handleCartSummary();
  }, [orders, placeholderOrders]);

  useEffect(() => {
    if (areProductsLoaded) {
      copyQuantityFromOrdersToProducts();
    }
  }, [areProductsLoaded]);

  useEffect(() => {
    if (areProductsLoaded) {
      setNewsFeed(getAllFeeds());
    }
  }, [allRestaurants]);

  const handleCartSummary = () => {
    var sumGoods = 0;
    orders.map(order => {
      order.subtotal && (sumGoods += order.subtotal);
    });

    setTotalGoods(sumGoods);
  };

  const getOrders = async () => {
    const getOrders = await Storage.get('orders');
    if (getOrders) {
      setOrders(getOrders);
      setCartOrders(getOrders);

      updateOrderStock();
    }
  };

  const addOrderAdditionals = order => {
    var orderList = orders;
    orderList = [
      ...orderList,
      {
        ...order,
        key: order.key,
        location_key: currentLocation.key,
        location_name: currentLocation.name,
        quantity: order.quantity,
        kilo:
          order.unit === 'kg'
            ? quantity
            : order.unit === 'piece' ||
              order.unit === 'bundle' ||
              order.unit === 'tray' ||
              order.unit === 'set'
            ? order.kgPerPiece * order.quantity
            : order.quantity / 1000,
        subtotal: order.subtotal,
      },
    ];

    updateDuplicateStocks(order, orderList);
    setIndividualOrder('');
    updateProducts(order.key, order.quantity, order.stock);
    if (loggedUser) saveCustomerOrder(orderList);
  };

  const addOrderSummary = (order, index) => {
    let orderList = [...orders];
    orderList[index] = order;
    orderList = orderList.map(item => {
      item.key = item.item_key;
      return item;
    });
    setOrders(orderList);
    Storage.save('orders', orderList);
    if (loggedUser) saveCustomerOrder(orderList);
    updateProducts(order.item_key, order.quantity, order.stock);
  };

  const updateDuplicateStocks = (product, orderList) => {
    let tempOrders = orderList.map(order => {
      if (order.key == product.key) {
        order.stock = product.stock;
      }
      return order;
    });
    setOrders(tempOrders);
    setCartOrders(tempOrders);

    Storage.save('orders', tempOrders);
  };

  const removeOrder = (index, product) => {
    let orderList = [...orders];
    let newStock = product.stock + product.quantity;
    product.stock = newStock;
    updateProducts(product.key, 0, newStock);
    orderList.splice(index, 1);

    updateDuplicateStocks(product, orderList);
  };

  const updateProductStocks = ({key, quantity, prevQuantity}) => {
    let productData = {};
    const product = products.find(prod => prod.key === key);
    if (!product) return;
    let tempStock = parseInt(product.stock, 10);
    product.main_stock[`${product.stock_branch}`] = tempStock;
    productData[`products/${key}/stock`] = product.main_stock;
    delete productData.main_stock;
    database().ref().update(productData);
  };

  const completeOrder = () => {
    var arrObj = [];

    let tempOrders = orders.sort((a, b) => {
      return a.stock - b.stock;
    });
    tempOrders.map(order => {
      if (!arrObj.includes(order.name)) {
        arrObj.push(order.name);
        if (!order.image) {
          updateProducts(order.key, 0, order.stock);
          updateProductStocks({key: order.key, quantity: order.quantity});
        }
      }
    });

    saveCustomerOrder([]);
    setOrders([]);
    setCartOrders([]);
    setTotalGoods(0);
    setTempTotalGoods(0);
    setActiveVouchers([]);
    setVoucherTotal(0);
    Storage.removeItem('orders');
  };

  const uploadImage = async (image, key) => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch(image.uri);
      const blob = await response.blob();
      var ref = storage.ref().child(`images/${key}/${image.name}`);
      await ref.put(blob);

      ref
        .getDownloadURL()
        .then(url => {
          resolve(url);
        })
        .catch(err => reject(err));
    });
  };

  const generateBranchLog = branchKey => {
    let branchLog = [];
    branchKey.map(item => {
      branchLog.push({
        action: 1,
        store_id: item.store_id,
        branch_key: item.branch_key,
        dt_created: moment().format('MMM DD, YYYY h:mm a'),
      });
    });

    return branchLog;
  };

  const generateStatus = (type, keyStoreId) => {
    const stats = keyStoreId.map(item => {
      if (type === 'is_preparing') {
        return {store_id: item, status: true};
      }
      return {store_id: item, status: 'processing'};
    });
    return stats;
  };

  const submitOrder = async (
    deliveryData,
    branchKey,
    keyStoreId,
    promoCodes,
  ) => {
    var orderKey = database().ref().child('orders').push().key;
    const tracking_code = generateRandomString(
      8,
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-',
    );

    let tempOrders = [...orders];

    const imageArr = tempOrders.filter(item => item.image);

    if (imageArr.length > 0) {
      await Promise.all(
        tempOrders.map(async order => {
          if (order.image) {
            await uploadImage(order, orderKey).then(url => {
              order.uri = url;
              order.name = url;
            });
            return order;
          }
        }),
      );
    }

    setTrackingCode(tracking_code);

    const branch_log = generateBranchLog(branchKey);
    const storeInfo = getStoresInfo(
      getOrderStoreIds(orders),
      allRestaurants,
      currentLocation.name,
    );
    const totalPerStore = getTotalByStores(orders);

    deliveryData.storeInfo = storeInfo;

    const pay_method =
      deliveryData.payment_method == 'COD'
        ? 'Cash on Delivery'
        : deliveryData.payment_method;

    const overAllTotal =
      parseInt(totalGoods) + parseInt(totalShipping.customerTotal);

    const totalDiscount = {
      data: activeVouchers,
      totalDiscount: voucherTotal,
    };

    const newList = {
      tracking_code: tracking_code,
      items: tempOrders,
      branch_key: branchKey,
      branch_log: branch_log,
      keyStoreId,
      total_goods: overAllTotal.toFixed(2),
      total_shipping: totalShipping,
      info: {...deliveryData},
      is_preparing: generateStatus('is_preparing', keyStoreId),
      ordered_at: moment().format('MMM DD, YYYY h:mm a'),
      payment_method: pay_method,
      cod_notes: deliveryData.cod_notes,
      key: orderKey,
      status: generateStatus('stats', keyStoreId),
      ordered_by: loggedUser ? loggedUser.displayName : deliveryData.full_name,
      user_location: mapLocation,
      totalDiscount: totalDiscount,
    };
    let orderInfo = {};
    orderInfo[`orders/${orderKey}`] = newList;

    updateStoreLoadHelper(storeInfo, totalPerStore)
      .then(() => {
        database()
          .ref()
          .update(orderInfo)
          .then(() => {
            totalDiscount.data.map(dis => {
              const listDis = promoCodes.find(e => e.key === dis.key);

              // deduct 1 on balance per discount
              listDis.balance = parseInt(listDis.balance - 1);
              let updates = {};
              updates['discounts/' + listDis.key] = listDis;

              database()
                .ref()
                .update(updates)
                .then(() => {
                  completeOrder();
                });
            });
          });

        completeOrder();
      })
      .catch(err => console.log('catch error sa store helper!', err));
  };

  const updateStoreLoadHelper = async (storeInfos, totalPerStore) => {
    return new Promise(async (resolve, reject) => {
      await Promise.all(
        totalPerStore.map(async item => {
          storeInfos.map(data => {
            if (item.store_id == data.store_id) {
              updateStoreLoad(
                item.subtotal,
                data.store_load,
                item.store_id,
              ).catch(err => {
                reject(err);
              });
            }
          });
        }),
      );
      resolve();
    });
  };

  const updateStoreLoad = (totalAmount, storeLoad, storeId) => {
    let loadDiff = 0;

    totalAmount = parseInt(totalAmount);
    storeLoad = parseInt(storeLoad);

    switch (true) {
      case totalAmount >= 0 && totalAmount <= 99:
        loadDiff = 5;
        break;
      case totalAmount >= 100 && totalAmount <= 299:
        loadDiff = 10;
        break;
      case totalAmount >= 300 && totalAmount <= 499:
        loadDiff = 15;
        break;
      case totalAmount >= 500 && totalAmount <= 699:
        loadDiff = 20;
        break;
      case totalAmount >= 700 && totalAmount <= 999:
        loadDiff = 30;
        break;
      default:
        loadDiff = 50;
        break;
    }

    storeLoad = storeLoad - loadDiff;

    return new Promise((resolve, reject) => {
      database()
        .ref(`categories/${storeId}`)
        .update({store_load: storeLoad})
        .then(() => {
          resolve();
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  };

  const fetchResellerCategories = () => {
    database()
      .ref('reseller_category')
      .on('value', snapshot => {
        if (snapshot.val()) {
          const storeObject = snapshot.val();
          let resellerCats = Object.entries(storeObject).map(item => {
            item[1].key = item[0];
            return item[1];
          });
          setResellerCategories(resellerCats);
        }
      });
  };

  const submitResellerApplicaton = data => {
    var applicationKey = database().ref().child('orders').push().key;
    let applicationInfo = {};
    data.key = applicationKey;
    applicationInfo[`reseller_application/${applicationKey}`] = data;
    return new Promise((resolve, reject) => {
      database
        .ref()
        .update(applicationInfo)
        .then(() => {
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  const fetchAdvertisements = () => {
    database()
      .ref('in_app_advertisements')
      .on('value', snapshot => {
        if (snapshot.val()) {
          const advertisementObjects = snapshot.val();
          let advertisements = Object.entries(advertisementObjects).map(
            item => {
              item[1].key = item[0];
              return item[1];
            },
          );
          setAdvertisements(advertisements);
        }
      });
  };

  const payload = {
    orders,
    products,
    submitOrder,
    isSuccessSubmitOrder,
    setIsSuccessSubmitOrder,
    totalGoods,
    tempTotalGoods,
    setTempTotalGoods,
    totalShipping,
    fetchStoresCategory,
    storesCategories,

    placeholderOrders,
    setPlaceHolderOrders,

    featuredRestaurants,
    fetchAllRestaurants,
    allRestaurants,

    individualOrder,
    setIndividualOrder,
    addOrderAdditionals,

    fetchStore,

    restaurantProducts,
    setRestaurantProducts,
    handleCartSummary,

    modalState,
    setModalState,
    setOrders,
    cartOrders,
    setCartOrders,
    trackingCode,

    productItemData,
    setProductItemData,
    setTotalShipping,

    addOrderImage,
    removeOrder,

    newsFeed,
    getAllFeeds,
    getShopInfo,

    resellerCategories,
    submitResellerApplicaton,
    copyQuantityFromOrdersToProducts,

    productStocks,
    setProductStocks,

    addOrderSummary,

    activeVouchers,
    setActiveVouchers,
    voucherTotal,
    setVoucherTotal,

    advertisements,
  };

  return <AppContext.Provider value={payload}>{children}</AppContext.Provider>;
};

// export default withRouter(AppProvider);
export default React.memo(AppProvider);
