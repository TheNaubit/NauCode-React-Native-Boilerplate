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
    marginBottom: 30,
  },
  subtitle: {
    ...iOSUIKit.subhead,
    marginBottom: 50,
  },
  placeholder: {
    paddingHorizontal: 50,
    marginTop: 30,
  },
  text: {
    ...iOSUIKit.bodyEmphasized,
    paddingHorizontal: 50,
    marginTop: 30,
  },
});

export default styles;
