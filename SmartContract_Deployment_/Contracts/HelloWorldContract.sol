
pragma solidity ^0.4.4;

contract JobPayContract {
    address public deployer;
   
    address public employer;
    address public worker;
    string public name = "tony";

  uint256 public charge;

  constructor (address _worker, address _employer) public {
        worker = _worker;
	employer = _employer;
   	deployer = msg.sender;
   	charge = 0;
  }

 function tony(string name) public payable {
    require(employer == msg.sender);
    charge += msg.value;
  }


  function getEmployer() public view returns(address){
    return employer;
  }
  
  function getDeployer() public view returns(address){
    return deployer;
  }
  
  function getWorker() public view returns(address){
    return worker;
  }
  
  function getName() public view returns(string){
    return name;
  }

  function payWorker() public {
    require(deployer == msg.sender);

    // transfer pay amount to tasker
    worker.transfer(charge);

    // nullify pay amount manually
    charge = 0;
  }

}