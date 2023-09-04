/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigation from './libs/navigator';
import {Provider} from 'react-redux';
import store from './libs/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
