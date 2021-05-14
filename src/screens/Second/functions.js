import {t} from '../../i18n';

export const openAlert = ref => {
  ref.alertWithType('info', t('info_title_alert'), t('info_message_alert'));
};
