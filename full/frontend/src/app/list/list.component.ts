import { Component, OnInit } from '@angular/core';
import {CreateComponent} from './../create/create.component';
import { CrudService } from '../../service/crud.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  p: number = 1;

  constructor(private service: CrudService) { }
list;
  ngOnInit() {
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
