window.onload = function() {
var button = document.getElementById("btn");
var name = document.getElementById("name");
var pass = document.getElementById("password");

var isValid = function(){
	var errNameRef = document.getElementById("js-name-err-msg");
	var errPasswordRef = document.getElementById("js-pass-err-msg");
if(!name.value.match(/^[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)){
	errNameRef.innerHTML = "Enter Valid email";
	return false;
}else if(!pass.value){
	errNameRef.innerHTML =" ";
	errPasswordRef.innerHTML ="Enter Valid password";
	return false;
}else{
	errNameRef.innerHTML = errPasswordRef.innerHTML=" ";
	return true;
}
}

name.onkeypress = function(e){
	isValid();
}
pass.onkeypress = function(e){
	isValid();
}
button.onclick = function() {
	if(isValid()){
		alert("login Success");
	}
	}
}