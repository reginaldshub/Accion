
import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    public employees=[];
  constructor(private _employeeservice:EmployeeserviceService) { }
screen:boolean=true;
  callme(){
 this._employeeservice.getEmployee().subscribe(data => this.employees=data);
  setTimeout(() => {
    this.screen=false;
    
   }, 1900);

  }

  ngOnInit(){

  }

}
