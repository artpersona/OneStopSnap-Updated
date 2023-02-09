import React from "react";
import { Platform } from "react-native";
import moment from "moment";

import { Options, Variables } from "../../config";
import Storage from "./Storage";

export const formattedDateDisplay = (date) => {
  return moment(date).format("ddd, MMMM Do YYYY, h:mm A");
};

export const formattedShortDateDisplay = (date) => {
  return moment(date).format("MMMM DD, YYYY");
};

export const formattedShortMonthDateDisplay = (date) => {
  return moment(date).format("MMM DD, YYYY");
};

export const formattedDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
}

export const getRawDate = (formattedDate) => {
  const [year, month, day] = formattedDate.split("-")
  return new Date(year, month - 1, day);
}

export const getImageName = (image) => {
  let resultSplit = image.uri.split("/");
  return resultSplit[resultSplit.length - 1];
};

export const getURLParams = (params) => {
  let url = "";

  Object.keys(params).forEach((key) => {
    if (url.includes("?")) {
      url += `&${key}=${params[key]}`;
    } else {
      url += `?${key}=${params[key]}`;
    }
  });

  return url;
};

/**
 * Accepts response object and checks if it is successful
 * @param {object} response
 * @returns {boolean} true if status code is between 200-300
 */
export const isResponseSuccessful = (response) => {
  return response.status >= 200 && response.status <= 300;
};

export const isCloseToBottom = (
  { layoutMeasurement, contentOffset, contentSize },
  hasTab
) => {
  let bottomOffset = 0;
  if (hasTab) {
    bottomOffset = 24;
  }
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - bottomOffset
  );
};

export const isValidUrl = (url) => {
  return /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(
    url
  );
};

export const resetKeyboardOffset = () => {
  return Platform.select({
    ios: () => 0,
    android: () => -300,
  })();
};

/**
 * Truncates a text depending on the specified length
 * @param {string} input text to be truncated
 * @param {integer} maxLength maximum number of words before truncating
 * @returns {string} truncated text
 */
export const logOut = () => {
  Storage.removeUserData();
};

export const transformToKeyValuePair = (keyName, valueName, list) => {
  let items = [...list];
  let arr = [];
  items.map((item) => {
    arr = [...arr, { [keyName]: item, [valueName]: item }];
  });
  return arr;
};
