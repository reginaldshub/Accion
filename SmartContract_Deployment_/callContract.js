console.log('Setting up...');
const Web3 = require('web3');
console.log("reading abi");
const HelloWorldAbi = require("./HelloWorldABI.json");
console.log("connecting");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const helloworldContract = web3.eth.contract(HelloWorldAbi);
var helloworldContractInstance = helloworldContract.at("0xc85186301cd2dc43ba47033f5f7841eec03bded0");
console.log(helloworldContractInstance.getDeployer());
// helloworldContractInstance.sayHi.call();