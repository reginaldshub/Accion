var Game = artifacts.require("Game");

contract('Game', function(accounts) {

    let GameContractInstance = null;
    let Player1 = accounts[0];
    let Player2 = accounts[1];

    let Player1Played;
    let Player2Played;

    let Player1Deposit;
    let Player2Deposit;

    let GameFinished;
   let Winner;
    let Gains;

    beforeEach('setup contract for each test', async() => {
        GameContractInstance = await Game.new();
    })
    
    it('player1 assigned to deployer', async() => {
        let player1 = await GameContractInstance.player1();
        assert.equal(player1, Player1);
    })

    it('player2 assigned to account[1]', async() => {
        await GameContractInstance.registerAsAnOpponent(accounts[1]);
        let player2 = await GameContractInstance.player2();
        assert.equal(player2, Player2);
    })
    

    })