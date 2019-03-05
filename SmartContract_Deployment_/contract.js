console.log('Setting up...');
const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Reading Contract...');
const input = fs.readFileSync('Contracts/certificate.sol');

console.log('Compiling Contract...');
const output = solc.compile(input.toString(), 1);
for (var contractName in output.contracts) {
    const bytecode = output.contracts[contractName].bytecode;
    console.log(bytecode);
    const abi = output.contracts[contractName].interface;
    const certificate = web3.eth.contract(JSON.parse(abi));
    console.log('unlocking local geth account');
    const password = "password";
    try {
        web3.personal.unlockAccount("0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d", password);
    } catch (e) {
        console.log(e);
        return;
    }
    console.log("Deploying the contract");
    const certificateContractInstance = certificate.new({
        data: '0x' + bytecode,
        from: "0x80f38b4db9e910bb1dd3019ab44aa947180ccb3d",
        gas: 2000000
    }, (err, res) => {
        if (err) {
            console.log(err);
            return;
         }
         console.log(res);
        // // If we have an address property, the contract was deployed
        // // if (res.address) {
            console.log("contract addres");
            console.log('Contract address: ' + res.address);
    
    });
}

