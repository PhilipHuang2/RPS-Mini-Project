// Pseudo Code
// 1. Ask user to enter RPS
// 2. Ask computer for RPS
// 3. See who wins
// 4. Tell user who wons
// 5. add to counter of wins/losses and ties
// 6. prompt user to replay game

// Variables
// User Choice - 
// Computer Choice
// 3 counters - Win Losses Ties

// helper functions
// Determining winner
// adding to counter
// validating input
// Determining computer choice


// Ask the user at least once for their valid input
do {
    var userInput = prompt("Please enter R, P, or S to play Rock Paper Scissors.");
    userInput = parseUserInput(userInput);
} while (!userInput)




function parseUserInput (userInput) {
    // taking user Input and making sure that it is a valid input
    userInput = userInput.toUpperCase();
    // 6 different valid inputs
    // R or ROCK or P or PAPER or S or SCISSOR
    if(userInput == "R" || userInput == "ROCK")
    {
        //Sanitizing valid input
        return "Rock";
    }
    else if(userInput == "P" || userInput == "PAPER")
    {
        return "Paper";
    }
    else if (userInput == "S" || userInput =="SCISSOR")
    {
        return "Scissor";
    }
    else
        return false;
}


