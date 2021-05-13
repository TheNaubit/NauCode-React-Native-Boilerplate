## Features
- Tested and used in real projects for Android and iOS devices
- Using (or at least I try) the latest stable versions of every dependency
- Compatible and working with latest iOS version, latest XCode version and Apple M1 computers (with custom scripts and Pods to run the compilation without issues there)
- Easy to install and setup for your project
- Config system so you can enable and disable features without having to edit the project

## Featured modules included
- React Native Navigation (for navigation and improved performance) (more info here: https://wix.github.io/react-native-navigation/docs/before-you-start)
- React Native Bootsplash (for the Splash screen)
- React Native Push Notifications (local and remote, iOS and Android) (more info about finishing the remote notifications setup and also Push Notifications settings here: https://github.com/zo0r/react-native-push-notification#readme)

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