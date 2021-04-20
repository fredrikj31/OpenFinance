const fs = require("fs");
const electron = require("electron").remote;
const dataLocation = electron.app.getPath("documents");

class Data {
	createFolder() {
		fs.mkdir(defaultLocation + "\\OpenFinance", { recursive: true }, err => {
			if (err) throw err;
		});
	}

	
}