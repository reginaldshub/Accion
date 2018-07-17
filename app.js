window.onload = function() {
var button = document.getElementById("btn");
var input1 = document.getElementById("name");
var pass = document.getElementById("password");

button.onclick = function() {
console.log('clicked' , input1.value , pass.value )
if (input1.value == ""){
	alert("Name Empty");
}
if (pass.value == $0){
	alert("Wrong password");
}
if(input1.value == "reginald" && pass.value == "anthony"){
	alert("Succesful Login");
} else{
	alert("get out");
}
}
}