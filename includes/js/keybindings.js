const { globalShortcut, BrowserWindow } = require("electron");

const win = BrowserWindow.getFocusedWindow();

//Developer tools
globalShortcut.register("CommandOrControl+X", () => {
	win.webContents.openDevTools();
	console.log("Dev Tools opened!");
});
globalShortcut.register("CommandOrControl+R", () => {
	win.reload();
	console.log("Page reloaded!");
});