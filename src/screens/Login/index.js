import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import {goToHomeScreen} from './functions';
import {connect} from 'remx';
import * as languagesStore from '../../stores/languages/languagesStore';

class LoginScreen extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Login Screen</Text>
        <Button
          title="Log In"
          color="#710ce3"
          onPress={() => goToHomeScreen()}
        />
        <Button
          title={this.props.locale+"Switch to Spanish"}
          color="#710ce3"
          onPress={()=>this.props.locale==='a' ? this.props.setLocale('b') : this.props.setLocale('a')}
        />
      </View>
    );
  }
}

LoginScreen.options = navigationOptions;

function mapStateToProps() {
  return {
    locale: languagesStore.getters.getLocale(),
    setLocale: languagesStore.setters.setLocale
  };
}

export default connect(mapStateToProps)(LoginScreen);
