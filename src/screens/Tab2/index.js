import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import navigationOptions from './navigationOptions';
import FastImage from 'react-native-fast-image';

class Tab2Screen extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Tab 2 Screen</Text>
        <FastImage
          style={{width: 300, height: 300}}
          source={{
            uri: 'https://unsplash.it/400/400?image=1',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    );
  }
}

Tab2Screen.options = navigationOptions;

export default Tab2Screen;
