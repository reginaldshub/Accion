import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String;
  age: Number;
  gender: String;
  address: String;
  createdAt: Date;

  constructor(private service: CrudService) { }
  list;

  public onADD() {
    console.log("ADD");
    const data = { name: this.name, age: this.age, gender: this.gender, address: this.address };
    this.service.addData(data).subscribe((response: any) => {
      console.log("Response", response);
      if (response.success) {
        //alert("added sccessfully");
        this.name = null;
        this.age = null;
        this.gender = null;
        this.address = null;
      } else {
        
       
      }
    });
  }

  public onGET() {
    console.log("GET");
    console.log(this.name);
    const data = { name: this.name, age: this.age, gender: this.gender, address: this.address };
     if (this.name != null) {
      this.service.getSpecificData(this.name).subscribe((response: any) => {
        console.log("Response", response);
        console.log(response.age);
        if (response.success) {
          
          //alert(response.message);
        }else{
          this.age = response.age;
          this.gender = response.gender;
          this.address = response.address;
          //alert(response.message);
        }
      }, (err) => {
          //alert(err.message);
      });}
      else {
      this.service.getData().subscribe((response: any) => {
        console.log("Response", response);
        this.list = response.customers;
        if (response.success) {
          //alert(response.message);
          //alert("message")
        }
      });
    }
  }
    
  public onDELETE() {
    console.log("DELETE");
    console.log(this.name);
    this.service.getDelete(this.name).subscribe((response: any) => {
      console.log("Response", response);
      if (response.success) {
        //alert("deleted");
        this.name = null;
        this.age = null;
        this.gender = null;
        this.address = null;
      }
      else{
        //alert("could not delete");
      }
    });
  }
  public onUPDATE() {
    const data = { age: this.age, gender: this.gender, address: this.address };
    console.log("Update");
    console.log(this.name);
    this.service.getUpdate(this.name, data).subscribe((response: any) => {
      console.log("Response", response);
      if (response.success) {
        //alert("updated");
        this.name = null;
        this.age = null;
        this.gender = null;
        this.address = null;
      }
      else{
        //alert("could not update");
      }
    });
  }
}