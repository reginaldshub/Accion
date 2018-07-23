window.onload = function() {
var emailRef = document.getElementById("email");
var nameRef = document.getElementById("name");
var msgRef = document.getElementById("msg");
var button = document.getElementById("submit");
var list = document.getElementById("list");
var inBoxObj = localStorage.getItem("inbox");
if(inBoxObj) {
inBoxObj = JSON.parse(inBoxObj)
} else {
inBoxObj = [];
}


var addItemsToTable = function(obj) {
var text = "<tr> \
<td>" + obj.msg + "</td>\
<td>" + obj.time + "</td>\
<td>" + obj.user.name + "</td>\
<td>" + obj.user.emailId + "</td>\
</tr>";
list.innerHTML += text;

console.log(inBoxObj)
}






for(var i=0;i<inBoxObj.length;i++) {
addItemsToTable(inBoxObj[i]);
}


button.onclick = function() {
var tempObj = {
msg: msgRef.value,
time: new Date().getMonth(),
user: {
name: nameRef.value,
id: 45,
emailId: emailRef.value
}
};
inBoxObj.push(tempObj);
localStorage.setItem("inbox", JSON.stringify(inBoxObj));
addItemsToTable(tempObj);
}


}