import { groupBy, orderBy } from "lodash";

export const groupProducts = (products, field) => {
  const orderName = orderBy(products, field, ["asc"]).filter(
    (e) => e[field] !== "undefined"
  );

  const groupLname = groupBy(orderName, (item) => item[field]?.toString());
  let newArray = [];
  for (const [key, value] of Object.entries(groupLname)) {
    if (key !== "undefined") {
      newArray = [...newArray, { title: key, data: value }];
    }
  }

  const sortedUsers = orderBy(newArray, [(item) => item.title], ["asc"]);

  return sortedUsers;
};

export const groupProductsMini = (products, field) => {
  const groupLname = groupBy(products, (item) => item[field]?.toString());
  let newArray = [];
  for (const [key, value] of Object.entries(groupLname)) {
    if (key !== "undefined") {
      newArray = [...newArray, { title: key, data: value }];
    }
  }
  return newArray;
};

export const splitArray = (array) => {
  const rows = array.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return rows;
};

export const getProductCategories = (products) => {
  const categories = new Set();

  products.map((item) => {
    return categories.add(item.product_category_name);
  });

  return [...categories];
};

export const generateRandomString = (length, chars) => {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

export const getOrderStoreIds = (orders) => {
  let data = orders.map((item) => item.store_id);
  return [...new Set(data)];
};

export const getCurrentPrice = (product) => {
  if (product.is_price_margin) {
    if (product.discount_status == "on") {
      return product.discountSellingPrice;
    } else {
      return product.price;
    }
  } else {
    if (product.discount_status == "on") {
      return product.discountPrice != ""
        ? product.discountPrice
        : product.storePrice;
    } else {
      return product.storePrice;
    }
  }
};

export const getStoresInfo = (storeIds, allStores, location) => {
  const storeDetails = [];
  allStores.map((store) => {
    if (storeIds.includes(store.id)) {
      storeDetails.push({
        store_address: store.store_address,
        store_barangay: location,
        store_id: store.id,
        store_name: store.name,
        store_load: store.store_load,
      });
    }
  });
  return storeDetails;
};

export const getSubTotal = (orders) => {
  let total = 0;

  orders.map((item) => {
    total += parseInt(item.subtotal);
  });

  return total;
};

export const getStoreName = (id, resto) => {
  let storeName = "";
  resto.map((item) => {
    if (item.id == id) {
      storeName = item.name;
    }
  });

  return storeName;
};

export const getTotalByStores = (orders) => {
  const totalByStores = [];
  const groupedData = Object.entries(groupBy(orders, "store_id"));

  groupedData.map((item) => {
    const storeID = item[0];
    let total = 0;
    item[1].map((item) => {
      total += item.subtotal;
    });

    totalByStores.push({ store_id: storeID, total });
  });

  return totalByStores;
};

export const getTotalByStoresObject = (orders) => {
  const totalByStores = {};
  const groupedData = Object.entries(groupBy(orders, "store_id"));

  groupedData.map((item) => {
    const storeID = item[0];
    let total = 0;
    item[1].map((item) => {
      total += item.subtotal;
    });
    totalByStores[`${storeID}`] = total;
  });

  return totalByStores;
};

export const getTotalAddonsAndOptions = (product) => {
  let totalOptions = 0;
  let totalAddOns = 0;

  if (product.selectedOption)
    totalOptions += parseInt(product.selectedOption.amount);

  if (product.selectedAddOn && product.selectedAddOn.length > 0) {
    product.selectedAddOn.map((item) => {
      totalAddOns += item.amount * item.quantity;
    });
  }

  return { totalOptions, totalAddOns };
};

export const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
