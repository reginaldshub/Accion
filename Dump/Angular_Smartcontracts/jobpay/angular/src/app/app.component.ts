import { Component } from '@angular/core';

import { ServiceService } from './service.service'
import { print } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transferFrom='';
  amount=0;
  print:any;

  constructor( public ethcontractService: ServiceService ){
    this.initAndDisplayAccount();
    this.BasicInfo();
  }

  initAndDisplayAccount = () => {
    this.ethcontractService.getAccountInfo().then(function(acctInfo : any){
      // console.log(acctInfo);
    }).catch(function(error){
      console.log(error);
    });
  };

  BasicInfo(){
    let that = this;
    this.ethcontractService.BasicInfo().then(function(acctInfo : any){
      console.log(acctInfo);
    }).catch(function(error){
      console.log(error);
    });
  }

  getEmployer(){
    let that = this;
    this.ethcontractService.getEmployer().then(function(employer : any){
      console.log(employer);
      that.print = employer;
    }).catch(function(error){
      console.log(error);
    });
  }

  getDeployer(){
    let that = this;
    this.ethcontractService.getDeployer().then(function(deployer : any){
      console.log(deployer);
      that.print = deployer;
    }).catch(function(error){
      console.log(error);
    });
  }

  getWorker(){
    let that = this;
    this.ethcontractService.getWorker().then(function(worker : any){
      console.log(worker);
      that.print = worker;
    }).catch(function(error){
      console.log(error);
    });
  }

  getName(){
    let that = this;
    this.ethcontractService.getName().then(function(name : string){
      console.log(name);
      that.print = name;
    }).catch(function(error){
      console.log(error);
    });
  }


  transferEther(event){
    let that = this;
    this.ethcontractService.transferEther(
      that.transferFrom,
      that.amount
    ).then(function(){
      that.initAndDisplayAccount();
    }).catch(function(error){
      console.log("error");
    });
  }

}