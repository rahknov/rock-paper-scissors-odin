console.log("Hello world");

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


    ;


function playRound(humanChoice, computerChoice){
    let human_score = 0;
    let computer_score = 0;
    

    let human_choice = humanChoice.toLowerCase();
    let computer_choice = computerChoice;
    if(human_choice === computer_choice){
        return `Tie!\n\nYour Score: ${human_score}\nComputer Score: ${computer_score}`;
    }else if(human_choice === "rock" && computer_choice === "paper" ){
        ++computer_score;
        return `Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou lose!, ${computer_choice} beats ${human_choice}`;
    }else if(human_choice === "paper" && computer_choice === "scissors" ){
        ++computer_score;
        return `Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou lose!, ${computer_choice} beats ${human_choice}`;
    }else if(human_choice === "scissors" && computer_choice === "rock" ){
        ++computer_score;
        return `Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou lose!, ${computer_choice} beats ${human_choice}`;
    }else if(human_choice === "rock" && computer_choice === "scissors"){
        ++human_score;
        return `Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou win!, ${human_choice} beats ${computer_choice}`;
    }else if(human_choice === "paper" && computer_choice === "rock"){
        ++human_score;
        return `Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou win!, ${human_choice} beats ${computer_choice}`;
    }else if(human_choice === "scissors" && computer_choice === "paper"){
        ++human_score;
        return `Your Score: ${human_score}\nComputer: ${computer_score}\n\nYou win!, ${human_choice} beats ${computer_choice}`;
    }else{
        return "Bruh";
    }
    
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
}












