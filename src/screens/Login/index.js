import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import {goToHomeScreen} from './functions';
import {connect} from 'remx';
import * as languagesStore from '../../stores/languages/languagesStore';
import {t} from '../../i18n';
class LoginScreen extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>{t('login_screen_title')}</Text>
        <Button
          title={t('login_button')}
          color="#710ce3"
          onPress={() => goToHomeScreen()}
        />
        <Button
          title={
            this.props.locale === 'es'
              ? t('switch_to_english')
              : t('switch_to_spanish')
          }
          color="#710ce3"
          onPress={() =>
            this.props.locale === 'en'
              ? this.props.setLocale('es')
              : this.props.setLocale('en')
          }
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
