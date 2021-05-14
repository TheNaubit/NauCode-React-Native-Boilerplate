import * as remx from 'remx';
//import I18n from 'i18n-js';
import I18n, {clearTranslateCache} from '../../../i18n';

const initialState = {
  locale: 'en'
};

const state = remx.state(initialState);

//#####################################
// getters
// The wrapped getters functions should be defined inside the same store file and should be exported.
//#####################################

export const getters = remx.getters({

    getLocale() {
        return state.locale;
    },

});

//#####################################
// setters
// The wrapped setters functions should be defined inside the store and should be exported.
//#####################################
export const setters = remx.setters({

    setLocale(locale){
      state.locale = locale;
      // It is not really necessary to use
      // state to manage locale in I18N but
      // I wanted to showcase store use
      clearTranslateCache();
      I18n.locale = locale;
    }

});