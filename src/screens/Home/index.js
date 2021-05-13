import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import {goToSecondScreen} from './functions';
import {connect} from 'remx';
import * as languagesStore from '../../stores/languages/languagesStore';

class HomeScreen extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {componentId} = this.props;
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Home Screen - {this.props.locale}</Text>
        <Button
          title="Go to Second Screen"
          color="#710ce3"
          onPress={() => goToSecondScreen(componentId)}
        />
      </View>
    );
  }
}

HomeScreen.options = navigationOptions;

function mapStateToProps() {
  return {
    locale: languagesStore.getters.getLocale()
  };
}

export default connect(mapStateToProps)(HomeScreen);
