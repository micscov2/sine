function signIn() {
    var user = document.getElementById("inpt1").value;
    doAjax("?u=" + user);
//    alert(arr);
    var passwd = document.getElementById("inpt2").value;
    arr = arr.split(",");
    if (passwd == arr[0]) {
//        doAjax("?r=" + user);
        document.cookie="username=" + user + "; expires=Thu, 5 Dec 2020 12:00:00 UTC";
        document.cookie="regisdate=" + arr[1] + "; expires=Thu, 5 Dec 2020 12:00:00 UTC";
        window.location = "index.html";
    } else {
        alert("invalid credentials");
        window.location = "login.html";
    }
}

function customKeyListener(evt, param) {
//    alert(evt.keyCode);
    if (evt.keyCode == 13) {
        if (param == "in") {
            signIn();
        } else if (param == "out") {
            signUp();
        }
    }
}

function getCurrentDate() {
    var date = (new Date());
    
    return (date.getYear() + 1900) + "-" + date.getMonth() + "-" + date.getDay();
}

function signUp() {
    var user = document.getElementById("inpt1s").value;
    var passwd = document.getElementById("inpt2s").value;
    var cpasswd = document.getElementById("inptXs").value;
    var dateString = getCurrentDate();
    var seqQues1 = document.getElementById("inpt3s").value;
    var seqQues2 = document.getElementById('inpt4s').value;
    
    var valid = validation(user, passwd, cpasswd);
    if (valid == "correct") {    
        doAjax("?s=1&&username=" + user + "&&passkey=" + passwd + "&&date_of_registr=" + dateString + "&&sec_ques_1=" + seqQues1 + "&&sec_ques_2=" + seqQues2);
//    alert(arr);
        if (arr == "1") {
            alert("User " + user + " added successfully!, redirecting to login page...");
            window.location = "login.html";
        } else {
            document.getElementById("statusSignup").innerHTML = "<p style=\"color:blue\">" + "User with same username already exists!" + "</p>";
            setTimeout(function() {
                document.getElementById("statusSignup").innerHTML = "";
            }, 4000);
        }
    } else {
        document.getElementById("statusSignup").innerHTML = "<p style=\"color:red\">" + valid + "</p>";
        setTimeout(function() {
            document.getElementById("statusSignup").innerHTML = "";
        }, 4000);
    }
}

function validation(user, passwd, cpasswd) {
    if (user == "" || passwd == "" || cpasswd == "") {
        return "At least one of first 3 fields is empty!";
    }
    
    if (passwd != cpasswd) {
        return "Password and Confirm Password are not maching!";
    }
    
    if (user == passwd) {
        return "Username and Password shouldn't be same";
    }
    
    return "correct";
}

function logout() {
    document.cookie="username=; expires=Thu, 1 Jan 1970 00:00:00 UTC";
    document.cookie="regisdate=; expires=Thu, 1 Jan 1970 00:00:00 UTC";
}
