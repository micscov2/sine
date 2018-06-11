/**
* dummy method, transfer control on the startup of the page
*/
function loadInitPara() {
	//var para = "All Ninja are men of peace, and must always remain so or lose many of the special powers they have developed. Beyond this, the Ninja are also adept at fieldcraft, infiltrating, and espionage. Because of their scouting skills and peripheral kinesthetic sensitivity, Ninja customarily surprise their opponents slighly more than half the time.";
	resetCounter();
	setClock();
}

//function to display time
function setClock() {
	document.getElementById("timer").innerHTML = new Date();
	setInterval(function () { document.getElementById("timer").innerHTML = new Date(); }, 1000);
}

//object to keep track of the counter
//could've used global variable
//just trying out
function dummyRetCounter() {
	x = 0;
}

dummyRetCounter.prototype.getCounter = function () {
	return x;
}

dummyRetCounter.prototype.incCounter = function () {
	++x;
}

//business logic function
function keyProcess() {
	if (flag === 0) {
		initTime = (new Date()).getTime();
		flag = 1;
	}
	var newS = document.getElementById("typeIn").value;
	if (newS === inputS[myCounter.getCounter()] + " ") {
		myCounter.incCounter();
		generateLeftPara();
		characters += newS.length + 1;
		document.getElementById("typeIn").value = "";
		finTime = (new Date()).getTime();
		document.getElementById("mySpeed").innerHTML = Math.floor((characters / 5) / (((finTime - initTime)/1000) / 60)) + " Word(s) per minute";
	} else if (newS.length <= inputS[myCounter.getCounter()].length) {
		var tmpS = inputS[myCounter.getCounter()].substring(0, newS.length);
		if (tmpS != newS) {
			document.getElementById("typeIn").style.color = "red";
		} else {
			document.getElementById("typeIn").style.color = "black";
		}
	}
}

//updates the paragraph on the screen
function generateLeftPara() {
	var newS = "";
	for (i = myCounter.getCounter(); i < inputS.length; i++) {
		newS = newS + inputS[i];
		if (i + 1 != inputS.length) {
			newS = newS + " ";
		} 
	}

	document.getElementById("inputPara").innerHTML = newS;
	document.getElementById("progressPara1").style.width = (inputS.length-myCounter.getCounter())*50/inputS.length + "%";

	//if race completes update the time taken by the user to complete the race
	if (inputS.length === myCounter.getCounter()) {
		finTime = (new Date()).getTime();
		document.getElementById("mySpeed").innerHTML = Math.floor((characters / 5) / (((finTime - initTime)/1000) / 60)) + " Word(s) per minute";
	}

	getsOutputUsingAjax();
}

//onclick function of reset button
function resetCounter(txt) {
	var para = "All Ninja are men of peace, and must always remain.";
	document.getElementById("inputPara").innerHTML = para;
	flag = 0;
	characters = 0;
	myCounter = new dummyRetCounter();
	inputS = para.split(" ");
	document.getElementById("mySpeed").innerHTML = "Not evaluated yet...."
}

//****in Progress for sending AJAX calls 
function getsOutputUsingAjax() {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		var DONE = 4;
		var OK = 200;

		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				document.getElementById("progressPara2").style.width = (xhr.responseText) + "%";
			} else {
				alert('Error ' + xhr.status);
			}
		}
	}
	xhr.open('get', 'request-handler.php');

	//now sending request actually, above was only setup
	document.getElementById("progressPara2").style.width = (inputS.length-myCounter.getCounter())*50/inputS.length + "%";
	xhr.send(null);
}

//setting user defined paragraph for typing 
function setPara() {
	var para = document.getElementById("inputByUser").value;
	document.getElementById("inputPara").innerHTML = para;
	flag = 0;
	characters = 0;
	myCounter = new dummyRetCounter();
	inputS = para.split(" ");
	document.getElementById("progressPara1").style.width = "50%";
	document.getElementById("mySpeed").innerHTML = "Not evaluated yet...."
}

/**
showing error when writing these lines
The "one-line" comment styles only comment to the end of the line or the current block of PHP code, whichever comes first. This means that HTML code after // ... ?> or # ... ?> WILL be printed: ?> breaks out of PHP mode and returns to HTML mode, and // or # cannot influence that. If the asp_tags configuration directive is enabled, it behaves the same with // %> and # %>. However, the tag doesn't break out of PHP mode in a one-line comment.
*/