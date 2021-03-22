const { Menu, Tray } = require("electron");
const path = require("path");

tray = new Tray(path.join(__dirname, "../images/icon.png"));
const contextMenu = Menu.buildFromTemplate([
	{ label: "Item1", type: "radio" },
	{ label: "Item2", type: "radio" },
	{ label: "Item3", type: "radio", checked: true },
	{ label: "Item4", type: "radio" },
]);
tray.setToolTip("Opensource Finance Software");
tray.setContextMenu(contextMenu);
