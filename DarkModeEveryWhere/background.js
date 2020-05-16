chrome.runtime.onInstalled.addListener(function() {
  var buttonstate="Off";
  var buttonstateclear="Clear";
  var buttonstatelocal=[];
  buttonstatelocal.push("http://elilewis327.com", "Off", "Clear");
  chrome.storage.sync.set({'local': buttonstatelocal});
  chrome.storage.sync.set({});
  chrome.storage.sync.set({'innerText': buttonstate}, function(){});
  chrome.storage.sync.set({'ClearOrDark': buttonstateclear}, function(){});

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({})],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });

  });
