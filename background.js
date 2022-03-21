// chrome.runtime.onInstalled.addListener(() => {

// });

var contextMenuItem = {
	"id": "ssh", 
	"title": "SSH to selected IP",
	"contexts": ["selection"]
}

var saved_userid = "";

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	chrome.storage.local.get(['userid'], function(result) {
		saved_userid = result.userid;
		console.log('Value currently is ' + saved_userid);

		var newURL = "ssh://" + saved_userid + "@" + info.selectionText;
		console.log(newURL);
		chrome.tabs.create({url: newURL})
	});
});

