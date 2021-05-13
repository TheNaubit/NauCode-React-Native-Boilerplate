import {Navigation} from 'react-native-navigation';
import {mainRoot} from '../../navigation/navigationRoots';

export const goToHomeScreen = () => {
  Navigation.setRoot(mainRoot);
};
