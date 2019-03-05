// import { Injectable } from '@angular/core';
// import * as Web3 from 'web3';
// import * as TruffleContract from 'truffle-contract';

// declare let require: any;
// declare let window: any;

// let tokenAbi = require('../../../build/contracts/JobPayContract.json');

// @Injectable({
//   providedIn: 'root'
// })

// export class EthcontractService {
//   private web3Provider: null;
//   private contracts: {};


//   constructor() {
//     if (typeof window.web3 !== 'undefined') {
//       this.web3Provider = window.web3.currentProvider;
//     } else {
//       this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
//     }

//     window.web3 = new Web3(this.web3Provider);
//   }

//   // getAccountInfo() {
//   //   return new Promise((resolve, reject) => {
//   //     window.web3.eth.getCoinbase(function(err, account) {

//   //       if(err === null) {
//   //         window.web3.eth.getBalance(account, function(err, balance) {
//   //           if(err === null) {
//   //             return resolve({fromAccount: account, balance:(window.web3.fromWei(balance, "ether")).toNumber()});
//   //           } else {
//   //             return reject({fromAccount: "error", balance:0});
//   //           }
//   //         });
//   //       }
//   //     });
//   //   });
//   // }

//   transferEther() {
//     // let that = this;

//       return new Promise((resolve, reject) => {
//         let paymentContract = TruffleContract(tokenAbi);
//         paymentContract.setProvider(this.web3Provider);
//         paymentContract.deployed().then(function(instance) {
//             return instance.test();
//           }).catch(function(error){
//             // console.log(error);
  
//             return reject("Error in transferEther service call");
//           });
//       });
//   }
// }
//  end of above code;;;;;;

import { Injectable } from '@angular/core';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi = require('./../../../build/contracts/JobPayContract.json');
@Injectable()
export class ContractsService {
  private _account: string = null;
  private _web3: any = new Web3.providers.HttpProvider('http://localhost:7545');
  private _tokenContract: any;
  private _tokenContractAddress: string = "0x44a441195d34ed3c285fb3d4579e45362d89a014";

  constructor() {
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);

      if (this._web3.version.network !== '4') {
        alert('Please connect to the Rinkeby network');
      }
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }

    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
  }

  private async getAccount(): Promise<string> {
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            alert('There was an error fetching your accounts.');
            return;
          }
  
          if (accs.length === 0) {
            alert(
              'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
            );
            return;
          }
          resolve(accs[0]);
        })
      }) as string;
  
      this._web3.eth.defaultAccount = this._account;
    }
  
    return Promise.resolve(this._account);
  }

  public async getUserBalance(): Promise<number> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.balanceOf.call(account, function (err, result) {
        if(err != null) {
          reject(err);
        }
  
        resolve(_web3.fromWei(result));
      });
    }) as Promise<number>;
  }
}