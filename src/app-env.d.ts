import { renderAPI } from './main/renderAPI';
import ipcChannelDef from './common/ipcChannelDef';
// Window全局变量添加渲染进程API
declare global {
  interface Window {
    // 定义导出的API（typeof XXX）
    quicky: typeof renderAPI;
  }
}
