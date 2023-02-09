import Device from "react-native-device-detection";
export const isTablet = Device.isTablet && Device.width >= 500;
export const deviceWidth = Device.width;
export const deviceHeight = Device.height;
