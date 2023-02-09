// import "firebaseui/dist/firebaseui.css";
import React, {createContext, useContext, useState, useEffect} from 'react';
// import { AppContext } from "./AppContext";
import {FirebaseContext} from './FirebaseContext';
export const PromoContext = createContext();
const PromoProvider = ({children}) => {
  const {database} = useContext(FirebaseContext);
  // const { orders } = useContext(AppContext);
  const [promoCodes, setPromoCodes] = useState(null);

  const fetchPromoCodes = () => {
    const dbRef = database().ref('discounts');
    dbRef.on('value', snapshot => {
      const result = snapshot.val();
      let promoCodes = Object.entries(result).map(item => {
        item[1].key = item[0];
        return item[1];
      });

      setPromoCodes(promoCodes);
    });
  };

  useEffect(() => {
    fetchPromoCodes();
  }, []);

  const applyPromoCode = (stores, code, activeVouchers) => {
    const today = new Date();
    // Check if voucher is expired
    const date_limit_exceed = (dateLimit, td) => dateLimit < td;
    const returnData = {
      status: '',
      value: 0,
      category: '',
      key: '',
      code: '',
      store_id: '',
      store_name: '',
    };
    promoCodes.map(item => {
      if (item.code == code) {
        stores.map(store => {
          if (store == item.store_id) {
            const dateLimit = new Date(item.date_limit);
            if (date_limit_exceed(dateLimit, today)) {
              returnData.status = 'error';
              returnData.category = 'expired';
            } else {
              // Check if code was already used
              const codeApplied = activeVouchers.find(e => e.code == item.code);

              if (codeApplied) {
                returnData.status = 'error';
                returnData.category = 'used';
              } else {
                const oneCodePerStore = activeVouchers.find(
                  e => e.store_id == item.store_id,
                );
                if (oneCodePerStore == undefined) {
                  database()
                    .ref('categories/' + item.store_id)
                    .once('value', snapshot => {
                      if (snapshot.val()) {
                        const store = snapshot.val();
                        const store_name = store.name;
                        returnData.key = item.key;
                        returnData.code = item.code;
                        returnData.status = 'success';
                        returnData.store_id = item.store_id;
                        returnData.value = item.value;
                        returnData.store_name = store_name;
                        returnData.name = item.name;
                      }
                    });
                } else {
                  returnData.status = 'error';
                  returnData.category = 'store_exists';
                }
              }
            }
          } else {
            returnData.status = 'error';
            returnData.category = 'store_not_exists';
          }
        });
      }
    });

    return returnData;
  };

  const payload = {promoCodes, applyPromoCode};
  return (
    <PromoContext.Provider value={payload}>{children}</PromoContext.Provider>
  );
};

export default PromoProvider;
