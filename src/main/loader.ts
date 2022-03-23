import controller from './controller';
import { ipcChannelDef } from '../common/ipcChannelDef';
import { Controller } from './controller/controllerDef';

const HandlerMap = new Map<string, Controller>();

// 注册主进程Controller
HandlerMap.set(ipcChannelDef.TEST_CHANNEL, controller.testController);
HandlerMap.set(ipcChannelDef.LOAD_APP_CONFIG_FILE, controller.loadConfigFile);

export default HandlerMap;
