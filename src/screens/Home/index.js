import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import {goToSecondScreen} from './functions';
import {connect} from 'remx';
import * as languagesStore from '../../stores/languages/languagesStore';
import {t} from '../../i18n';

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
        <Text style={styles.title}>{t('home_screen_title')}</Text>
        <Button
          title={t('go_second_screen_button')}
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
