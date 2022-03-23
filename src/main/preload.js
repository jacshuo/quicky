const { contextBridge, ipcRenderer } = require('electron');
const { renderAPI } = require('./renderAPI');

contextBridge.exposeInMainWorld('quicky', {
  ...renderAPI,
});
