import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardetails;
  show=true;
  imgUrl = "http://localhost:3001/";

  constructor( private carService: CarService, private router:Router) { }

  ngOnInit() {
  }
nav(){
  this.router.navigate(['/product']);
}
getSpec(name){
      if(name == ''){
    this.show = true;
  }else{ 
  this.carService.getSpec(name.value).subscribe((res:any) => {
if(res.product[0]!= null){
this.show = false;
}
console.log(res);
this.cardetails = res.product;
 });
}}
}
