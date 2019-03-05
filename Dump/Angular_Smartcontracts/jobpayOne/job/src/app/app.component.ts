import { ContractsService } from './ethcontract.service';
import * as Web3 from 'web3';
import { Component, HostListener, NgZone } from '@angular/core';
const Web3 = require('web3');
const contract = require('truffle-contract');
const coinArtifacts = require('../../build/contracts/MetaCoin.json');
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts:any;
  transferFrom = '0x0';
  balance ='0 ETH';
  transferTo='';
  amount=0;
  remarks='';

  constructor( private ethcontractService: ContractsService ){
    // this.initAndDisplayAccount();
    ethcontractService.getUserBalance().then(balance => this.balance = balance);
    var provider = new Web3.providers.HttpProvider("http://localhost:7545");

// the truffle-contract package
var contract = require("truffle-contract");

// include the file created by truffle build in `build/`
var myContractDef = require('./../../../build/contracts/JobPayContract.json');

// Create the wrapped contract
var MyContract = contract(myContractDef);

// give it web3 powers!
MyContract.setProvider(provider);

// use the contract
MyContract.deployed(instance => {
console.log(instance.test());
})

  }

  // initAndDisplayAccount = () => {
  //   let that = this;
  //   this.ethcontractService.getAccountInfo().then(function(acctInfo : any){
  //     console.log(acctInfo);
  //     that.transferFrom = acctInfo.fromAccount;
  //     that.balance = acctInfo.balance;
  //   }).catch(function(error){
  //     console.log(error);
  //   });

  // };

  // transferEther(){
    // console.log("tony")
    // event
//     let that = this;
// console.log(this.transferTo);
    // this.ethcontractService.transferEther(
      // this.transferFrom,
      // this.transferTo,
      // this.amount,
      // this.remarks
    // )
    // .then(function(a){
    //   // that.initAndDisplayAccount();
    //   console.log(a);
    // }).catch(function(error){
    //   console.log(error);
    //   // that.initAndDisplayAccount();
    // });
  // }
}


