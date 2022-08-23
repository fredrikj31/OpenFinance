import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('getUsers', {
    setTitle: (title: string) => ipcRenderer.invoke('title:set', title)
});