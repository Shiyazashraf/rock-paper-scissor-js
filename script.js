


const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener('click',game))
const playerscore = document.querySelector('#score-player');
const compscore = document.querySelector('#score-comp');
const results = document.querySelector(".results");
const comp_option = document.querySelector("#comp-option");
const playagain = document.querySelector(".playagain");
playagain.addEventListener('click', () => {
    location.reload();
})
let score_player = 0;
let score_comp = 0;

 function game(e){

    if(score_player != 5 && score_comp != 5){

    
    let player = e.target.value;
    let computer = getComputerChoice();

    

    comp_option.textContent = computer;

    let result = play(player,computer);
    if (result == "You Win!"){
        score_player++;
        playerscore.textContent = score_player;
        results.textContent = `${result}, ${player} beats ${computer}!! `;
        
    }
    else if(result == "You Lose!"){
        score_comp++;
        compscore.textContent = score_comp;
        results.textContent = `${result}, ${computer} beats ${player}!! `;
        

    }
    else if(result == "it's a tie"){
        results.textContent = `${result}, both chose same objects`;
    }

        
    }
    if(score_player == 5){
        results.textContent = "player won!";
        return;
    }else if(score_comp == 5){
        results.textContent = "computer won!";
        return;
    }
    else {
        return;
    }
}
//fn to get the choice of the computer
function getComputerChoice(){
    let rps = ['rock' , 'paper', 'scissor'];
    let comp = rps[Math.floor(Math.random()* rps.length)];
    return comp;
}


function play(player,comp){
    // r > S , p > r , s > p
    if((player == 'rock' && comp == 'scissor') || (player == 'paper' && comp == 'rock')||(player == 'scissor' && comp == 'paper')){
            return "You Win!"
    }
    else if(player == comp){
        return "it's a tie"
    }
    else {
        return "You Lose!"
    }
    }












