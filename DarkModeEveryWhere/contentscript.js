var cssOn;
var buttonstateclear;
var url;
chrome.storage.sync.get(['innerText'], function(result){cssOn = result.innerText})
chrome.storage.sync.get(['local'], function(result){ buttonstatelocal = result.local;});
url = location.origin;

setTimeout(function(){
if (cssOn == "On" && isOnLocal()){
cssify();}
}, 100)


function cssify(){
  AllElement = document.querySelectorAll("*");
 HeadElement = document.querySelectorAll("header");
 BodyElement = document.querySelectorAll("body");
 AElement = document.querySelectorAll("a");
 BElement = document.querySelectorAll("b");

bgcolor = "#35363A ";
if (buttonstateclear == "Clear"){
clear = "rgba(1,1,1,0) ";}
else{clear=bgcolor;}
for (i=0;i<AllElement.length;i++){
  AllElement[i].style.backgroundColor = clear;
  AllElement[i].style.color = "#FFF";
}
  for (i=0;i<BodyElement.length;i++){
    BodyElement[i].style.backgroundColor = bgcolor;
    BodyElement[i].style.color = "#FFF";
  }for (i=0;i<AElement.length;i++){
    AElement[i].style.color = "#00FFFF";
  }for (i=0;i<BElement.length;i++){
    BElement[i].style.backgroundColor = "#000";
    BElement[i].style.color = "#FFF";
  }for (i=0;i<HeadElement.length;i++){
    HeadElement[i].style.backgroundColor = bgcolor;
    HeadElement[i].style.color = "#FFF";
  }
requestAnimationFrame(cssify);
}
function isOnLocal(){
  for (var i=0;i<=buttonstatelocal.length;i=i+1){
    if(buttonstatelocal[i]==url){
      console.log(buttonstatelocal)
      if(buttonstatelocal[i+2]=="Clear"){buttonstateclear="Clear"}
      else{buttonstateclear="no"}
      if(buttonstatelocal[i+1]=="On"){return true;}
      else{break;}
    }
  }
}
