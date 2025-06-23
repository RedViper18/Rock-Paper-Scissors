function getComputerChoice(){
    let computer = Math.random();

    if(0<=computer && computer<0.33){
        return "rock";
    }

    else if(0.33<=computer && computer<0.66){
        return "paper";
    }

    else if(0.66<=computer && computer<1){
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter rock,paper or scissors for this Round-"+round).toLowerCase();
}

function playRound(humanSelection,computerSelection){
    if(humanSelection == computerSelection){
        console.log("It's a TIE!, both chose "+humanSelection);
    }

    else if((humanSelection == "rock" && computerSelection == "scissors") || (humanSelection == "scissors" && computerSelection == "paper") || (humanSelection == "paper" && computerSelection == "rock")){
        console.log("You WIN!, "+humanSelection+" beats "+computerSelection);
        humanCount++;
    }

    else{
        console.log("You LOSE!, "+computerSelection+" beats "+humanSelection);
        computerCount++;
    }
}

function playGame(){
    for(let i=1;i<=5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        round++;
    }
    if(humanCount == computerCount){
        console.log("After the end of 5 rounds, It's a TIE!");
        console.log("Your score: "+humanCount);
        console.log("Computer score: "+computerCount);
    }
    else if(humanCount>computerCount){
        console.log("After the end of 5 rounds, You WIN!");
        console.log("Your score: "+humanCount);
        console.log("Computer score: "+computerCount);
    }
    else{
        console.log("After the end of 5 rounds, You LOSE!");
        console.log("Your score: "+humanCount);
        console.log("Computer score: "+computerCount);
    }
    
}

let humanCount = 0;
let computerCount = 0;
let round = 1;



playGame();
