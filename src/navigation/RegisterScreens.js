import {Navigation} from "react-native-navigation";
import App from "../../App";
import UserScreen from '../screens/UserScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import MapScreen from '../screens/MapScreen';
import TipScreen from '../screens/TipScreen';
import SettingScreen from '../screens/SettingScreen';

export default function() {
    Navigation.registerComponent('App',() => App);
    
    Navigation.registerComponent('UserScreen',() => UserScreen);
    Navigation.registerComponent('ScheduleScreen',() => ScheduleScreen);
    Navigation.registerComponent('MapScreen',() => MapScreen);
    Navigation.registerComponent('TipScreen',() => TipScreen);
    Navigation.registerComponent('SettingScreen',() => SettingScreen);
}