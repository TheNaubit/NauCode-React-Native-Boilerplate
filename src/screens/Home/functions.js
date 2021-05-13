import {Navigation} from 'react-native-navigation';

export const goToSecondScreen = componentID => {
  Navigation.push(componentID, {
    component: {
      name: 'SecondScreen',
      options: {
        bottomTabs: {
          visible: false,
        }
      },
    },
  });
};
