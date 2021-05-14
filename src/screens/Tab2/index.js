import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import FastImage from 'react-native-fast-image';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade
} from "rn-placeholder";
import {connect} from 'remx';
import * as languagesStore from '../../stores/languages/languagesStore';
import {t} from '../../i18n';

class Tab2Screen extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      testLoadedData: false,
      countDown: 5
    };
  }

  componentDidMount()
  {
    this.interval = setInterval(()=>{
      if(this.state.countDown>0)
      {
        this.setState({countDown: this.state.countDown-1});
      }else{
        this.setState({testLoadedData: true});
        clearInterval(this.interval);
      }
    },1000);
  }
  
  componentWillUnmount()
  {
    clearInterval(this.interval);
  }

  render()
  {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>{t('tab2_screen_title')}</Text>
        <Text style={styles.subtitle}>
          {this.state.testLoadedData
            ? t('showing_data_text')
            : t('upcoming_showing_data_text', {
                seconds: this.state.countDown,
                count: this.state.countDown,
              })}
        </Text>
        {this.state.testLoadedData ? (
          <>
            <FastImage
              style={{width: 300, height: 300, paddingBottom: 10}}
              source={{
                uri: 'https://unsplash.it/400/400?image=1',
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.text}>{t('demo_loaded_text')}</Text>
          </>
        ) : (
          <Placeholder style={styles.placeholder} Animation={Fade}>
            <PlaceholderMedia size={300} style={{paddingBottom: 10}} />
            <PlaceholderLine width={80} />
            <PlaceholderLine />
            <PlaceholderLine width={30} />
          </Placeholder>
        )}
      </View>
    );
  }
}

Tab2Screen.options = navigationOptions;

function mapStateToProps() {
  return {
    locale: languagesStore.getters.getLocale()
  };
}

export default connect(mapStateToProps)(Tab2Screen);
