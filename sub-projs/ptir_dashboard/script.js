function showAddNewWindow() {
	document.getElementById("divForAddNewWindow").style.visibility = 'visible';
	document.getElementById("divForBtns").style.visibility = 'hidden';

	document.getElementById("showRes").innerHTML = '';
}

function closeAddView() {
	document.getElementById("divForBtns").style.visibility = 'visible';
	document.getElementById("divForAddNewWindow").style.visibility = 'hidden';
}

function putPTIRIntoDb() {
	if (validation() == false) {
		console.debug('Improper data');
        alert('Improper data');
		return;
	}

	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function () {
		var DONE = 4;
		var OK = 200;
		
		if (xhr.readyState == DONE) {
			if (xhr.status == OK) {
				if (xhr.responseText.length > 0) {
					alert('Invalid entry');
				} else {
					alert('Success');
				}
			} else {
				alert('Error Adding PTIR');
			}
		}
	};

	xhr.open('get', 'index.php?' + genToAddString());
	xhr.send();
}

function genToAddString() {
	var s = '';

	for (var i = 1; i <= 5; i++) {
		s += 'firstEl' + String(i) + '=';
		s += (document.getElementById('firstEl' + String(i)).value).replace(/^\s+|\s+$/g, '');
		if (i != 5) {
			s += '&';
		}
	}
	console.debug('generated String = ' + s);

	return s;
}

function validation() {
	for (var i = 1; i <= 5; i++) {
		if ((document.getElementById('firstEl' + String(i)).value).length < 1) {
			return false;
		} 

		if (i == 1) {
			if ((document.getElementById('firstEl' + String(i)).value).length != 6) {
				return false;
			}

			if ((document.getElementById('firstEl' + String(i)).value).match(/[^0-9]/)) {
				console.debug('Only numbers are allowed');
				return false;
			}
		}
	}

	return true;
}

function showViewAllWindow() {
	var xhr = new XMLHttpRequest();
	var responseRecv = '';
	_globArr = [];
	
	xhr.onreadystatechange = function () {
		var DONE = 4;
		var OK = 200;
		
		if (xhr.readyState == DONE) {
			if (xhr.status == OK) {
				console.debug('Successfully retrieved data');
				(function () { 
					//alert(xhr.responseText);
					var rowsRet = xhr.responseText.split("\<br \/\>");
					_genData = "<br /><button onclick='deleteSelected()'>Delete Selected</button>";
					_genData += "<br /><br /><div>";
					_totRows = rowsRet.length-1;

					for (var k = 0; k < _totRows; k++) {
						var row = rowsRet[k].split(" | ");
						showData(row, k);
					}
					_genData += "</div><br />";

					document.getElementById("showRes").innerHTML = _genData;
				})();
			} else {
				alert('Error Adding PTIR');
			}
		}
	};

	xhr.open('get', 'index.php?ret=true');
	xhr.send();
}

_genData = "";
_totRows = 0;
_globArr = [];

function showData(row, num) {
	_genData += "<span> " + num + "</span> ";
	_genData += "<input type='checkbox' id='" + num + "'" + "/> ";
	_locArr = [];
	for (var k in row) {
        if (row[k].length === 0) {
            row[k] = 'mohd_read';
        }
		if (k == 0) {
			_genData += "<span id='di" + num + "''>" + row[k] + "</span> | ";
		} else {
			_genData += "<span>" + row[k] + "</span> | "
		}
		_locArr.push(row[k]);
	}
	_globArr.push(_locArr);
	_genData += "<br />";
}

function deleteSelected() {
	for (var i = 0; i < _totRows; i++) {
		if (document.getElementById(String(i)).checked) {
			deleteFromDb(document.getElementById("di" + String(i)).innerHTML);
		}
	}

	location.reload();
}

function deleteFromDb(rowToBeDeleted) {
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function () {
		var DONE = 4;
		var OK = 200;
		
		if (xhr.readyState == DONE) {
			if (xhr.status == OK) {
				alert('Deleted Row/Rows Successfully');
			} else {
				alert('Error Adding PTIR');
			}
		}
	};

	xhr.open('get', 'index.php?rowToBeDeleted=' + rowToBeDeleted);
	xhr.send();	
}

function generateCSVFile() {
	var csvContent = "data:text/csv;charset=utf-8,";
	_globArr.forEach(function(subArr, i){
   		s = subArr.join(",");
   		csvContent += s + "\n";
	}); 

	window.open(csvContent);
}