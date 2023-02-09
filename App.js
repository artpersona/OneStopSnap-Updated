import React from 'react';

import Main from './app/screens/Main/Main';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['Image download error']);

export default function App() {
  return <Main />;
}
