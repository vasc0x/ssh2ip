// Save user id button
const btn_save_user_id = document.getElementById('save');

var saved_userid = "";

// Input textbox containing the userid
var txt_userid = document.getElementById('userid');

// Add an event listener to the save button
btn_save_user_id.addEventListener('click', () => {
	// Get the userd id value from the textbox
  var new_userid = document.getElementById('userid').value;
  var sync_to_google = document.getElementById('sync').checked;

  // // If the sync is selected, save to local storage
  // if (sync_to_google) {
  //   // Save sync preference to local storage
  //   chrome.storage.local.set({'sync': sync_to_google}, function() {
  //     console.log('Sync is set to ' + sync_to_google);
  //   });
  // }

  // Save the user id to local storage
  chrome.storage.local.set({'userid': new_userid}, function() {
    console.log('User id is set to ' + new_userid);
    window.close();
  });
});

// Get the saved user id from local storage
chrome.storage.local.get(['userid'], function(result) {
  saved_userid = result.userid;

  if (saved_userid != null) {
    txt_userid.value = saved_userid;
  }
  else {
    txt_userid.value = "No user id saved";
  }
  
  console.log('Stored userid is ' + saved_userid);
});

// // Check if we are syncing to google local storage
// chrome.storage.local.get(['userid'], function(result) {
//   saved_userid = result.userid;

//   if (saved_userid != null) {
//     txt_userid.value = saved_userid;
//   }
//   else {
//     txt_userid.value = "";
//   }
  
//   console.log('Stored userid is ' + saved_userid);
// });
