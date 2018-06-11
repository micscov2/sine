var arr = "";
var indx = 0;
var cw = 0;
var ww = 0;
var cl = 0;
var wl = 0;
var iTime = 0;
var eTime = 0;
var flag = false;
var wrds = "";

function loadNewText() {
    doAjax("?q=word");
//    alert(arr);
    wrds = arr.split(",");
    wrds = shuffle_words(wrds);
    document.getElementById("p1").innerHTML = wrds[indx++];
    
    document.querySelector('input').addEventListener('keydown', function (e) {
        if (e.which == 8) {
            e.preventDefault();
        }
    });
    
    var cookiez = document.cookie.split(";");
    var timez = cookiez[1].split("=");
    document.getElementById("p7").innerHTML = "<p>User: " + getUser() + "</p>";
    document.getElementById("p10").innerHTML = "<p>User since: " + timez[1] + "</p>";
    doAjax("?u2=" + getUser() + "&&u22=1");
//    alert("mx = " + arr);
    var mx = arr;
    doAjax("?u2=" + getUser() + "&&u23=1");
    var ct = arr;
    document.getElementById("p8").innerHTML = "<p>Total times: " + ct.substr(0, ct.length-1) + "</p>";
    document.getElementById("p9").innerHTML = "<p>Best score: " + mx.substr(0, mx.length-1) + "</p>";
}

function updateParams() {
    var cookiez = document.cookie.split(";");
    doAjax("?u2=" + getUser() + "&&u22=1");
//    alert("mx = " + arr);
    var mx = arr;
    doAjax("?u2=" + getUser() + "&&u23=1");
    var ct = arr;
    document.getElementById("p8").innerHTML = "<p>Total times: " + ct.substr(0, ct.length-1) + "</p>";
    document.getElementById("p9").innerHTML = "<p>Best score: " + mx.substr(0, mx.length-1) + "</p>";
}

function getUser() {
    var cookiez = document.cookie.split(";");
    var user = cookiez[0].split("=");
//    alert(user[1]);
    return user[1];
}

function startTimer() {
    iTime = (new Date()).getTime();
    endInterval = setInterval(function () {
        eTime = (new Date()).getTime();
        document.getElementById("timer").innerHTML = "Timer = " + (60 - ((eTime - iTime) / 1000).toFixed());
        if (eTime - iTime >= 60000) {
            clearInterval(endInterval);
            var speed = ((cw + cl) / 5).toFixed();
            document.getElementById("p6").innerHTML = "Typing Speed = " + speed;
            document.getElementById("txt1").disabled = true;
            doAjax("?u1=" + getUser() + "&&score=" + speed + "&&c_date=" + getCurrentDate());
//            alert("added " + arr);
            updateParams();
        }
    }, 1000);
}

function processKey(event) {
    if (!flag) {
        flag = true;
        startTimer();
    }
    var SPACE = 32;
    
    var wordNode = document.getElementById("txt1");
    var wordl = document.getElementById("p1").textContent.trim();
    var wordr = wordNode.value.trim();

    if (wordl.indexOf(wordr) != 0) {
        document.getElementById("txt1").style.backgroundColor = "red";
    } else {
        document.getElementById("txt1").style.backgroundColor = "white";
    }
    
    if (event.charCode == 0) {
        wordNode.value = "";    
    }
    
    if (event.charCode == SPACE) {
        if (wordl == wordr) {
            document.getElementById("p1").innerHTML = wrds[indx++];
            wordNode.value = "";
            ++cw;
            cl += (wordl.length);
        } else {
            document.getElementById("p1").innerHTML = wrds[indx++];
            wordNode.value = "";
            ++ww;
            cl += (getSimilarLength(wordl, wordr));
            wl += (wordl.length - getSimilarLength(wordl, wordr));
        }
        
        document.getElementById("txt1").style.backgroundColor = "white";
    }   
    
    document.getElementById("p2").innerHTML = "Correct Words = " + cw;
    document.getElementById("p3").innerHTML = "Wrong Words = " + ww;
    document.getElementById("p4").innerHTML = "Correct Letters = " + cl;
    document.getElementById("p5").innerHTML = "Wrong Letters = " + wl;
}

function getSimilarLength(s1, s2) {
    var ctr = 0;
    for (var i = 0; i < s1.length; i++) {
        if (s1[i] == s2[i]) {
            ctr++;
        }
    }
    
    return ctr;
}

function doAjax(params) {
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function(storeData) {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {  
            arr = xmlHttp.responseText;
        }  else {
            return "Error doing AJAX";
        }
    };
    
    xmlHttp.open("GET", "web_processor.php" + params, false);
    xmlHttp.send();
}