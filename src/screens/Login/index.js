import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import {goToHomeScreen} from './functions';

const LoginScreen = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Login Screen</Text>
      <Button title="Log In" color="#710ce3" onPress={() => goToHomeScreen()} />
    </View>
  );
};

LoginScreen.options = navigationOptions;

export default LoginScreen;
