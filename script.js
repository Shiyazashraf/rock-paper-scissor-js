
//fn to get the choice of the computer
function getComputerChoice(){
    let rps = ['rock' , 'paper', 'scissor'];
    let comp = rps[Math.floor(Math.random()* rps.length)];
    console.log(comp);
    return comp;
}


function play(player,comp){
    // r > S , p > r , s > p
    
    switch(player){
        case "rock" :
            if(comp == "rock"){
                return "it's a tie";
            }
            else if(comp == "paper"){
                return "You Lose!";
            }
            else {
                return "you win!";
            }
            
        case "paper" :
            if(comp == "rock"){
                return "You Win!";
            }
            else if(comp == "paper"){
                return "It's a tie";
            }
            else {
                return "you Lose!";
            }
            
        case "scissor" :
            if(comp == "rock"){
                return "You Lose!";
            }
            else if(comp == "paper"){
                return "You Win!";
            }
            else {
                return "It's a tie";
            }
    }
}
// game function to keep score
  function game(){
    
    let score_player = 0;
    let score_comp = 0;
    for(let i = 0; i < 5; i++){
        player = window.prompt("enter Rock, Paper, or Scissors").toLowerCase();
        comp = getComputerChoice();
        let result = play(player,comp);
        if (result == "You Win!"){
            score_player+=1;
            console.log(result);
            
        }
        else if(result == "You Lose!"){
            score_comp+=1;
            console.log(result + ", " + comp + " beats " + player);

        }
        else {
            console.log(result);
        }
        console.log("player score: " + score_player);
        console.log("computer score: " + score_comp);
    }
  }
let player;
let comp;
game();



