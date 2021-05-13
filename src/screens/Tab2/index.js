import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';

const Tab2Screen = props => {
  return (
    <View style={styles.root}>
      <Text>Tab 2 Screen</Text>
    </View>
  );
};

Tab2Screen.options = navigationOptions;

export default Tab2Screen;
