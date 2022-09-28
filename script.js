// Pseudo Code
// 1. Ask user to enter RPS
// 2. Ask computer for RPS
// 3. See who wins
// 4. Tell user who wons
// 5. add to counter of wins/losses and ties
// 6. Display results
// 7. prompt user to replay game

// Variables
// User Choice - 
// Computer Choice
// 3 counters - Win Losses Ties

// helper functions
// Determining winner
// adding to counter
// validating input
// Determining computer choice

// initialize counters
var wins = 0;
var losses = 0;
var ties = 0;

// Ask the user at least once for their valid input


// create a function that compares the values stored for user choice and computer choice



// console.log(evaluator("R","S"));

// do {
//     var userInput = prompt("Please enter R, P, or S to play Rock Paper Scissors.");
//     userInput = parseUserInput(userInput);
// } while (!userInput)

// confirm("Wins: " + wins + "\n Loses: " + losses + "\nTies: " + ties)

function playAgain (){
    do {
        var userInput = prompt("Please enter R, P, or S to play Rock Paper Scissors.");
        userInput = parseUserInput(userInput);
    } while (!userInput);
    var userInputCounter = userInput;
    var computerScienceCounter = generateComputerChoice();
    evaluator(userInputCounter, computerScienceCounter);
    alert("Wins: " + wins + "\n Loses: " + losses + "\nTies: " + ties);
    if (confirm("Do you want to play again?")){
     playAgain();
   }
    
}

playAgain();

// Store userInput into variable for counter



//Generate computer choice

// generate number values for RPS, then randomly choose one of the numbers, and assign the resulting choice to a variable

function generateComputerChoice (){
    // expected range is 0,1,2
    var computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){
        return "R";
    }
    else if ( computerChoice == 1){
        return "S";
    }
   else {
        return  "P";
    }
}


function evaluator(user,computer){
    if (user == computer){

        alert("The computer chose " + computer  + ". It's a tie");
        ties = ties + 1;
    }
    else if ((user == "R" && computer == "S" ) || (user == "S" && computer == "P" ) || (user == "P" && computer == "R" )){
        alert("The computer chose " + computer  + ". User Wins");
        wins = wins +1;
    }else {
        alert("The computer chose " + computer  + ". Computer Wins");
        losses = losses + 1;
    }
}


function parseUserInput (userInput) {
    // taking user Input and making sure that it is a valid input
    userInput = userInput.toUpperCase();
    // 6 different valid inputs
    // R or ROCK or P or PAPER or S or SCISSOR
    if(userInput == "R" || userInput == "ROCK")
    {
        //Sanitizing valid input
        return "R";
    }
    else if(userInput == "P" || userInput == "PAPER")
    {
        return "P";
    }
    else if (userInput == "S" || userInput =="SCISSOR")
    {
        return "S";
    }
    else
        return false;
}


