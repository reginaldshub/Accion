window.onload = function() {
var button = document.getElementById("btn");
var name = document.getElementById("name");
var password = document.getElementById("password");


var auth = localStorage.getItem('auth');
if(auth) {
location.href = 'index.html';
}

var isValid = function() {
console.log('clicked', name.value, password.value);
var errNameRef = document.getElementById("js-name-err-msg");
var errPasswordRef = document.getElementById("js-password-err-msg");
var match = name.value.match(/[A-Z0-9_]+@[a-z0-9]+\.[a-z]{2,3}/i);
if(!match) {
errNameRef.innerHTML = "Enter Valid email id";
return false;
} else if(!password.value) {
errNameRef.innerHTML = "";
errPasswordRef.innerHTML = "Enter Valid Password";
return false;
} else {
errNameRef.innerHTML = errPasswordRef.innerHTML = "";
return true;
}
}

name.onkeypress = function(e) {
isValid();
}
password.onkeypress = function(e) {
isValid();
}

button.onclick = function() {
if(isValid()) {
alert("login success");
localStorage.setItem('auth', name.value);
location.href="index.html"
}
}
}