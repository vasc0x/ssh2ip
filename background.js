chrome.runtime.onInstalled.addListener(() => {
	var contextMenuItem = {
		"id": "ssh", 
		"title": "SSH to selected IP",
		"contexts": ["selection"]
	}

	// Remove all ids before creating new one
	chrome.contextMenus.removeAll(function() {
		chrome.contextMenus.create(contextMenuItem);
	});
});

var saved_userid = "";
var newURL = "";

// Add listener to contextual menu
chrome.contextMenus.onClicked.addListener(function(info, tab) {
	chrome.storage.local.get(['userid'], function(result) {
		saved_userid = result.userid;

		// Check if we have a user id saved already
		if (saved_userid != null) {
			console.log('Value currently is ' + saved_userid);

			newURL = "ssh://" + saved_userid + "@" + info.selectionText;
			console.log(newURL);
			chrome.tabs.create({url: newURL})
		}
		else {
			console.log('There is no user id stored');

			newURL = "ssh://" + info.selectionText;
			console.log(newURL);
			chrome.tabs.create({url: newURL})
		}
	});
});
