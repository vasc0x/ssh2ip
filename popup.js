const btn_save_user_id = document.getElementById('save');
var saved_userid = "";
var txt_userid = document.getElementById('userid');

btn_save_user_id.addEventListener('click', () => {
  var new_userid = document.getElementById('userid').value;
  
  //alert('New userid is ' + new_userid);

  chrome.storage.local.set({'userid': new_userid}, function() {
    console.log('User id is set to ' + new_userid);
    window.close();
  });
});

chrome.storage.local.get(['userid'], function(result) {
  saved_userid = result.userid;

  if (saved_userid != null) {
    txt_userid.value = saved_userid;
  }
  else {
    txt_userid.value = "";
  }
  
  console.log('Stored userid is ' + saved_userid);
  //alert('Stored userid is ' + saved_userid);
});
