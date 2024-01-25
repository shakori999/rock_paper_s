const items = ['Rock', 'Paper','Scissors']

const random = Math.floor(Math.random() * items.length);

player_select = "Rock"

function getComputerChoice(choice) {
  return choice 
}

function getPlayerChoice(choice) {
  return choice 
}

function round(computerSelection,playerSelection) {
  if (computerSelection == "Paper") {
    return console.log("You Lose! Paper beats Rock"); 
  };
  if (computerSelection == "Rock") {
    return console.log("still mate! Rock equals Rock");
  };
  if (computerSelection == "Scissors") {
    return console.log("You Win! Rock beats Scissors");
  };
};

round(getComputerChoice(items[random]),getPlayerChoice(player_select))

