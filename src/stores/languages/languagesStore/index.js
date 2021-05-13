import * as remx from 'remx';
//import * as i18n from '../../../i18n';

const initialState = {
  locale: 'a'//i18n.DEFAULT_LANGUAGE
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
    }

});