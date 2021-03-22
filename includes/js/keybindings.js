const { globalShortcut, BrowserWindow } = require("electron");

const win = BrowserWindow.getFocusedWindow();

//Developer tools
globalShortcut.register("Shift+CommandOrControl+X", () => {
	win.webContents.openDevTools();
	console.log("Dev Tools opened!");
});
globalShortcut.register("Shift+CommandOrControl+R", () => {
	win.reload();
	console.log("Page reloaded!");
});