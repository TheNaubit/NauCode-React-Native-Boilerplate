/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import Config from './src/config';
if (Config.enableReactotron) {
  import('./ReactotronConfig').then(() => {if(Config.showLogs) console.log('Reactotron Configured')});
}
import EStyleSheet from 'react-native-extended-stylesheet';

import HomeScreen from './src/screens/Home';
import SecondScreen from './src/screens/Second';
import Tab2Screen from './src/screens/Tab2';
import LoginScreen from './src/screens/Login';

import defaultNavigationOptions from './src/navigation/navigationOptions';
import { mainRoot, loginRoot } from './src/navigation/navigationRoots';
//import {setI18nConfig, DEFAULT_LANGUAGE} from './src/i18n';

//import * as i18n from './src/i18n';

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    if (Config.showLogs) console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    if (Config.showLogs) console.log('NOTIFICATION:', notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    if (Platform.OS === 'ios')
      notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    if (Config.showLogs) console.log('ACTION:', notification.action);
    if (Config.showLogs) console.log('NOTIFICATION:', notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: Platform.OS === 'ios' || Config.useRemoteNotifications,
});

//setI18nConfig(DEFAULT_LANGUAGE);

Navigation.registerComponent('HomeScreen', () => HomeScreen);
Navigation.registerComponent('SecondScreen', () => SecondScreen);
Navigation.registerComponent('Tab2Screen', () => Tab2Screen);
Navigation.registerComponent('LoginScreen', () => LoginScreen);

Navigation.setDefaultOptions(defaultNavigationOptions);

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  // This is a sample var not used anywhere
  $textColor: '#0275d8',
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});
