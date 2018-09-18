import { Component } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  name: String;
  age: Number;
  gender: String;
  address: String;
  createdAt: Date;


  constructor(private service: CrudService, private router:Router) { }
  public searchdata;
selectedFile = null;
  public onSelect(event){
    this.selectedFile = event.target.files[0];
  }
  public onADD(p) {
    console.log("ADD");
    const data = {name: this.name, age: this.age, gender: this.gender, address: this.address };
    // if( this.selectedFile != null){
     
    //   this.service.upload(this.selectedFile).subscribe((response: any) => {
    //     console.log("Response", response);
    //     if (response.success) {
    //       alert("success");
    //     } else {         
    //     }
    //   });
    // }
    // else{
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
  //}
 
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
        this.router.navigate(['/list']);
     
    }
  }

    public search(fin){
      console.log("value is"+fin.value);
     // this.router.navigate(['/searchresults']); 
      this.service.getSpecificData(fin).subscribe((response: any) => {
        console.log("Response", response);
        console.log(response.age);
        if (response.success) {
          //alert(response.message);
        }else{
          this.searchdata = response;
          console.log(response);
        //   response.name;
        //  response.age;
        //   response.gender;
        //   response.address;
          //alert(response.message);
        }
      }, (err) => {
          //alert(err.message);
      });}
    
    
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