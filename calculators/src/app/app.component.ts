import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   val='';op1;op;op2;res;
   vare;
  
   input(event:any){
    console.log(String.fromCharCode(event.keyCode));
    console.log(event.target.value);
    if(event.target.value == '+' || event.target.value == '-' || event.target.value == '*' || event.target.value== '/'){
      this.op1 = this.val;
      this.val = "";
      this.op  = event.target.value;
  }else if(event.target.value == '='){//} || event.target.keyCode == 10){
   this.equ();
  }else{
    this.val += event.target.value;
  }

}

  put(event){
    this.val += event;
  }
dot(){
  this.val += ".";
}
back(){
  this.val = this.val.slice(0, -1);
}
mul(){
  this.op1 = this.val;
  this.val = '';
  this.op='*';
}
div(){
  this.op1 = this.val;
  this.val = '';
  this.op='/';
}
add(){
  this.op1 = this.val;
  this.val = '';
  this.op='+';
}
sub(){
  this.op1 = this.val;
  this.val = '';
  this.op='-';
}

equ(){
  this.op2 = this.val;
  this.val = '';
  this.op1 = parseFloat(this.op1);
  this.op2 = parseFloat(this.op2);
  switch(this.op){
  case '+' :this.res = (this.op1+this.op2);break;
  case '-' :this.res = (this.op1-this.op2);break;
  case '/' :this.res = (this.op1/this.op2);break;
  case '*' :this.res = (this.op1*this.op2);break;
  default:break;
}
this.val += this.res; 
}

func(t){
	this.vare += t;
}
clear(){
  this.val = "";
}
}