## Features
- *The project is a demo of the dependencies used, so it is easier to start using this boilerplate!*
- Tested and used in real projects for Android and iOS devices
- Support for internationalization (check the boilerplate, I made it fully internationalized already)
- Using (or at least I try) the latest stable versions of every dependency
- Compatible and working with latest iOS version, latest XCode version and Apple M1 computers (with custom scripts and Pods to run the compilation without issues there)
- Easy to install and setup for your project
- Config system so you can enable and disable features without having to edit the project
- Support for SVG images
- Support for WebP images
- ProGuard Support
- Hermes Support (Android and iOS)
- Flipper and Reactotron Support
- Fast Image system
- Support for console.time(), console.timeLog()... (More info here: https://github.com/MaxGraey/react-native-console-time-polyfill#usage)
- State management with Remx (I know, maybe you haven't heard about this, but trust me, give it a try, it is amazing and really easy!) (The app has already implemented an example but you can read a guide here: https://medium.com/wix-engineering/getting-started-with-remx-a5880563566f)
- Localization and translations already implemented *with cache and pluralization* (you might want to check this (https://github.com/zoontek/react-native-localize) and this (https://github.com/fnando/i18n-js))

## Installation
1. Clone this repo
2. Run `yarn`
3. If you want to run in iOS, install pods. To do that:
  1. If you are using an Apple computer with M1 processor: `yarn run install-pods-m1`
  2. In any other case (in an Apple computer): `yarn run install-pods`
4. Done! (Check now the configuration section)

## Configuration
1. Run `npx react-native-rename <newName> -b <bundleIdentifier>`
  - This will only change the bundle in Android, for iOS you will need to use XCode
  - For more info, check this: https://www.npmjs.com/package/react-native-rename
2. To configure the Splash screen, run this commnad: `yarn react-native generate-bootsplash --help`
  - I recommend to check this link for more info: https://github.com/zoontek/react-native-bootsplash#assets-generation

## Interesting modules and documentation to get the 100% of this boilerplate
- React Native Navigation (for navigation and improved performance) (more info here: https://wix.github.io/react-native-navigation/docs/before-you-start)
- React Native Bootsplash (for the Splash screen)
- React Native Push Notifications (local and remote, iOS and Android) (more info about finishing the remote notifications setup and also Push Notifications settings here: https://github.com/zo0r/react-native-push-notification#readme)
- React Native Vector Icons (to enable/disable fonts, check this link: https://github.com/oblador/react-native-vector-icons#option-with-cocoapods and https://github.com/oblador/react-native-vector-icons#option-with-gradle-recommended) (By default is enabled AntDesign icons only)
- React Native SVG (to support SVG images!) (https://github.com/react-native-svg/react-native-svg)
- React Native Typography (really interesting to have nice looking texts) (https://github.com/hectahertz/react-native-typography)
- React Native Fast Image (cache and load faster images!) (Usage info here: https://github.com/DylanVann/react-native-fast-image#usage)
- React Native Blur (I really like blur in my projects) (Usage info here: https://github.com/Kureev/react-native-blur#blurview) (If building for Android and iOS, use only BlurView)
- React Native Offline (It is useful to listen for events like network changes) (Usage info here: https://github.com/rgommezz/react-native-offline#api)
- React Native Dropdown Alerts (I like that style of alerts) (Usage info here: https://github.com/testshallpass/react-native-dropdownalert#usage) (Showing global - not per screen - alerts is possible using Wix Navigation (the one we use) but not officially supported. Since I don't need it, I didn't try to implement it, but if you want, you could try following this: https://github.com/testshallpass/react-native-dropdownalert/issues/187)
- React Native Placeholders (to load data in a beautiful way) (Usage info here: https://github.com/mfrachet/rn-placeholder)
- React Native Dropdown Picker (I like this dropdown) (Usage info here: https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage)
- React Native Size Matters (Really useful for quickly support different devices) (Usage info here: https://github.com/nirsky/react-native-size-matters#scaling-functions)
- React Native Calendar (Lots of times you need to pick a date, now you can do it!) (Usage info here: https://github.com/Tinysymphony/react-native-calendar-select)
- React Native Switch Pro (a beautiful and with good performance switch) (Usage info: https://github.com/poberwong/react-native-switch-pro#usage)
- React Native WebP Format (display webp images as you would display normal images) (Usage info: https://www.npmjs.com/package/react-native-webp-format#usage)
- React Native Async Storage
- Reactotron (an amazing tool for debugging, with good synergy with Flipper) (More info here: https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md)
- React Native Extended Stylesheets (so we can have a lot of interesting styling options!) (Guide here: https://github.com/vitalets/react-native-extended-stylesheet)
- react-native-app-info (so we can get the app version without having to manually change it in our config file) (Info about it here: https://github.com/Iragne/react-native-app-info)
- Axios (who doesn't know Axios? Well, it is used to make requests to servers!)