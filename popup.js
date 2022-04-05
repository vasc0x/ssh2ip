const btn_save_user_id = document.getElementById('save');                                 // Save user_id button

var saved_userid = "";

var txt_userid = document.getElementById('userid');                                       // Input textbox containing the user_id
var txt_password = document.getElementById('password');                                   // Input textbox containing the password

/* Add an event listener to the save button */
btn_save_user_id.addEventListener('click', () => {
  var new_userid = document.getElementById('userid').value;                               // Get the userd id value from the textbox
  var new_password = document.getElementById('password').value;                           // Get the password value from the textbox
  var new_ssh_client = document.querySelector('input[name="ssh_client"]:checked').value;  // Get the value of the selected ssh client
  var sync_to_google = document.getElementById('sync').checked;                           // Get the sync value from the checkbox

  alert(new_ssh_client);

  /* If the user id is set, save to local storage */
  if (new_userid) {
    chrome.storage.local.set({'userid': new_userid}, function() {
      console.log('User id is set to ' + new_userid);
      window.close();
    });
  }

  /* If the password is set, save to local storage */
  if (new_password) {
    chrome.storage.local.set({'password': new_password}, function() {
      console.log('Password was saved to local storage');
      window.close();
    });
  }
});

/* Get the saved user id from local storage */
chrome.storage.local.get(['userid'], function(result) {
  saved_userid = result.userid;

  if (saved_userid != null) {
    txt_userid.value = saved_userid;
  }
  else {
    txt_userid.value = "Your user id";
  }
  
  console.log('Stored userid is ' + saved_userid);
});

/* Get the saved password from local storage */
chrome.storage.local.get(['password'], function(result) {
  saved_password = result.password;

  if (saved_password != null) {
    txt_password.value = saved_password;
  }
  else {
    txt_password.value = "Your password";
  }
  
  console.log('Stored password was retrieved');
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
