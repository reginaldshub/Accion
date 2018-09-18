import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  createForm:FormGroup;
  name:String;
  price:Number;
  productImage:String;
  myForm: Product;
  i;
  imgUrl = "http://localhost:3001/";
  constructor(private fb: FormBuilder, private carService: CarService, private router:Router ) {
    this.createForm=this.fb.group({
      name:['',[Validators.required,Validators.maxLength(15)]],
      price:['',[Validators.pattern('^0*(?:[1-9][0-9]?|125)$'),Validators.required]],
      productImage: ''
      });

   }

  ngOnInit() {
  }
   file;
   response;
  onFileChanged(event) {
    this.file = event.target.files[0];
    
  }

  get(){
    this.carService.get().subscribe((res:any) => {
  console.log(res);
  this.i = res.count;
  this.response = res.products;
  console.log(this.response);
  for(var i=0 ;i<this.i; i++){
    console.log(res.products[i].name);
  }
  
  //this.imgUrl = "http://localhost:3001/"+res.products[i].productImage;
  //console.log(res.products[0].name);
    })
  }
  
  addProduct(){
   
  this.myForm = this.createForm.value;
  //console.log(this.myForm.productImage.slice(12));
  // this.myForm.productImage = this.myForm.productImage.slice(12);
  // this.myForm.productImage = "/home/reginaldanthony/Desktop/" + this.myForm.productImage;
  this.carService.addProduct(this.myForm.name, this.myForm.price,  this.file)
  .subscribe(() => {
    this.router.navigate(['/home']);
  })
  }

}
class Product{
_id: Number;
name:String;
price:Number;
productImage:String;
}


