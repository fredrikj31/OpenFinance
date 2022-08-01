const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.invoke('title:set', title)
});