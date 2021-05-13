import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';

const SecondScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Second Screen</Text>
    </View>
  );
};

SecondScreen.options = navigationOptions;

export default SecondScreen;
