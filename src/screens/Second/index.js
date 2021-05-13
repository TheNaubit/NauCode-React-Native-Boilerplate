import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import Icon from 'react-native-vector-icons/AntDesign';
const SecondScreen = props => {
  return (
    <View style={styles.root}>
      <Icon name="home" size={50} color="#900" style={styles.testIcon} />
      <Text style={styles.title}>Second Screen</Text>
    </View>
  );
};

SecondScreen.options = navigationOptions;

export default SecondScreen;
