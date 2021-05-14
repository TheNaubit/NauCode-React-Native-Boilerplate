import EStyleSheet from 'react-native-extended-stylesheet';
import {iOSUIKit} from 'react-native-typography';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  title: {
    ...iOSUIKit.title3,
  },
});

export default styles;
