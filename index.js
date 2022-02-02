/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Navigation } from 'react-native-navigation';
import { pushApp } from './src/navigation/NavigationRoute';

AppRegistry.registerComponent(appName, () => App);
Navigation.events().registerAppLaunchedListener(() => pushApp());