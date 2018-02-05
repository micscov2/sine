chrome.runtime.sendMessage({action: "show"});

function loadImages() {
    var isSomethingChanged = false;
    
    // To hide ads
    var myHidingElements = document.getElementsByTagName("a");
    for (var i = 0; i < myHidingElements.length; i++) {
        if (myHidingElements[i].innerHTML.indexOf("Register") >= 0) {
            myHidingElements[i].innerHTML = "";
            isSomethingChanged = true;
            break;
        }    
    }
    
    myElements = document.getElementsByTagName('img');

    for (var i = 0; i < myElements.length; i++) {
        var width = myElements[i].width;
        var height = myElements[i].height;
        if ((myElements[i].src.indexOf("//css.banggood.com/images/logo.png") >= 0 ||myElements[i].src.indexOf("banner") >= 0 || myElements[i].src.indexOf("crm_customers_images") >= 0) && myElements[i].lazy != "no") {
            isSomethingChanged = true;
            myElements[i].src = "http://www.unixstickers.com/image/cache/data/stickers/127.0.0.1/localhost.sh-600x600.png";
        }
        myElements[i].width = width;
        myElements[i].height = height;
    }
    
    // To change prices
    var priceElements = document.getElementsByClassName("price");
    // TODO: to expose this through UI
    var FACTOR = 1000;
    for (var i = 0; i < priceElements.length; i++) {
        if (priceElements[i]['done']) {
            continue;
        }
        isSomethingChanged = true;
        var currentPrice = parseInt(priceElements[i].innerHTML.toString().substring(2).replace(",", ""));
        currentPrice *= FACTOR;
        priceElements[i].innerHTML = "Rs" + currentPrice.toString();
        priceElements[i]['done'] = true;
    }
    
    if (! isSomethingChanged) {
        clearInterval(timerWatch);
    }
}

timerWatch = setInterval(function() {
  loadImages()
}, 30);