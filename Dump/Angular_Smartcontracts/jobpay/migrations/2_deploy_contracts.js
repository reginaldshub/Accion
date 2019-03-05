var jobpay = artifacts.require("./JobPayContract.sol");

module.exports = function(deployer) {
  deployer.deploy(jobpay,"0x701B3bE64693968DDDDcfb5748564b811F0ab749","0xF511E837305aC65399736058D0D57108474B8730");
};
