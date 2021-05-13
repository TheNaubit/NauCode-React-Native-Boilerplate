import { StyleSheet } from 'react-native';
import {iOSUIKit} from 'react-native-typography';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  title: {
    ...iOSUIKit.title3,
    marginBottom: 30
  },
});

export default styles;
