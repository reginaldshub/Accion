import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service'; 

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  constructor(private service: CrudService) { }

  ngOnInit() {
    // this.service.getSpecificData(fin).subscribe((response: any) => {
    //   console.log("Response", response);
    //   console.log(response.age);
    //   if (response.success) {
        
    //     //alert(response.message);
    //   }else{
    //     this.name = response.name;
    //     this.age = response.age;
    //     this.gender = response.gender;
    //     this.address = response.address;
    //     //alert(response.message);
    //   }
    // }, (err) => {
    //     //alert(err.message);
    // });
  }

}
