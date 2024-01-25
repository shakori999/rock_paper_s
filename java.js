const player_select = prompt("Please enter your choice(Rock,Paper,Scissors) choice one of them:");


function getComputerChoice() {

  const items = ['Rock', 'Paper','Scissors']

  const random = Math.floor(Math.random() * items.length);
  computer_choice = items[random]

  //console.log(computer_choice)
  return computer_choice 
}

function getPlayerChoice(choice) {
  //console.log(choice)
  return choice 
}

function round(computerSelection,playerSelection) {
  // paper choice
  if (computerSelection == "Paper" || playerSelection == "Rock") {
    return console.log("You Lose! Paper beats Rock"); 
  } else if (computerSelection == "Paper" || playerSelection == "Paper") {
    return console.log("Still Mate! Paper equals Paper"); 
  } else if (computerSelection == "Paper" || playerSelection == "Scissors") {
    return console.log("You Win! Scissors beats Paper"); 
  }else {
    return console.log("your input not right")
  }

  // Rock choice
  if (computerSelection == "Rock" || playerSelection == "Rock") {
    return console.log("Still Mate! Rock equals Rock"); 
  } else if (computerSelection == "Rock" || playerSelection == "Paper") {
    return console.log("You Win! Paper beats Rock"); 
  } else if (computerSelection == "Rock" || playerSelection == "Scissors") {
    return console.log("You Lose! Rock beats scissors"); 
  }else {
    return console.log("your input not right")
  }

  // Scissors choice
  if (computerSelection == "Scissors" || playerSelection == "Rock") {
    return console.log("You Win! Rock beats Scissors"); 
  } else if (computerSelection == "Scissors" || playerSelection == "Paper") {
    return console.log("You Lose! Scissors beats Paper"); 
  } else if (computerSelection == "Scissors" || playerSelection == "Scissors") {
    return console.log("Still Mate! Scissors equals scissors"); 
  } else {
    return console.log("your input is not right")
  }


};

round(getComputerChoice(),getPlayerChoice(player_select))

