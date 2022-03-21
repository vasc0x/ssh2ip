const saveUserId = document.getElementById('save');
var saved_userid = "";
var input_userid = document.getElementById('userid');

saveUserId.addEventListener('click', () => {
  var new_userid = document.getElementById('userid').value;
  
  //alert('New userid is ' + new_userid);

  chrome.storage.local.set({'userid': new_userid}, function() {
    console.log('User id is set to ' + new_userid);
    window.close();
  });
});

chrome.storage.local.get(['userid'], function(result) {
  saved_userid = result.userid;
  input_userid.value = saved_userid;
  console.log('Stored userid is ' + saved_userid);
  //alert('Stored userid is ' + saved_userid);
});
