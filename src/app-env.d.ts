import { renderAPI } from './main/renderAPI';

// Window全局变量添加渲染进程API
export {};
declare global {
  interface Window {
    // 定义导出的API（typeof XXX）
    quicky: typeof renderAPI;
  }
}
