import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
name;product;data;updateForm;price;id;productImage;
  constructor(private carService: CarService, private router:Router, private route:ActivatedRoute) { 
   
    }
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params._id;
      this.carService.getSpec(this.id).subscribe((res:any) => {
      this.product = res.product[0];
      console.log(res.product[0].name);
      });
      });
      this.name= this.product.name;
      this.price = this.product.price;
      this.productImage = this.product.productImage;
      }
      






      }
      // update(){
      // this.carService.update().subscribe(() => {
      
      // });

  
