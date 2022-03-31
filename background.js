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

// let page = document.body.innerHTML;
// //let ip = page.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g);
// page = page.replace(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g, 'hi');
// alert (page);

// chrome.runtime.onMessage.addListener(function(request, sender) {
// 	if (request.action == "getSource") {
// 		this.pageSource = request.source;
// 		var title = this.pageSource.match(/<title[^>]*>([^<]+)<\/title>/)[1];
// 		alert(title)
// 	}
// });

// chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
// 	chrome.tabs.executeScript(
// 		tabs[0].id,
// 		{ code: 'var s = document.documentElement.outerHTML; chrome.runtime.sendMessage({action: "getSource", source: s});' }
// 	);
// });

const CryptoJS = require('crypto-js');

var saved_userid = "";
var newURL = "";

// Add listener to contextual menu
chrome.contextMenus.onClicked.addListener(function(info, tab) {
	chrome.storage.local.get(['userid'], function(result) {
		saved_userid = result.userid;

		// Check if we have a user id saved already
		if (saved_userid != null) {
			console.log('Value currently is ' + saved_userid);

			newURL = "ssh://" + saved_userid + ":5124@" + info.selectionText;
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
