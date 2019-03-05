pragma solidity ^0.4.4;
contract Hello {
//   string greeting;
  string name;
string public mymsg;
uint public value;
 
 constructor(string _msg, uint _value) public{
mymsg = _msg;
value = _value;
}

function() payable public{
 value = msg.value; 
}

  function GetMessage() view public returns (string) {
    return (name);
  }

   function SetMessage(string Name) public{
    name = Name;
  }
}
