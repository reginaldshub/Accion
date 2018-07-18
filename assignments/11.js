window.onload = function(){
	var button = document.getElementById("btn");
var number = document.getElementById("num");
button.onclick = function(){
	var flag=1,n=number.value;
	for(var i=number.value-1; i>=2;i--){
		flag = 1;
		for(var j=2;j<i/2;j++){
			if(i%j==0)
				flag = 0;

		}
	if(flag){
		alert(i);
		break;
	}	
	}
	n++;
	for(i=n;  ;i++){
		flag = 1;
		for(j=2;j<i/2;j++){
			if(i%j==0)
				flag = 0;
		}
	if(flag){
		alert(i);
		break;
	}}
}
}