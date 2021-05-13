import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import {goToSecondScreen} from './functions';

const HomeScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Second Screen"
        color="#710ce3"
        onPress={()=>goToSecondScreen(props.componentId)}
      />
    </View>
  );
};

HomeScreen.options = navigationOptions;

export default HomeScreen;
