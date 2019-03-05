import { Injectable } from '@angular/core';

import * as TruffleContract from 'truffle-contract';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;


let tokenAbi = require('../../../build/contracts/JobPayContract.json');

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

private web3Provider:null;
  constructor() {
    this.web3Provider = new Web3.providers.HttpProvider("http://localhost:7545");
      window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
      this.BasicInfo();
   }

   getAccountInfo() {
    return new Promise((resolve, reject) => {
      window.web3.eth.getCoinbase(function(err, account) {
        if(err === null) {
          window.web3.eth.getBalance(account, function(err, balance) {
            if(err === null) {
              return resolve({fromAccount: account, balance:(window.web3.fromWei(balance, "ether")).toNumber()});
            } else {
              return reject({fromAccount: "error", balance:0});
            }
          });
        }
      });
    });
  }


  BasicInfo() {
    let that = this;

    return new Promise((resolve, reject) => {
      let paymentContract = TruffleContract(tokenAbi);
      paymentContract.setProvider(that.web3Provider);

      paymentContract.deployed().then(function(instance) {
        // console.log(instance.address)
        return resolve(instance.address)
        }).catch(function(error){
          console.log(error);

          return reject("Error in transferEther service call");
        });
    });
  }

  getDeployer() {
    let that = this;

    return new Promise((resolve, reject) => {
      let paymentContract = TruffleContract(tokenAbi);
      paymentContract.setProvider(that.web3Provider);
      paymentContract.deployed().then(function(instance) {
        return resolve(instance.getDeployer())
        }).catch(function(error){
          return reject("Error in service call");
        });
    });
  }

  getEmployer() {
    let that = this;

    return new Promise((resolve, reject) => {
      let paymentContract = TruffleContract(tokenAbi);
      paymentContract.setProvider(that.web3Provider);
      paymentContract.deployed().then(function(instance) {
        return resolve(instance.getEmployer())
        }).catch(function(error){
          return reject("Error in service call");
        });
    });
  }

  getWorker() {
    let that = this;

    return new Promise((resolve, reject) => {
      let paymentContract = TruffleContract(tokenAbi);
      paymentContract.setProvider(that.web3Provider);
      paymentContract.deployed().then(function(instance) {
        return resolve(instance.getWorker())
        }).catch(function(error){
          return reject("Error in service call");
        });
    });
  }

  getName() {
    let that = this;

    return new Promise((resolve, reject) => {
      let paymentContract = TruffleContract(tokenAbi);
      paymentContract.setProvider(that.web3Provider);
      paymentContract.deployed().then(function(instance) {
        return resolve(instance.getName())
        }).catch(function(error){
          return reject("Error in service call");
        });
    });
  }

  transferEther(
    _transferFrom,
    _amount
  ) {
    let that = this;
    return new Promise((resolve, reject) => {
      let paymentContract = TruffleContract(tokenAbi);
      paymentContract.setProvider(that.web3Provider);
    //   paymentContract.tony.sendTransaction( "tony", {
    //     from: _transferFrom,
    //     gas: 4200000,
    //     value: _amount
    // });

      paymentContract.deployed().then(function(instance) {
        paymentContract.tony.send({from:_transferFrom, value:window.web3.toWei(_amount, "ether")}); 
        // var tnxObj = {from: _transferFrom, to: instance.address, value: window.web3.toWei(_amount, "ether")};
        // Web3.eth.sendTransaction({from: _transferFrom,to: instance.address, value: window.web3.toWei(_amount, "ether")});
        // Web3.eth.sendTransaction({tnxObj} , function(err, result) {
        //   if (err != null) {
        //     console.error("Error while sending transaction: "+err);
        //   }
        //   else{
        //     console.log("Transaction Sent!"+result);
        //   }  
        // });
        // console.log(instance.address);
        // Web3.eth.sendTransaction({from:_transferFrom,to:instance.address, value:Web3.toWei(0.05, "ether")});
        
        }).then(function(status) {
          if(status) {
            return resolve({status:true});
          }
        }).catch(function(error){
          console.log(error);

          return reject("Error in transferEther service call");
        });

      //   var tnxObj = {from: _transferFrom, to: Instance, value: window.web3.toWei(_amount, "ether")};
      // paymentContract.send({tnxObj} , function(err, result) {
      //   if (err != null) {
      //     console.error("Error while sending transaction: "+err);
      //   }
      //   else{
      //     console.log("Transaction Sent!"+result);
      //   }  
      // });

       
    });

  }

}
