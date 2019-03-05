import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {passValidator} from './../custom-validator'

export interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  myForm: FormGroup;
  hide = true;
  post: any;
  name: string = '';
  Roles: string = '';
  phone: number;
  email: string = '';
  password: string = '';
  cnfpassword: string = '';
  
  roles: Role[] = [
    {value: 'student', viewValue: 'Student'},
    {value: 'requester', viewValue: 'Requester'}
  ];

  constructor(private fb: FormBuilder){
  }

  ngOnInit() {
    this.myForm = this.fb.group( {
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'Roles': [''],
      'phone':['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      'password': ['', [Validators.required, passValidator, Validators.pattern('^[0-9]*[a-zA-Z0-9]+[a-zA-Z0-9]+[a-zA-Z0-9]+$')]],
      'cnfpassword': ['', [Validators.required, passValidator]]
    });
  }

  initialize(){
    this.myForm.setValue({
      name: '',
      Roles: '',
      phone: "",
      email: '',
      password: '',
      cnfpassword: '',
    })
  }
  abc(){
    this.initialize();
    console.log(this.myForm.value);
  }

  
}
