import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { CarService } from '../car.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  autoTicks = true;
  showTicks = true;
  max = 10000;
  thumbLabel = true;
  value = 0;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  priceSlider = 150;
  createForm:FormGroup;
  name:String;
  price:Number;
  productImage:String;
  myForm: Product;
  i;
  replace=[];
  slid =  0;
  imgUrl = "http://localhost:3001/";
  constructor(private fb: FormBuilder, private carService: CarService, private router:Router ) {
    this.createForm=this.fb.group({
      name:['',[Validators.required,Validators.maxLength(15)]],
      price:['',[Validators.pattern('^[0-9]*$'),Validators.required]],
      productImage: '',
      company:''
      });

   }



  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Engine' },
      { item_id: 2, item_text: 'Radiator' },
      { item_id: 3, item_text: 'Suspension' },
      { item_id: 4, item_text: 'Brake Pads' },
      { item_id: 5, item_text: 'Chassis' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Suspension' },
      { item_id: 4, item_text: 'Brake Pads' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      size: '6',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

  }
   file;
   response;
   
  onFileChanged(event) {
    
    if(event.target.files[0].type == 'image/png' || event.target.files[0].type == 'image/jpg' || event.target.files[0].type == 'image/jpeg'){
      this.file = event.target.files[0];
    }
    else{
      this.file = "";
      alert("only jpg png and jpeg");
    }
    
  }


  onItemSelect (item:any) {
    this.replace.splice(--item.item_id, 0 , item.item_text);
    console.log(this.replace);
  }
  onSelectAll (items: any) {
    this.replace=[];
    for(var i=0; i<5; i++){
      this.replace.splice(items.i, 0 , items[i].item_text);
    }
    console.log(this.replace);
  }
  onItemDeSelect(item:any){
    this.replace.splice(--item.item_id, 1);
    console.log(this.replace);
  }

  
  slider(e){
this.slid = e.value;
console.log();
  }
  



  update(id){
    this.router.navigate([`/edit/${id}`]);
    }

  delete(id){
    if (confirm("Confirm to Delete")) {
      this.carService.delete(id).subscribe(() => {
      this.router.navigate(['/product']);
      this.get();
        });
      }
    }

  get(){
    this.carService.get().subscribe((res:any) => {
  console.log(res);
  this.i = res.count;
  this.response = res.products;
  console.log(this.response);
  
  
  //this.imgUrl = "http://localhost:3001/"+res.products[i].productImage;
  //console.log(res.products[0].name);
    })
  }
  
  addProduct(){
  this.myForm = this.createForm.value;
  //console.log(this.file.type);
  // this.myForm.productImage = this.myForm.productImage.slice(12);
  // this.myForm.productImage = "/home/reginaldanthony/Desktop/" + this.myForm.productImage;
  if(this.file == ""){
  alert("Please change ur file");
  }else{ 
  this.carService.addProduct(this.myForm.name, this.myForm.price,  this.file, this.myForm.company, this.replace)
  .subscribe(() => {
    this.router.navigate(['/products']);
    this.get();
  })}
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

}
class Product{
_id: Number;
name:String;
price:Number;
productImage:String;
company:String;
}


