 //1. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!//

function computerSelection (){
   let choices = ["Rock", "Paper", "Scissors"]
   return choices[Math.floor(Math.random()*choices.length)]
}
           

let answer = prompt("Rock, Paper, or Scissors?")
function playerSelection (answer) {
function titleCase (answer) {
   const lower = answer.toLowerCase ()
   return answer.charAt(0).toUpperCase() + lower.slice(1)}}

   
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock'))
    {
        playerPoint = 1
        return ('You win! ' + playerSelection + ' beats ' + computerSelection)
    }
    else {
        return ('You lose! ' + computerSelection + ' beats ' + playerSelection)
    }

    
}

function game(roundsTotal = 5) {
    let roundsPlayed = 0
    let playerScore = 0

    while (roundsPlayed < roundsTotal) {

        if (playerSelection == computerSelection) {
            console.log('It\'s a tie. You both chose ' + playerSelection)
            
        }

        playerScore += playRound(playerSelection, computerSelection)
        roundsPlayed++
    }

    if (playerScore > (roundsPlayed / 2)) {
        return ('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You win!')
    }
    else if (playerScore == (roundsPlayed / 2)) {
        return ('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You tied.')
    }
    else {
        return ('You won ' + playerScore + ' out of ' + roundsPlayed + ' rounds. You lost!')
    }
}
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound);
console.log(game)


 //2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"//
  //Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).//
 //Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results://
 //Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. //
    //You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.//
    //At this point you should be using console.log() to display the results of each round and the winner at the end.//
    //Use prompt() to get input from the user. Read the docs here if you need to.//
    //Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.//
    //Feel free to create more “helper” functions if you think it would be useful.//
