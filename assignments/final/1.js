function firstNonRep() {
    var str = document.getElementById("name");
    var a = str.value;
    var i, j, flag = 1;
    var arr = [];

    for (i = 0 ; i < a.length; i++) {
      arr[a.charAt(i)] = 0;
    }
    for (i = 0 ; i < a.length; i++) {
      arr[a.charAt(i)] += 1;
    }
     for (i = 0 ; i < a.length; i++) {
      if(arr[a.charAt(i)] == 1){
        flag = 0;
      document.getElementById("demo").innerHTML=a.charAt(i);
      break;
    }
    }
    if(a.length==0)document.getElementById("demo").innerHTML= "Please enter something";
else if(flag)document.getElementById("demo").innerHTML= "OOPs!!\neverything is repeated";
}

function day(){
        var date = new Date(document.getElementById("date").value);
        var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
          document.getElementById("print").innerHTML=(days[date.getDay()]);
      }

      function dial() {
    var l = document.getElementById('letter');
      var letter = "" + l.value;
      var num ="";
    for(var i=0;i<letter.length;i++){
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
        }document.getElementById("num").innerHTML=num;
  }

 function equals(){
      var s = document.getElementById("bi");
      var input = document.getElementById("binary");
      var a = input.value;
      var n="",n1="",op="";
      for (var i = 0; i < a.length; i++) {
        if(a[i]  != "&" && a[i]  != "|" && a[i]  != "!"){
          n1 =n1 + a[i];
          console.log(n1);
        }else {
          n=n1;
          n1="";
          op = a[i];
          console.log(op);
          }
        }
        if(op == "&")
          s.innerHTML= (n1&n);
         else if(op == "|")
          s.innerHTML= (n1|n);
        else if(op == "!"){
          if(n1>0){s.innerHTML= "false";}
          else s.innerHTML= "true";
        }
      }

     function balance(){
      var s=0,a;
      var str=document.getElementById("str");
      a = str.value;
      for (var i=0;i<str.value.length;i++)
      {
        if(a.charAt(i) == "("){
          ++s;
        }
        else if(a.charAt(i) == ")"){
          --s;
        }
      }
      if(s == 0){
        document.getElementById("bal").innerHTML=("length is =",a.length ,"<br> ITs Balanced");
      }
      else if(s < 0)
        document.getElementById("bal").innerHTML=") is Not Balanced",-(s),"Are More";
      else
        document.getElementById("bal").innerHTML="( is miss placed";
    }

    function prime(){
      var number = document.getElementById("prim");
  var flag=1,n=number.value;
  for(var i=number.value-1; i>=2;i--){
    flag = 1;
    for(var j=2;j<i/2;j++){
      if(i%j==0)
        flag = 0;

    }
  if(flag){
    document.getElementById("pri1").innerHTML=i;
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
    document.getElementById("pri2").innerHTML=i;
    break;
  }}
}
function offsetter() {
    var d = new Date();
    var n = d.getTimezoneOffset();
    document.getElementById("off").innerHTML = n;
    console.log(n);
  }


function getReverse(){
  var output = document.getElementById("re");
  var num = document.getElementById("reve").value;
  var revNum = num.split("").reverse().join(" ");
  output.innerHTML = revNum;

}
//coins
 function coins(){
  var button = document.getElementById("btn");
  var output = document.getElementById("demo");
  var amount=document.getElementById("amm");
  var ru10 = document.getElementById("ru10");
  var ru5 = document.getElementById("ru5");
  var ru2 = document.getElementById("ru2");
  var ru1 = document.getElementById("ru1");
  var count = 0;
  var left;
  var amountTocoins = function(amount, coins) 
    {
     if (amount === 0) 
      {
         return [];
       } 
     else
       {
         if (amount >= coins[0]) 
           {
            left = (amount - coins[0]);
            count++;
            return [coins[0]].concat( amountTocoins(left, coins) );
            } 
          else
            {
             coins.shift();
             return   (amount, coins);
            }
        }
        
    } 

  var calcCoins = function(amount, coins) {
    //console.log(amount, coins);
    var result = [];
    for(var i=0;i<coins.length;i++) {
      var rem = amount % coins[i];
      console.log(rem);
      var times = ((amount-rem)/coins[i]);    
      for(var j=0;j<times;j++) result.push(coins[i]);
      amount = rem;
      console.log(times);
     if((rem != 0) && (!coins[i+1]))
     {    
      for(var z=0;z<rem;z++) result.push(1);
     }
    }
    return result;
  }
    var coins = [];
    if(ru10.checked) coins.push(10); 
    if(ru5.checked) coins.push(5);
    if(ru2.checked) coins.push(2);
    if(ru1.checked) coins.push(1);
    // coins.push(10);
    // coins.push(5);
    // coins.push(2);
    // coins.push(1);

    
    
    // var result = amountTocoins(amount.value, coins);
    

    if(coins.length == 0){
         var array_elements = calcCoins(amount.value, [1]) ;
     array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
              document.getElementById("demo1").innerHTML =  current + ' coins --> ' + cnt + ' times<br>';
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.getElementById("demo2").innerHTML =  current + ' coins --> ' + cnt + ' times<br>';
    }
    }
    else{
     var array_elements = calcCoins(amount.value, coins) ;
     array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
              document.getElementById("demo1").innerHTML =  current + ' coins--> ' + cnt + ' times<br>';
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        document.getElementById("demo2").innerHTML =  current + ' coins --> ' + cnt + ' times<br>';
    }

    }
}

