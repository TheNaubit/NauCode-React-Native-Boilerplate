import configDev from './dev';
import configPro from './pro';

const DEV_MODE = true;

export const isDev = () => DEV_MODE;

const selectedConf = DEV_MODE ? configDev : configPro;

export default config = {
  showLogs: false,
  showWarns: false,
  useRemoteNotifications: false,
  ...selectedConf,
};