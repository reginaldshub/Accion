var Hello = artifacts.require("Hello");

// contract('Hello', function(){
//   it("should return the name Tony", function(){
//     return Hello.deployed().then(function(instance){
//       return instance.SetMessage('Tony').then(function(){
//         return instance.GetMessage.call();
//       }).then(function(name){
//         assert.equal(name, "Tony", "the name was not Tony");
//       });
//     });
//   });
// });

contract('Hello', function(accounts) {

    let TestContractInstance = null;
    
    beforeEach('setup contract for each test', async() => {
    TestContractInstance = await Hello.new("hello", 5);
    })
    
    it('should have msg and value initialized', async() => {
    let value = await TestContractInstance.value();
    let mymsg = await TestContractInstance.mymsg();
    assert.equal(value, 5);
    assert.equal(mymsg, "hello");
    })
    
    })