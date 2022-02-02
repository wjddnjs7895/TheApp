/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {pushLoginRoute, pushMainRoute} from './src/navigation/NavigationRoute';
import {
  View,
} from 'react-native';


import UserScreen from './src/screens/UserScreen';

const App = () => {

  useEffect(() => {
    pushMainRoute();
  },[])

	return (
		<View >
    </View>
	);
};

export default App;
