const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

function createWindow() {
	console.log(__dirname);

	const win = new BrowserWindow({
		width: 800,
		height: 600,
		// Sets the preload script here
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
		// Sets the icon of the desktop application
		icon: path.join(__dirname, '../assets/logo.png'),
		// Disables the view to start
		show: false
	});
	//win.setIcon(path.join(__dirname, '../assets/logo.png'));

	// Loads the react app into the electron app
	win.loadURL(
		isDev
			? "http://localhost:3000"
			: `file://${path.join(__dirname, "../build/index.html")}`
	);
	// Opens the window in full size
	win.maximize();
	win.show();
}

app.on("ready", () => {

	createWindow();

	ipcMain.handle('title:set', handleSetTitle);

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", function () {
	if (process.platform !== "darwin") {
		app.quit();
	}
});


// Custom Functions
function handleSetTitle(event, title) {
	const webContents = event.sender
	const win = BrowserWindow.fromWebContents(webContents)
	win.setTitle(title);
}
