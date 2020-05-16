let changeColor = document.getElementById('changeColor');
let clearOrDark = document.getElementById('ClearOrDark');
let localChangeColor = document.getElementById('PerWebSitePref');
let more = document.getElementById('More');
let back = document.getElementById('Back');
var color = "#35363A";
var fontcolor = "#fff";
var buttonstate;
var buttonstateclear;
var url;
var index;


chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {url = tabs[0].url;});
chrome.storage.sync.get(['innerText'], function(result){buttonstate = result.innerText});
chrome.storage.sync.get(['ClearOrDark'], function(result){buttonstateclear = result.ClearOrDark});
chrome.storage.sync.get(['local'], function(result){ buttonstatelocal = result.local;});

setTimeout(function(){menuButtons()}, 100)
function menuButtons(){
url = new URL(url).origin;

  for (var i=0;i<=buttonstatelocal.length;i=i+1){
    if(buttonstatelocal[i]==url){index=i+1;console.log("indexed")}
  }if(!index){buttonstatelocal.push(url, "Off", "Clear");console.log("pushed");menuButtons()}

  changeColor.innerText = buttonstate;
  clearOrDark.innerText = buttonstatelocal[index+1];
  localChangeColor.innerText = buttonstatelocal[index];

}



    changeColor.onclick = function(element) {
      if (buttonstate == "On"){buttonstate="Off";chrome.storage.sync.set({'innerText': buttonstate});}
      else {buttonstate="On";chrome.storage.sync.set({'innerText': buttonstate});}
      document.getElementById("changeColor").innerText = buttonstate;
      document.getElementById("reload").style.visibility = 'visible';
      };

    clearOrDark.onclick = function(element) {
      if (buttonstateclear == "Clear"){buttonstateclear="Dark";}
      else {buttonstateclear="Clear";}
      buttonstatelocal[index+1]=buttonstateclear;
      chrome.storage.sync.set({'local': buttonstatelocal});
      document.getElementById("ClearOrDark").innerText = buttonstateclear;
      document.getElementById("reload").style.visibility = 'visible';
      };

    localChangeColor.onclick = function(element){
      if(buttonstatelocal[index] == "On"){buttonstatelocal[index]="Off";}
      else {buttonstatelocal[index]="On";}
      chrome.storage.sync.set({'local': buttonstatelocal});

      document.getElementById("PerWebSitePref").innerText = buttonstatelocal[index];
      document.getElementById("reload").style.visibility = 'visible';
      }
    more.onclick = function(element){
      document.getElementById('mainPage').style.visibility = 'hidden';
      document.getElementById('secondPage').style.visibility = 'visible';
      document.getElementById('secondPage').style.zIndex = '+1';
      }
    back.onclick = function(element){
      document.getElementById('mainPage').style.visibility = 'visible';
      document.getElementById('secondPage').style.visibility = 'hidden';
      document.getElementById('secondPage').style.zIndex = '-1';
      }


function clearArray(){var buttonstatelocal=[];chrome.storage.sync.set({'local': buttonstatelocal});}
