console.log("Hello world");


let human_score = 0;
let computer_score = 0;
function getRandom(num){
    return Math.floor(Math.random() * num); 
}

function getComputerChoice(){
    random_number = getRandom(3);
    if(random_number === 0){
        return "rock";
    }else if(random_number ===1){
        return "paper";
    }else if(random_number ===2){
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Pick a Choice:\nRock\nPaper\nScissors");
}


function playRound(humanChoice, computerChoice){
    let human_choice = humanChoice.toLowerCase();
    let computer_choice = computerChoice;
    if(human_choice === computer_choice){
        console.log(`Tie!\n\nYour Score: ${human_score}\nComputer Score: ${computer_score}`);
    }else if(human_choice === "rock" && computer_choice === "paper" ){
        ++computer_score;
        console.log(`Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou lose!, ${computer_choice} beats ${human_choice}`);
    }else if(human_choice === "paper" && computer_choice === "scissors" ){
        ++computer_score;
        console.log(`Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou lose!, ${computer_choice} beats ${human_choice}`);
    }else if(human_choice === "scissors" && computer_choice === "rock" ){
        ++computer_score;
        console.log( `Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou lose!, ${computer_choice} beats ${human_choice}`);
    }else if(human_choice === "rock" && computer_choice === "scissors"){
        ++human_score;
        console.log( `Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou win!, ${human_choice} beats ${computer_choice}`);
    }else if(human_choice === "paper" && computer_choice === "rock"){
        ++human_score;
        console.log(`Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou win!, ${human_choice} beats ${computer_choice}`);
    }else if(human_choice === "scissors" && computer_choice === "paper"){
        ++human_score;
        console.log(`Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou win!, ${human_choice} beats ${computer_choice}`);
    }else{
        console.log("Bruh");
    }
    
}

function playGame(){
    game_count = 0;
    while(game_count < 5){
        if(game_count <5){
        playRound(getHumanChoice(), getComputerChoice());
        game_count++;
        }else{
            game_count = 0;
            human_score = 0;
            computer_score = 0;
        }
    }   
    return 0;
}














