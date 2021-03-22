const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});

	//Disable resizing Disabled for develop reasons
	//win.setResizable(false);

	// Set icon of window
	win.setIcon(path.join(__dirname, 'includes/images/icon.png'));

	//Loads html template
	win.loadFile(path.join(__dirname, 'includes/templates/login.html'));

	//Setting the window to null, when all windows are closed
	win.on("closed", () => {
		win = null;
	});
}

app.whenReady().then(() => {
	createWindow();

	// Import keybindings
	require(path.join(__dirname, "includes/js/keybindings.js"));

	// Creating Tray
	require(path.join(__dirname, "includes/js/tray.js"))

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
