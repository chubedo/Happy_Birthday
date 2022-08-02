
var to = 'Han-san';
var gift_url = 'https://chubedo.github.io/happy-birthday-han-san/';
var gift_image_url = 'https://scontent.fdad3-5.fna.fbcdn.net/v/t1.15752-9/290605929_730068001394851_1319243501392584824_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=75K4gltOTmkAX-ops01&_nc_ht=scontent.fdad3-5.fna&oh=03_AVITgXHMI73M5moEQItq6Uw7kLDnDiTHqidkJIRl7GsTYw&oe=630CAB4D';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

