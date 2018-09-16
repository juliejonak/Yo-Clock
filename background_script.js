

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });
 
  chrome.alarms.onAlarm.addListener(function(alarm){
    timeIsUp()
  });
  mess = ''
 
  //timer is done
  function timeIsUp () {
     mess = ''
    // chrome.storage.local.get(['toDo'], function(result) {
    //   console.log(result.toDo);
    //   mess = result.toDo;
    //  })
    chrome.storage.local.get(['toDo'], function(result) {
      console.log(result.toDo);
      mess  = result.toDo;
    chrome.notifications.create({
      type: "basic",
      iconUrl: 'img/Yo!.png',
      title: 'YO - TIME IS UP',
      message: mess
    });
  });
    console.log('yo')
  };

  //background listener for time on active tab

  chrome.tabs.onActivated.addListener(function(){
    console.log('ping');
    setTimeout(yoClock, 600000);
  });

function yoClock(){
   console.log('yo clock is running')
   chrome.tabs.create({})
}
