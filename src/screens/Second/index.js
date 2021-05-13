import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import Icon from 'react-native-vector-icons/AntDesign';
import {openAlert} from './functions';
import DropdownAlert from 'react-native-dropdownalert';
import {connect} from 'remx';
import * as languagesStore from '../../stores/languages/languagesStore';

class SecondScreen extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <View style={styles.root}>
        <Icon name="home" size={50} color="#900" style={styles.testIcon} />
        <Text style={styles.title}>Second Screen - {this.props.locale}</Text>
        <Button
          title="Open Alert"
          color="#710ce3"
          onPress={() => openAlert(this.dropDownAlertRef)}
        />
        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} />
      </View>
    );
  }
}

SecondScreen.options = navigationOptions;

function mapStateToProps() {
  return {
    locale: languagesStore.getters.getLocale()
  };
}

export default connect(mapStateToProps)(SecondScreen);
