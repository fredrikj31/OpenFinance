const { desktopCapturer, dialog, Menu, App } = require("electron");
const { writeFile } = require("fs");

class Account {
	
	showProfiles() {
		fs.access(dataLocation + "\\OpenFinance\\accounts.json", function(exists) {
			console.log("file exists ? " + exists);
			if (exists == false) {
				return "No Profiles";
			} else {
				fs.readFile(defaultLocation + "\\OpenFinance\\accounts.json", function(err, data) {
					var json = JSON.parse(data);
					for (var i = 0; i < json.Accounts.length; i++) {
						console.log(json.Accounts[i].Username);
					}
				});
			}
		});
	}

}