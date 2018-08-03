import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit  {
  
  country: Country[] = [];
  add: boolean = true;


  constructor() { }

  ngOnInit() {
  	console.log('init')
  	this.country = [
  						{name: 'india', id: 2},
  						{name: 'usa', id: 3}
  					]
  }

  ngAfterViewInit() {
  	console.log('view inited')
  }

  // showDiv() {
  // 	this.show = true;
  // }
  // hideDiv() {
  // 	this.show = false;
  // }\


  selectRow(i, odd) {
  	alert(i + 'type: ' + odd)
  }

  

}

class Country {
	name: string;
	id: number;
}