const { ipcRenderer } = require('electron');
const { ipcChannelDef } = require('../common/ipcChannelDef');

// 向渲染进程暴露的API：渲染进程专用
exports.renderAPI = {
  // render to main test ping
  pingTest() {
    ipcRenderer.send(ipcChannelDef.TEST_CHANNEL, 'ping');
  },
  // 渲染线程事件监听处理
  on(channel, func) {
    const validChannels = [...Object.values(ipcChannelDef)];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
  // 渲染线程单次事件处理
  once(channel, func) {
    const validChannels = [...Object.values(ipcChannelDef)];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.once(channel, (event, ...args) => func(...args));
    }
  },
  ipcChannel: ipcChannelDef,
};
