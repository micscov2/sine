var endInterval = "";

function reset() {
    document.getElementById("timer").innerHTML = "Timer = 60";
    clearInterval(endInterval);
    indx = 0;
    document.getElementById("txt1").disabled = false;
    document.getElementById("txt1").value = " ";
    flag = false;
    cw = 0;
    ww = 0;
    cl = 0;
    wl = 0;
    loadNewText();
}

function shuffle_words(arr) {
//    return arr;
    var l = arr.length - 3;
//    alert(arr);
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i].length == 0) {
//            alert("error at " + i);
//        }
//    }
    var n = l;
//    alert("n = " + n);
    while (n--) {
        var indx = (Math.floor(Math.random()*l)) % l;
//        if (indx > 82) {
//            alert("indx greater than 82");
//        }
        var tmp = arr[indx];
        arr[indx] = arr[l];
        arr[l] = tmp;
    }
    
//    for (var i = 0; i < arr.length-2; i++) {
//        if (arr[i].length == 0) {
//            alert("error on " + i + " =" + arr[i]);
//        }
//    }
//    console.error(arr);
    return arr;
}