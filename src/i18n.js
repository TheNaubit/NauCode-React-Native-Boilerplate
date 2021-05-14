import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import mem from 'mem';

import en from './translations/en';
import es from './translations/es';

//const locales = RNLocalize.getLocales();

//if (Array.isArray(locales)) {
//  I18n.locale = locales[0].languageTag;
//}
I18n.defaultLocale = 'en';
I18n.locale = 'en';

I18n.fallbacks = true;
I18n.translations = {
  en,
  es,
};

export const translate = mem(I18n.t, {cacheKey: JSON.stringify});
export const t = translate;
export const clearTranslateCache = () => mem.clear(translate);

export default I18n;