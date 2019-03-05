const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
// const Transaction = require('../models/transaction');
// const Accountuser = require('../models/accountuser');
// const config = require('../config/database');
// var ethers = require('ethers');
// var providers = require('ethers-providers');
// var util = require('ethereumjs-util');
// const Tx = require('ethereumjs-tx');
// var request = require("request");



console.log('Setting up...');
// const solc = require ('solc');
const Web3 = require ('web3');
console.log('Reading abi');
const certificateABI = require("./certificates.json");
console.log('Connecting');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const tempContract = web3.eth.contract(certificateABI);
var tempContractInstance = tempContract.at("0xc85186301cd2dc43ba47033f5f7841eec03bded0");
// console.log(tempContractInstance);

router.get('/certificate',function(req,res){
    tempContractInstance.getCertificate("tenth",{
    from:"0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
    gas:4000000},function (error, result){ 
        if(!error){
            console.log(result);
        } else{
            console.log(error);
        }
})
})

router.get('/request',function(req,res){
    tempContractInstance.requestAccess.call();
    res.send("requested");
})

router.get('/grant',function(req,res){
    tempContractInstance.grantAccess.call();

    res.send("granted");
})

router.get('/get',function(req,res){
    res.send("hello from regi");
    // this is to set employer's acccount and  set profile data
    const password = "password";
    try {
        web3.personal.unlockAccount("0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d", password);
    } catch (e) {
        console.log("erreor");
        return;
    }

   tempContractInstance.setCertificateDetails("tenth","maths",10,{
    from:"0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
    gas:4000000},function (error, result){ 
        if(!error){
            console.log(result);
        } else{
            console.log(error);
        }
});

})


// tempContractInstance.setProfileData("regi","12345567890","pineapple@gmil.com",1997,"404",{
//     from:"0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
//     gas:4000000},function (error, result){ 
//         if(!error){
//             console.log(result);
//         } else{
//             console.log(error);
//         }
// });

// this is to call getProfiledata by specific pan number
// console.log(tempContractInstance.getProfileData.call("404"));

// this is to set intern and confirm it for interview
// const password2 = "password";
// try {
//     web3.personal.unlockAccount("0xa58530a61902e8bd518a434ff8db413ef4e53940", password2);
// } catch (e) {
//     console.log(e);
//     return;
// }


// tempContractInstance.confirmProfile("104",{
//     from: "0xa58530a61902e8bd518a434ff8db413ef4e53940",
//     gas:4000000},function (error, result){ 
//         if(!error){
//             console.log(result);
//         } else{
//             console.log(error);
//         }
// });


// here employer calls intern for interview 
// const password3 = "password";
// try {
//     web3.personal.unlockAccount("0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d", password3);
// } catch (e) {
//     console.log(e);
//     return;
// }

// tempContractInstance.CallforInterview("104",{
//     from:"0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
//     gas:4000000},function (error, result){ 
//         if(!error){
//             console.log(result);
//         } else{
//             console.log(error);
//         }
// });


// here employer sets the results of interview to an intern
// const password4 = "password";
// try {
//     web3.personal.unlockAccount("0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d", password4);
// } catch (e) {
//     console.log(e);
//     return;
// }

// tempContractInstance.setInterviewResult("404","pass","6months",15000,{
//     from:"0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
//     gas:4000000},function (error, result){ 
//         if(!error){
//             console.log(result);
//         } else{
//             console.log(error);
//         }
// });


//here intern can view the result 
// console.log(tempContractInstance.getInterviewResult.call("404"));

module.exports = router;