window.onload = function (argument) {
	var field = document.getElementById('field');
	var submit = document.getElementById('submit');
	var msgs  = document.getElementById('msgs');
	var parseText = function(text){
		var finalText = text.replace(/http[s]?\:\/\/[a-z0-9]+\.[a-z0-9]{2,3}/ig, function($1){
			return "<a href = '" + $1 + "'target ='_blank'>" + $1 + "</a>"
		});
		return finalText;
	}
	submit.onclick = function(){
		var text = field.value;
		var el = document.createElement("div");
		el.innerHTML = parseText(text);
		el.setAttribute('class','msg');
		msgs.appendChild(el);
		field.value = "";
	}	
}
