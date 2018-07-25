
window.onload = function (argument) {
		var l = document.getElementById('letter');
		var btn = document.getElementById('dial');
		btn.onclick = function(){
			var letter = "" + l.value;
			var num ="";
			console.log(num);
		for(var i=0;i<letter.length;i++){
			console.log(num);
			switch (letter[i])
		{
			case 'A':case 'B':case 'C':case 'a':case 'b':case 'c':
				num = num + 2 ;
				break;
			case 'D':case 'E':case 'F':case 'd':case 'e':case 'f':
				num = num + 3 ;
				break;
			case 'G':case 'H':case 'I':case 'g':case 'h':case 'i':
				num = num + 4 ;
				break;
			case 'J':case 'K':case 'L':case 'j':case 'k':case 'l':
				num = num +5;
				break;
			case 'M':case 'N':case 'O':case 'm':case 'n':case 'o':
				num = num + 6;
				break;
			case 'P':case 'Q':case 'R':case 'S':case 'p':case 'q':case 'r':case 's':
				num = num + 7;
				break;
			case 'T':case 'U':case 'V':case 't':case 'u':case 'v':
				num = num + 8;
				break;
			case 'W':case 'X':case 'Y':case 'Z':case 'w':case 'x':case 'y':case 'z':
				num = num + 9;
				break;
			default:num = num + letter[i];
				break;
			
		}
				}alert(num);
	}
		
}